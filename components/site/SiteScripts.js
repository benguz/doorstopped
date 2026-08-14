'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// The scripts every legacy marketing page loads: plausible analytics (with the
// same inline queue stub), /assets/js/script.js (nav toggling, accordions —
// vanilla JS, no jQuery), and the ionicons web components.
export default function SiteScripts() {
  useEffect(() => {
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain="doorstopped.org"
        src="https://plausible.io/js/script.js"
      />
      <Script src="/assets/js/script.js" strategy="afterInteractive" />
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="afterInteractive"
      />
    </>
  );
}
