'use client'

import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export default function GoogleTagManager() {
  if (!GTM_ID) return null

  return (
    /* lazyOnload for the same reason as GoogleAnalytics: measured, this
       container and gtag.js together cost 18 mobile Lighthouse points and 2.6s
       of LCP while loading afterInteractive.

       Worth a separate look: this container and GoogleAnalytics both load GA4
       instrumentation from googletagmanager.com. If GTM-K55RZLP9 also fires
       GA4, the site is loading two copies of the same tracking and may be
       double-counting pageviews — removing whichever is redundant would save
       more than deferring does. That needs someone with container access to
       confirm, so nothing is removed here. */
    <Script
      id="gtm-script"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  )
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
