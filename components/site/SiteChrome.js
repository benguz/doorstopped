import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import SiteScripts from './SiteScripts';

// Standard marketing-page shell: shared stylesheet + fonts, header/nav,
// footer, back-to-top button, and the site-wide scripts. Converted content
// pages wrap their article in this instead of duplicating the boilerplate.
export default function SiteChrome({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <span id="top" />
      <SiteNav />

      {children}

      <SiteFooter />

      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn="">
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>

      <SiteScripts />
    </>
  );
}
