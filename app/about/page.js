import Script from 'next/script';
import SiteChrome from '../../components/site/SiteChrome';

export const metadata = {
  title: 'Doorstopped - Doorstop Education',
  description: 'Inspiring students nationwide with research-tested strategies',
};

const PAGE_CSS = `
@media screen and (max-width: 1023px) {
  .framebox { height: 34000em; }
  .sidenavtotal { display: none; padding: 0em; }
  #sidenav { display: none; }
  #toc { display: none; }
  .desktop { display: none; }
}
@media (min-width: 1024px) {
  main { display: flex; justify-content: center; }
  .framebox { height: 15500em; }
}
.sidenavtotal { flex: 1; margin-right: 1rem; }
article { flex: 3; }
.toc { flex: 1; }
`;

export default function AboutPage() {
  return (
    <SiteChrome>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <main>
        <div className="sidenavtotal" style={{ padding: '3em' }}>
          <br className="desktop" />
          <br className="desktop" />
          <br className="desktop" />
          <br className="desktop" />
          <div id="sidenav"></div>
        </div>

        <article>
          <br className="desktop" />
          <br className="desktop" />
          <br />
          <br />
          <br />
          <br />
          <p>Doorstop Education is in the process of incorporating as a 501(c)(3) nonprofit.</p>
          <p>We will begin our formal application with the IRS in August 2026.</p>
          <p>
            Ben Guzovsky is currently the only full time staffer, running each initiative in
            partnership with collaborators who assist part time.
          </p>
          <p>
            Ben is a technologist and education researcher passionate about community engagement
            and student voice. He previously headed policy at SafetyKit, an AI Trust &amp; Safety
            platform, and is currently a fellow at Assembly Code, a nonprofit where he builds
            open-source educational software. Ben has done extensive fieldwork in American high
            schools, conducting over 100 one-on-one conversations with students in 15 states.
          </p>
          <br />
          <p>Ben is supported by four passionate volunteers:</p>
          <p>Emerson Kiefer, Allison Hartley, David Shustin, and Yongwei Che.</p>
        </article>

        <div style={{ padding: '3em' }}>
          <br />
          <br />
          <br />
          <br />
          <div id="toc"></div>
        </div>
      </main>

      {/* invisible sidenav used purely for flex spacing, same as the legacy page */}
      <Script src="/components/sidenavhidden.js" strategy="afterInteractive" />
    </SiteChrome>
  );
}
