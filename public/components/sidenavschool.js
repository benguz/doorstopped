const sidenav = document.querySelector('#sidenav');
const toc = document.querySelector('#toc');

  // Define the items for the side navigation and the headings for the table of contents
  const items = [
    {
      title: 'School 101',
      links: [
        { href: '/school/', children: 'Intro: The System' },
        { href: '/school/flow', children: 'Flow'},
        { href: '/school/audit', children: 'Incentives' }, 
        { href: '/school/audit', children: 'Your School' }, 
      ]
    },
    {
      title: 'The Change-Making Playbook',
      links: [
        { href: '/school/money', children: 'Controlling $100k' },
        { href: '/school/data', children: 'Leveraging Data' },
        { href: '/school/selfie', children: 'Selfie Diplomacy' },
        { href: '/school/allies', children: 'Make Powerful Allies' },
        { href: '/school/newhire', children: 'Predict Principal Hiring' },
        { href: '/school/corp', children: 'Decipher Corporate-Speak' },
        { href: '/school/dress', children: 'Changing the Dress Code' },
        { href: '/school/comms', children: 'Forcing Communication' },
        { href: '/school/dayoff', children: 'Getting a day off' },
        { href: '/school/interns', children: 'Starting New Programs' },
        { href: '/school/waffle', children: 'Playing the Waffle Game' },
        { href: '/school/change', children: 'Change 101' },
        { href: '/school/whypolicy', children: 'Why Policy Change Falls Short' },
        { href: '/school/awful', children: 'Fighting Awful Policy' },
        { href: '/school/stories', children: 'Telling True Stories' },
        { href: '/school/stuco', children: 'Making Student Council Work' },
        { href: '/school/scare', children: 'Fighting Scare tactics' },
        { href: '/school/minutes', children: 'Reading School Board Meeting Minutes' },
      ]
    },
    {
      title: 'Case Studies and Wild Stories',
      links: [
        { href: '/school/sleep', children: 'Unused Classrooms -> Homeless Shelter' },
        { href: '/school/takeover', children: 'State Takeover' },
        { href: '/school/curriculum', children: 'Curriculum Change' },
      ]
    }
  ];

  // Generate the HTML for the side navigation and append it to the sidenav element
  const sidenavHtml = `
    <nav class="sidenav">
    
      ${items.map(item => `
        <div>
          <h3>${item.title}</h3>
          <div style="width:75%;height:0.68em;background-color:#FEB7B3; padding-bottom:0.22em"></div>
          <ul class="flex column">
            ${item.links.map(link => `
              <li> ${window.location.pathname === link.href ? "<em><u>" : ''}
                <a class="scroll" href="${link.href}">${link.children}</a>
                ${window.location.pathname === link.href ? "</u></em>" : ''}
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </nav>
  `;


// Fetch the data from players.json
fetch('/components/players.json')
  .then(response => response.json())
  .then(data => {
    const currentPage = window.location.pathname;

    let currentPlayer;

    if (currentPage === "/school/") {
    currentPlayer = data.find(player => player.name === "/school/index");
    } else {
    const currentPageShort = currentPage.replace("", "");
    currentPlayer = data.find(player => player.name === currentPage || player.name === currentPageShort);
    }

    // Generate the HTML structure for the sidebar based on the currentPlayer
    const sidebarHtml = generateSidebarHtml(currentPlayer);
    console.log(currentPlayer);
    
    // Inject the HTML into the sidebar element
    toc.innerHTML = sidebarHtml;
  })
  .catch(error => console.log(error));

// Function to generate the HTML structure for the sidebar
function generateSidebarHtml(currentPlayer) {
    let emojis = ["heart", "praise", "cowboy", "saint", "spazz"];
    let foes = ["spy", "devil", "thunder"];
    let keys = ["key", "trophy", "diamond"];

    // Randomly select an element from each array

    let sidebarHtml = '<nav class="sidenav"><h3>Key Players</h3>';
  
    if (currentPlayer) {
        
    
        // Create the key tab
        let randomKey = keys[Math.floor(Math.random() * keys.length)];
        const keyTab = createTab(currentPlayer.key, `/school/${currentPlayer.key}`, '#97E5D7', currentPlayer.key, randomKey);
        sidebarHtml += keyTab;
    
        // Create the foe tabs
        currentPlayer.foe.forEach(foe => {
          const foeLink = `/school/${foe}`;
          let randomFoe = foes[Math.floor(Math.random() * foes.length)];
          const foeTab = createTab(foe, foeLink, '#FEB7B3', foe, randomFoe);
          sidebarHtml += foeTab;
        });

        // Create the ally tabs
        currentPlayer.ally.forEach(ally => {
            let allyName;
            let allyBack;
    
            if (Array.isArray(ally)) {
              allyName = ally[0];
              allyBack = ally[1];
            } else {
              allyName = ally;
            }
          const allyLink = `/school/${allyName}`;
          let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];


          const allyTab = createTab(allyName, allyLink, '#D2EBD8', allyBack, randomEmoji);
          sidebarHtml += allyTab;
        });
      }
  
    sidebarHtml += '</nav>';
    return sidebarHtml;
  }
  
  // Function to create an individual tab
  function createTab(text, link, color, back, img) {
    return `<div class="bingo-item"> 
    <button class="aesthetic-tab front" style="background-color: ${color};" onclick="window.location.href='${link}'"><img class="aesthetic-icon" src="/assets/images/${img}.png"></img>${text}</button>
    <button class="aesthetic-tab back" style="background-color: ${color};" onclick="window.location.href='${link}'"><img class="aesthetic-icon" src="/assets/images/${img}.png"></img>${back}</button>
    </div>`;
  }

  if (sidenav) {
    sidenav.innerHTML = sidenavHtml;

  }

 
// First, flatten the array
const flatItems = items.reduce((acc, curr) => {
  return acc.concat(curr.links);
}, []);

// Function to find current page index
const getCurrentPageIndex = () => {
  const currentPath = window.location.pathname;
  return flatItems.findIndex(item => item.href === currentPath);
};

// Function to generate navigation buttons
const generateNavigationButtons = () => {
  const currentIndex = getCurrentPageIndex();
  let navigationButtonsHtml = '';

  if (currentIndex === 0) {
    // If it's the first page, render a larger 'Next' button only
    navigationButtonsHtml += `<a href="${flatItems[currentIndex + 1].href}" class="nav-button large-button">Next &rarr;</a>`;
  } else if (currentIndex === flatItems.length - 1) {
    // If it's the last page, render a larger 'Previous' button only
    navigationButtonsHtml += `<a href="${flatItems[currentIndex - 1].href}" class="nav-button large-button">&larr; Previous</a>`;
  } else {
    // Otherwise, render both 'Previous' and 'Next' buttons
    navigationButtonsHtml += `
      <a href="${flatItems[currentIndex - 1].href}" class="nav-button" style="text-align: left;">&larr;  ${flatItems[currentIndex - 1].children}</a>
      <a href="${flatItems[currentIndex + 1].href}" class="nav-button" style="text-align: right;">${flatItems[currentIndex + 1].children}  &rarr;</a>
    `;
  }

  return navigationButtonsHtml;
};

// Insert the navigation buttons at the bottom of the page
const navButtonContainer = document.querySelector('#nav-button-container');
navButtonContainer.innerHTML = generateNavigationButtons();
