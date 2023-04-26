function TableOfContents({ toc, selector = 'h2' }) {
    const items = toc.filter(
      (item) =>
        item.id &&
        (item.level === 2 || item.level === 3) &&
        item.title !== 'Next steps'
    );
  
    const headings = Array.from(document.querySelectorAll(selector))
      .filter((heading) => heading.id)
      .map((heading) => ({ id: heading.id, title: heading.innerText, level: 2 }));
  
    headings.forEach((heading, index) => {
      const existing = items.find((item) => item.id === heading.id);
      if (existing) {
        existing.title = heading.title;
        existing.level = heading.level;
        items.splice(index, 1, existing);
      } else {
        items.splice(index, 0, heading);
      }
    });
  
    const nav = document.createElement('nav');
    nav.classList.add('toc');
    nav.style.position = 'sticky';
    nav.style.top = 'calc(2.5rem + var(--nav-height))';
    nav.style.maxHeight = 'calc(100vh - var(--nav-height))';
    nav.style.flex = '0 0 240px';
    nav.style.alignSelf = 'flex-start';
    nav.style.marginBottom = '1rem';
    nav.style.padding = '0.25rem 0 0';
    nav.style.borderLeft = '1px solid var(--toc-border)';
  
    if (items.length > 1) {
      const ul = document.createElement('ul');
      ul.classList.add('flex', 'column');
      items.forEach((item) => {
        const href = `#${item.id}`;
        const li = document.createElement('li');
        li.style.listStyleType = 'none';
        li.style.margin = '0 0 1rem 1.5rem';
        li.style.fontSize = '14px';
        li.style.fontWeight = '400';
  
        const a = document.createElement('a');
        a.href = href;
        a.innerText = item.title;
        a.style.textDecoration = 'none';
  
        const active = window.location.hash === href;
        if (active) {
          li.classList.add('active');
          a.style.textDecoration = 'underline';
        }
  
        if (item.level === 3) {
          li.classList.add('padded');
          li.style.paddingLeft = '1rem';
        }
  
        li.appendChild(a);
        ul.appendChild(li);
      });
  
      nav.appendChild(ul);
    }
  
    const style = document.createElement('style');
    style.innerHTML = `
      nav {
        position: sticky;
        top: calc(2.5rem + var(--nav-height));
        max-height: calc(100vh - var(--nav-height));
        flex: 0 0 240px;
        align-self: flex-start;
        margin-bottom: 1rem;
        padding: 0.25rem 0 0;
        border-left: 1px solid var(--toc-border);
      }
      ul {
        margin: 0;
        padding: 0;
      }
      li a:hover,
      li.active a {
        text-decoration: underline;
      }
      li.padded {
        padding-left: 1rem;
      }
      @media screen and (max-width: 1000px) {
        nav {
          display: none;
        }
      }
    `;
  
    nav.appendChild(style);}