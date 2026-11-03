'use client'

import Script from 'next/script'

/* LinkedIn Insight Tag (CAD ABM campaign, plan item #13): lets LinkedIn retarget
   visitors of the CAD pages and count leads from the ads. Dormant until the
   partner ID from Campaign Manager is set in NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
   a non-numeric value is ignored so a typo can't inject script.

   lazyOnload for the same reason as GoogleAnalytics: tags on the critical path
   measurably cost mobile LCP. Disclosed in the privacy notice (Cookies). */

const PARTNER_ID = (process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '').trim()

export default function LinkedInInsightTag() {
  if (!/^\d+$/.test(PARTNER_ID)) return null

  return (
    <Script
      id="linkedin-insight"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];
window._linkedin_data_partner_ids.push("${PARTNER_ID}");
(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
var s=document.getElementsByTagName("script")[0],b=document.createElement("script");
b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b,s)})(window.lintrk);`,
      }}
    />
  )
}
