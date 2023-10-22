'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else if (elem) {
    elem.addEventListener(type, callback);
  }
}

/**
 * Accordion
 */

$(document).ready(function() {
  // Delegate events from the body element
  $('body').on('click', '.accordion-header', function() {
    var content = $(this).next('.accordion-content');

    // If this section is already open, close it
    if($(this).hasClass('active')) {
      content.slideUp();
      $(this).removeClass('active');
    } else {
      // Close all sections
      $('.accordion-content').slideUp();
      $('.accordion-header').removeClass('active');

      // Open this section
      content.slideDown();
      $(this).addClass('active');
    }
  });
});




/**
 * Copy text
 */

function copyText(event) {
  // Get the button that was clicked
  const button = event.target;
  
  // Find its parent copy-paste-element div
  const copyPasteElement = button.closest('.copy-paste-element');
  
  // Get all the p tags within that div
  const paragraphs = copyPasteElement.querySelectorAll('p');
  
  let textToCopy = '';
  paragraphs.forEach((p) => {
    textToCopy += p.textContent + '\n';
  });

  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  const svg2 = button.closest('.svg2');
  svg2.classList.toggle('hidden');
  setTimeout(() => {
    svg2.classList.toggle('hidden');
  }, 150);
}

/**
 * sharing

 */


let shareButton = document.getElementById("share-button");
if (shareButton && (window.innerWidth > 1000)) {

  navigator.clipboard.writeText(window.location.href);
  console.log("link copied!") 
  // need to replace with some indication of success and expand functionality
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

if (navTogglers.length !== 0) {
  addEventOnElem(navTogglers, "click", toggleNavbar);
}

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

if (navLinks.length !== 0) {
  addEventOnElem(navLinks, "click", closeNavbar);
}



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}
if ((header) && (backTopBtn)) {
  addEventOnElem(window, "scroll", activeElem);
}

