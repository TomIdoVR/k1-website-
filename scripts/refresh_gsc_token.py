#!/usr/bin/env python3
"""
Generates a new GSC OAuth refresh token.

Usage:
    python3 scripts/refresh_gsc_token.py

Requires GSC_CLIENT_ID and GSC_CLIENT_SECRET env vars (same as seo_weekly.py).
Opens a local server on port 8080 to catch the OAuth redirect.
http://localhost:8080 must be in the OAuth client's Authorized Redirect URIs.
"""

import http.server
import json
import os
import threading
import urllib.parse
import urllib.request
import webbrowser

CLIENT_ID = os.environ["GSC_CLIENT_ID"]
CLIENT_SECRET = os.environ["GSC_CLIENT_SECRET"]
REDIRECT_URI = "http://localhost:8080"
SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"
AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
TOKEN_URL = "https://oauth2.googleapis.com/token"

auth_code = None


class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        global auth_code
        params = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
        if "code" in params:
            auth_code = params["code"][0]
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"<h2>Authorization successful. You can close this tab.</h2>")
        else:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"<h2>No code received. Try again.</h2>")
        threading.Thread(target=self.server.shutdown).start()

    def log_message(self, *args):
        pass  # suppress access log noise


def main():
    url = (
        f"{AUTH_URL}"
        f"?client_id={urllib.parse.quote(CLIENT_ID)}"
        f"&redirect_uri={urllib.parse.quote(REDIRECT_URI)}"
        f"&response_type=code"
        f"&scope={urllib.parse.quote(SCOPE)}"
        f"&access_type=offline"
        f"&prompt=consent"
    )

    print("Opening browser for Google authorization...")
    print(f"\nIf the browser doesn't open, visit this URL manually:\n\n{url}\n")
    webbrowser.open(url)

    server = http.server.HTTPServer(("localhost", 8080), Handler)
    print("Waiting for redirect on http://localhost:8080 ...")
    server.serve_forever()

    if not auth_code:
        print("ERROR: No authorization code received.")
        return

    data = urllib.parse.urlencode({
        "code": auth_code,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code",
    }).encode()

    req = urllib.request.Request(
        TOKEN_URL, data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    with urllib.request.urlopen(req) as r:
        tokens = json.loads(r.read())

    if "refresh_token" not in tokens:
        print("ERROR: No refresh_token in response. Did you revoke access first?")
        print("Go to myaccount.google.com/permissions, remove the app, then re-run.")
        print("Full response:", json.dumps(tokens, indent=2))
        return

    print("\n✅ New refresh token generated successfully!\n")
    print(f"GSC_REFRESH_TOKEN={tokens['refresh_token']}")
    print("\nUpdate this value in your environment / secrets wherever GSC_REFRESH_TOKEN is stored.")


if __name__ == "__main__":
    main()
