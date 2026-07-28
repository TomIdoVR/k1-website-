#!/usr/bin/env python3
"""
One-shot re-auth for the Google OAuth token used by GSC + GA4 pulls.

Run this whenever the weekly pull fails with HTTP 401 (expired refresh token).
It opens a browser, you authorize with the Google account that has access to
the kabatone.com GSC property and GA4 property 530090453, and it writes a fresh
refresh_token back into .secrets/gsc-credentials.json (a timestamped backup of
the old file is kept).

Usage:  python3 scripts/gsc_reauth.py

NOTE ON THE 7-DAY EXPIRY: if this token keeps dying after ~7 days, the OAuth
consent screen is still in "Testing" status. Fix permanently in Google Cloud
Console -> APIs & Services -> OAuth consent screen -> PUBLISH APP (status
"In production"). Published apps issue long-lived refresh tokens.
"""

import json
import shutil
from datetime import date
from pathlib import Path

from google_auth_oauthlib.flow import InstalledAppFlow

CRED = Path(__file__).resolve().parents[1] / ".secrets" / "gsc-credentials.json"
SCOPES = [
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/analytics.readonly",
]


def main():
    creds = json.loads(CRED.read_text(encoding="utf-8"))
    client_config = {
        "installed": {
            "client_id": creds["client_id"],
            "client_secret": creds["client_secret"],
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "redirect_uris": ["http://localhost"],
        }
    }

    flow = InstalledAppFlow.from_client_config(client_config, SCOPES)
    # access_type=offline + prompt=consent forces Google to return a refresh_token
    creds_new = flow.run_local_server(
        port=0,
        access_type="offline",
        prompt="consent",
        authorization_prompt_message=(
            "Opening browser - sign in with the Google account that has GSC + GA4 access.\n"
            "If it doesn't open, visit this URL:\n{url}"
        ),
    )

    if not creds_new.refresh_token:
        print("ERROR: Google did not return a refresh_token. "
              "Revoke prior access at https://myaccount.google.com/permissions "
              "and run again.")
        return

    backup = CRED.with_name(f"gsc-credentials.json.bak-{date.today():%Y-%m-%d}")
    shutil.copy2(CRED, backup)

    creds["refresh_token"] = creds_new.refresh_token
    CRED.write_text(json.dumps(creds, indent=2) + "\n", encoding="utf-8")

    print(f"\nOK - new refresh token written to {CRED}")
    print(f"Old file backed up to {backup}")
    print("Now run:  python3 scripts/gsc_pull_weekly.py --out SEO/gsc-fresh-<date>.json")


if __name__ == "__main__":
    main()
