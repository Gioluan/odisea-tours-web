"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });

          // Track WhatsApp clicks
          document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href*="wa.me"]');
            if (link) {
              gtag('event', 'whatsapp_click', {
                event_category: 'engagement',
                event_label: link.href,
                page_path: window.location.pathname,
              });
            }
          });

          // Track email clicks
          document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href^="mailto:"]');
            if (link) {
              gtag('event', 'email_click', {
                event_category: 'engagement',
                event_label: link.href,
                page_path: window.location.pathname,
              });
            }
          });

          // Track plan-your-tour form submissions
          document.addEventListener('submit', function(e) {
            if (window.location.pathname === '/plan-your-tour') {
              gtag('event', 'tour_inquiry', {
                event_category: 'conversion',
                event_label: 'plan_your_tour_form',
              });
            }
          });
        `}
      </Script>
    </>
  );
}
