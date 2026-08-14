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
 * Accordion (vanilla port of the old jQuery slideUp/slideDown behavior)
 */

const SLIDE_MS = 400;

function slideUp(el) {
  if (!el || el.style.display === 'none') return;
  el.style.height = el.offsetHeight + 'px';
  el.offsetHeight; // force reflow so the transition starts from the set height
  el.style.overflow = 'hidden';
  el.style.transition = 'height ' + SLIDE_MS + 'ms';
  el.style.height = '0';
  setTimeout(function () {
    el.style.display = 'none';
    el.style.removeProperty('height');
    el.style.removeProperty('overflow');
    el.style.removeProperty('transition');
  }, SLIDE_MS);
}

function slideDown(el) {
  if (!el || el.style.display !== 'none' && el.offsetHeight > 0) return;
  el.style.removeProperty('display');
  var display = window.getComputedStyle(el).display;
  if (display === 'none') display = 'block';
  el.style.display = display;
  var height = el.offsetHeight;
  el.style.overflow = 'hidden';
  el.style.height = '0';
  el.offsetHeight; // force reflow
  el.style.transition = 'height ' + SLIDE_MS + 'ms';
  el.style.height = height + 'px';
  setTimeout(function () {
    el.style.removeProperty('height');
    el.style.removeProperty('overflow');
    el.style.removeProperty('transition');
  }, SLIDE_MS);
}

document.addEventListener('click', function (event) {
  var headerElem = event.target.closest('.accordion-header');
  if (!headerElem) return;

  var content = headerElem.nextElementSibling;
  if (headerElem.classList.contains('active')) {
    if (content && content.classList.contains('accordion-content')) slideUp(content);
    headerElem.classList.remove('active');
  } else {
    document.querySelectorAll('.accordion-content').forEach(slideUp);
    document.querySelectorAll('.accordion-header').forEach(function (h) {
      h.classList.remove('active');
    });
    if (content && content.classList.contains('accordion-content')) slideDown(content);
    headerElem.classList.add('active');
  }
});

/**
 * Shared footer/nav fragments. Legacy pages used jQuery's .load(); pages now
 * call this (or keep an empty placeholder div and get it filled here).
 */

function includeFragment(id, url) {
  var el = document.getElementById(id);
  if (!el) return;
  fetch(url)
    .then(function (r) { return r.text(); })
    .then(function (html) { el.innerHTML = html; });
}




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
if (shareButton) { // && (window.innerWidth > 1000
  navigator.clipboard.writeText(window.location.href);
  console.log("link copied!") 
  // need to replace with some indication of success (animation!) and expand functionality
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

