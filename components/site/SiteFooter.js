// Shared footer, converted from public/footer.html (which legacy pages inject
// with jQuery's .load()). Converted pages render it directly instead.
export default function SiteFooter() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `.footer a { color: hsl(0, 0%, 73%); }`,
        }}
      />
      <footer className="footer" style={{ backgroundImage: "url('/assets/images/footer-bg.webp')" }}>
        <div className="footer-top section">
          <div className="container grid-list">
            <div className="footer-brand">
              <a href="/index" className="logo">
                <img src="/assets/images/doors-white.svg" width={162} height={50} alt="Doorstopped logo" />
              </a>

              <p className="footer-brand-text">
                Doorstop Education is in the process of incorporating as a 501(c)(3) nonprofit.
              </p>

              <div className="wrapper">
                <span className="span">Call:</span>
                <a href="tel:+017813306849" className="footer-link">+01 781 330 6849</a>
              </div>

              <div className="wrapper">
                <span className="span">Email:</span>
                <a href="mailto:guzovsky@princeton.edu" className="footer-link">guzovsky@princeton.edu</a>
              </div>
            </div>

            <ul className="footer-list">
              <li><p className="footer-list-title">Online Platform</p></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/mission" className="footer-link">Mission</a></li>
              <li><a href="/doorstops/index" className="footer-link">Doorstops</a></li>
              <li><a href="/programs/index" className="footer-link">Programs</a></li>
              <li><a href="/research/leveraged.pdf" className="footer-link">Research</a></li>
              <li><a href="/mission" className="footer-link">Team</a></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Links</p></li>
              <li><a href="mailto:guzovsky@princeton.edu" className="footer-link">Contact Us</a></li>
              <li><a href="/helpout" className="footer-link">Work with us!</a></li>
              <li><a href="/giving" className="footer-link">Donate!</a></li>
              <li><a href="/501c3" className="footer-link">501(c)(3)</a></li>
              <li><a href="/ccbysa" className="footer-link">CC-by-SA 4.0</a></li>
            </ul>

            <div className="footer-list">
              <p className="footer-list-title">Contacts</p>
              <ul className="social-list">
                <li>
                  <a href="https://www.linkedin.com/company/doorstop-education/" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/doorstopeducation/" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/BenGuzovsky" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright" suppressHydrationWarning>
              Copyright {new Date().getFullYear()} All Rights Reserved by{' '}
              <a href="#" className="copyright-link">Doorstop Education</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
