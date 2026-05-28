#!/usr/bin/env python3
"""
KabatOne Weekly SEO Report — pulls live data from Google Search Console API.
Credentials are passed via environment variables:
  GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN
"""

import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import date, timedelta


def get_access_token():
    data = urllib.parse.urlencode({
        "client_id": os.environ["GSC_CLIENT_ID"],
        "client_secret": os.environ["GSC_CLIENT_SECRET"],
        "refresh_token": os.environ["GSC_REFRESH_TOKEN"],
        "grant_type": "refresh_token",
    }).encode()
    req = urllib.request.Request(
        "https://oauth2.googleapis.com/token",
        data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())["access_token"]


def gsc_query(token, payload):
    site = "https%3A%2F%2Fkabatone.com%2F"
    url = f"https://www.googleapis.com/webmasters/v3/sites/{site}/searchAnalytics/query"
    data = json.dumps(payload).encode()
    req = urllib.request.Request(
        url, data=data,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read()).get("rows", [])


def main():
    end = date.today() - timedelta(1)
    start = end - timedelta(7)
    date_end = end.strftime("%Y-%m-%d")
    date_start = start.strftime("%Y-%m-%d")

    print(f"Fetching GSC data: {date_start} → {date_end}")

    token = get_access_token()

    base = {"startDate": date_start, "endDate": date_end, "rowLimit": 20}

    top_queries = gsc_query(token, {**base, "dimensions": ["query"],
                                    "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}]})

    top_pages = gsc_query(token, {**base, "dimensions": ["page"],
                                  "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}]})

    opportunities = gsc_query(token, {
        **base, "rowLimit": 25,
        "dimensions": ["query"],
        "orderBy": [{"fieldName": "impressions", "sortOrder": "DESCENDING"}],
        "dimensionFilterGroups": [{"filters": [
            {"dimension": "query", "operator": "notContains", "expression": "kabatone"}
        ]}]
    })

    result = {
        "date_range": f"{date_start} to {date_end}",
        "top_queries": [
            {"query": r["keys"][0], "clicks": r["clicks"], "impressions": r["impressions"],
             "ctr": round(r["ctr"] * 100, 1), "position": round(r["position"], 1)}
            for r in top_queries
        ],
        "top_pages": [
            {"page": r["keys"][0], "clicks": r["clicks"], "impressions": r["impressions"],
             "ctr": round(r["ctr"] * 100, 1), "position": round(r["position"], 1)}
            for r in top_pages
        ],
        "opportunities": [
            {"query": r["keys"][0], "clicks": r["clicks"], "impressions": r["impressions"],
             "ctr": round(r["ctr"] * 100, 1), "position": round(r["position"], 1)}
            for r in opportunities
            if r["position"] > 4 or r["ctr"] < 0.03
        ],
        "totals": {
            "total_clicks": sum(r["clicks"] for r in top_queries),
            "total_impressions": sum(r["impressions"] for r in top_queries),
            "avg_ctr": round(
                sum(r["ctr"] for r in top_queries) / len(top_queries) * 100, 1
            ) if top_queries else 0,
            "avg_position": round(
                sum(r["position"] for r in top_queries) / len(top_queries), 1
            ) if top_queries else 0,
        }
    }

    print(json.dumps(result, indent=2))
    return result


if __name__ == "__main__":
    main()
