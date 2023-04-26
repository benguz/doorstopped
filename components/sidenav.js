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
        { href: '/doorstops/extension', children: 'Ask for an extension' },
        { href: '/doorstops/getout', children: 'Take a break' },
        { href: '/doorstops/mentor', children: 'Find a mentor' },
        { href: '/doorstops/listen', children: 'Listen and change' }
      ]
    },
  ];
  
  function SideNav() {
    const router = { pathname: window.location.pathname };
  
    const nav = document.createElement('nav');
    nav.classList.add('sidenav');
    nav.style.position = 'sticky';
    nav.style.top = 'var(--nav-height)';
    nav.style.height = 'calc(100vh - var(--nav-height))';
    nav.style.flex = '0 0 240px';
    nav.style.overflowY = 'auto';
    nav.style.padding = '2rem 0 2rem 2rem';
  
    items.forEach((item) => {
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.innerText = item.title;
      div.appendChild(h3);
  
      const ul = document.createElement('ul');
      ul.classList.add('flex', 'column');
      item.links.forEach((link) => {
        const li = document.createElement('li');
        li.style.listStyleType = 'none';
        li.style.margin = '0 0 0.7rem 0.7rem';
        li.style.fontSize = '14px';
        li.style.fontWeight = '400';
  
        const a = document.createElement('a');
        a.href = link.href;
        a.innerText = link.children;
        a.style.textDecoration = 'none';
  
        if (router.pathname === link.href) {
          li.classList.add('active');
          a.style.textDecoration = 'underline';
        }
  
        li.appendChild(a);
        ul.appendChild(li);
      });
  
      div.appendChild(ul);
      nav.appendChild(div);
    });
  
    const style = document.createElement('style');
    style.innerHTML = `
      nav {
        /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
        position: sticky;
        top: var(--nav-height);
        height: calc(100vh - var(--nav-height));
        flex: 0 0 240px;
        overflow-y: auto;
        padding: 2rem 0 2rem 2rem;
      }
      h3 {
        font-weight: 500;
        margin: 0.5rem 0 0;
        padding-bottom: 0.5rem;
      }
      ul {
        margin: 0;
        padding: 0;
      }
      li a:hover,
      li.active > a {
        text-decoration: underline;
      }
      @media screen and (max-width: 600px) {
        nav {
          display: none;
        }
      }
    `;
  
    nav.appendChild(style);
    return nav;
  }