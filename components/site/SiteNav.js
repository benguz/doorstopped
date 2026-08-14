// Shared site header/nav, converted from the markup duplicated across the
// legacy marketing pages. Menu open/close behavior comes from
// /assets/js/script.js via the data-nav-toggler attributes (loaded by
// SiteScripts), matching the legacy pages.
export default function SiteNav() {
  return (
    <header className="header" data-header="">
      <div className="container">
        <a href="/index" className="logo">
          <img src="/assets/images/doors.svg" width={162} height={50} alt="Doorstopped logo" />
        </a>

        <nav className="navbar" data-navbar="">
          <div className="wrapper">
            <a href="/index" className="logo">
              <img src="/assets/images/doors.svg" width={162} height={50} alt="Doorstopped logo" />
            </a>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler="">
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/mission" className="navbar-link" data-nav-link="">Mission</a>
            </li>
            <li className="navbar-item">
              <a href="/doorstops/index" className="navbar-link" data-nav-link="">Doorstops</a>
            </li>
            <li className="navbar-item">
              <a href="/programs/index" className="navbar-link" data-nav-link="">Programs</a>
            </li>
            <li className="navbar-item">
              <a href="/research/index" className="navbar-link" data-nav-link="">Research</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="mailto:guzovsky@princeton.edu" className="btn has-before">
            <span className="span">Try us out</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

          <button className="header-action-btn" aria-label="open menu" data-nav-toggler="">
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <div className="overlay" data-nav-toggler="" data-overlay=""></div>
      </div>
    </header>
  );
}
