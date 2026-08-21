'use client'

import Script from 'next/script'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-5MB9CK1FGS'

export default function GoogleAnalytics() {
  return (
    <>
      {/* lazyOnload, not afterInteractive. Measured on mobile against the
          staging build: gtag.js (166KB) plus GTM (119KB) firing right after
          hydration cost 18 Lighthouse points and 2.6s of LCP — 69/6.4s with
          them, 87/3.8s with googletagmanager blocked entirely. afterInteractive
          puts both on the critical path, competing with first render under 4x
          CPU throttling.

          Both Scripts here must share one strategy: the inline gtag('config')
          below depends on the library above, so splitting them would reorder
          the config against its own dependency. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
