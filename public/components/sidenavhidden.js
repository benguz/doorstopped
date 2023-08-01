const sidenav = document.querySelector('#sidenav');
const toc = document.querySelector('#toc');

  // Define the items for the side navigation and the headings for the table of contents
  const items = [
    {
      title: 'Leveraged',
      links: [
        { href: '/doorstops/index.html', children: 'Realities' },
        { href: '/research/leveraged.pdf', children: 'Agency' },
        { href: '/programs/stuco.html', children: 'Leadership'}
      ]
    },
    {
      title: 'Doorstops: How to...',
      links: [
        { href: '/doorstops/extension.html', children: 'Ask for an extension' },
        { href: '/doorstops/getout.html', children: 'Take a break' },
        { href: '/doorstops/mentor.html', children: 'Find a mentor' },
        { href: '/doorstops/listen.html', children: 'Listen and change' }
      ]
    },
  ];

  // Generate the HTML for the side navigation and append it to the sidenav element
  const sidenavHtml = `
    <nav class="sidenav">
      ${items.map(item => `
        <div style="visibility:hidden">
          <h3>${item.title}</h3>
          <ul class="flex column">
            ${item.links.map(link => `
              <li ${window.location.pathname === link.href ? 'class="active"' : ''}>
                <a href="${link.href}">${link.children}</a>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </nav>
  `;
  sidenav.innerHTML = sidenavHtml;

  // Generate the HTML for the table of contents and append it to the toc element
    // ${headings.map(heading => `
          //  <li class="${heading.tagName.toLowerCase()}">
          //    <a href="#${heading.id}">${heading.textContent}</a>
          //   </li>
          //  `).join('')}
  const headings = Array.from(document.querySelectorAll('h2, h3'));
  if (headings.length > 0) {
    const tocHtml = `
      <nav class="toc">
      <ul class="flex column">
      ${headings.map(heading => `
        <li style="visibility:hidden" class="${heading.tagName.toLowerCase()}">
          <a href="#${heading.id}">${heading.textContent}</a>
        </li>
      `).join('')}
    </ul>
      </nav>
    `;
    toc.innerHTML = tocHtml;
  }
 
