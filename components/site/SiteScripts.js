'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// The scripts every legacy marketing page loads: plausible analytics (with the
// same inline queue stub), jQuery followed by /assets/js/script.js (nav
// toggling, accordions — script.js needs $ at parse time, hence the chained
// load), and the ionicons web components.
export default function SiteScripts() {
  const [jqueryReady, setJqueryReady] = useState(false);

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
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => setJqueryReady(true)}
      />
      {jqueryReady && <Script src="/assets/js/script.js" strategy="afterInteractive" />}
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        strategy="afterInteractive"
      />
    </>
  );
}
