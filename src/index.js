import "./styles.css";
import homePage from "./modules/home.js";
import contactPage from './modules/contact.js';
import createMenu from './modules/menu.js';

// Page management
const pageManager = {
  // Current active navigation index
  activeNavIndex: 0,
  
  // Initialize the application
  init() {
    this.cacheDom();
    this.bindEvents();
    this.loadHome();
    this.setupMobileNav();
    
    // Make navigation functions available globally
    window.loadHome = () => this.loadHome();
    window.loadMenu = () => this.loadMenu();
    window.loadContact = () => this.loadContact();
  },
  
  // Cache DOM elements
  cacheDom() {
    this.content = document.getElementById('content');
    this.headerBtn = document.querySelector('.header-h1');
    this.navButtons = document.querySelectorAll('.nav-btns');
    this.homeBtn = this.navButtons[0];
    this.menuBtn = this.navButtons[1];
    this.contactBtn = this.navButtons[2];
  },
  
  // Bind event listeners
  bindEvents() {
    this.headerBtn.addEventListener('click', () => this.loadHome());
    this.homeBtn.addEventListener('click', () => this.loadHome());
    this.menuBtn.addEventListener('click', () => this.loadMenu());
    this.contactBtn.addEventListener('click', () => this.loadContact());
  },
  
  // Load page helper
  loadPage(pageFunction, navIndex) {
    this.content.textContent = '';
    window.scrollTo(0,0);
    const page = pageFunction();
    this.content.appendChild(page);
    this.setActiveNav(navIndex);
  },
  
  // Page loaders
  loadHome() {
    this.loadPage(homePage, 0);
  },
  
  loadMenu() {
    this.loadPage(createMenu, 1);
  },
  
  loadContact() {
    this.loadPage(contactPage, 2);
  },
  
  // Set active navigation item
  setActiveNav(index) {
    this.activeNavIndex = index;
    this.navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  },
  
  // Mobile navigation setup
  setupMobileNav() {
    // Get elements
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    
    // Create overlay
    let overlay = document.querySelector('.mobile-overlay');
    overlay = document.createElement('div');
    overlay.classList.add('mobile-overlay');
    document.body.appendChild(overlay);
    
    // Toggle menu function
    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
    };
    
    // Add event listeners directly (no cloning)
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a nav button
    this.navButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => pageManager.init());