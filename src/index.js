import "./styles.css";
import homePage from "./modules/home.js";
import contactPage from './modules/contact.js';
import createMenu from './modules/menu.js';

console.log('Hello restaurant lover!');

document.addEventListener('DOMContentLoaded', () => {
  // Get navigation buttons
  const headerBtn = document.querySelector('.header-h1');
  const homeBtn = document.querySelector('.nav-btns:nth-child(1)');
  const menuBtn = document.querySelector('.nav-btns:nth-child(2)');
  const contactBtn = document.querySelector('.nav-btns:nth-child(3)');
  
  // Add event listeners
  headerBtn.addEventListener('click', loadHome);
  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);

  loadHome();
})

// Helper function to simplify code and handle common page loading tasks
function loadPage(pageFunction, navIndex, skipScroll = false) {
  const content = document.getElementById('content');
  content.textContent = '';
  // Open page at top
  window.scrollTo(0, 0);

  const page = pageFunction();
  content.appendChild(page);
  setActiveNav(navIndex);
}

function loadHome() {
  loadPage(homePage, 0);
}

function loadMenu() {
  loadPage(createMenu, 1);
}

function loadContact() {
  loadPage(contactPage, 2);
}

// Creates nav bar highlight so users can see what page they're on
function setActiveNav(index) {
  const navButtons = document.querySelectorAll('.nav-btns');
  navButtons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

window.loadHome = loadHome;
window.loadMenu = loadMenu;
window.loadContact = loadContact;