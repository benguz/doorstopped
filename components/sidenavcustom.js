const sidenav = document.querySelector('#sidenav');
const toc = document.querySelector('#toc');

  // Define the items for the side navigation and the headings for the table of contents
  const items = [
    {
      title: 'Leveraged',
      links: [
        { href: '/doorstops', children: 'Realities' },
        { href: '/pdfs/leveraged.pdf', children: 'Agency' },
        { href: '/stuco', children: 'Leadership'}
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
        <div>
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


//   const contents = [
//     {
//       title: 'Table of Contents',
//       links: [
//         { href: '#i-just-want-to-email', children: 'I just want to email' },
//         { href: '#how-do-i-ask-in-person', children: "I'll ask in person" },
//         { href: "#what-if-it's-due-today-(or-yesterday-or-last-week)", children: "Uh, it's due today"}
//       ]
//     },
    
//   ];

  const headings = Array.from(document.querySelectorAll('h2'));

  const tocHtml = `
  <nav class="sidenav">
      <div>
        <h3>Table of Contents</h3>
        <ul class="flex column">
        ${headings.map(heading => `
        <style>
        #${heading.id} {
            scroll-margin-top: 4.5em;
        }</style>
            <li class="active">
                <a class="scroll" href="#${heading.id}">${heading.textContent}</a>
            </li>
          `).join('')}
        </ul>
      </div>
  </nav>
`;

  toc.innerHTML = tocHtml;

 
