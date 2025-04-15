import "./styles.css";
import homePage from "./modules/home.js";
import contactPage from './modules/contact.js';
import createMenu from './modules/menu.js';

console.log('Hello restaurant lover!');

document.addEventListener('DOMContentLoaded', () => {
  // Get navigation buttons
  const homeBtn = document.querySelector('.nav-btns:nth-child(1)');
  const menuBtn = document.querySelector('.nav-btns:nth-child(2)');
  const contactBtn = document.querySelector('.nav-btns:nth-child(3)');
  
  // Add event listeners
  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);

  loadHome();
})

function loadHome() {
  const content = document.getElementById('content');
  content.textContent = '';
  const home = homePage();
  content.appendChild(home);
  setActiveNav(0); // First button
}

function loadMenu() {
  const content = document.getElementById('content');
  content.textContent = '';
  const menu = createMenu();
  content.appendChild(menu);
  setActiveNav(1); // Second button
}

function loadContact() {
  const content = document.getElementById('content');
  content.textContent = '';
  const contact = contactPage();
  content.appendChild(contact);
  setActiveNav(2); // Third button
}

// Creates visual highlight so users can see what page they're on
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