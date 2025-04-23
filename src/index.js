import "./styles.css";
import homePage from "./modules/home.js";
import contactPage from './modules/contact.js';
import createMenu from './modules/menu.js';

// Page management
const pageManager = {
  init() {
    this.cacheDom();
    this.bindEvents();
    window.loadHome = () => this.loadHome();
    window.loadMenu = () => this.loadMenu();
    window.loadContact = () => this.loadContact();

    // Add the popstate listener
    window.addEventListener('popstate', (event) => this.handlePopState(event));

    // Initial page load based on current URL or default to home
    this.handleInitialLoad();
    this.setupMobileNav(); // Setup mobile nav after initial load
  },

  cacheDom() {
    this.content = document.getElementById('content');
    this.headerBtn = document.querySelector('.header-h1');
    this.navButtons = document.querySelectorAll('.nav-btns');
    this.homeBtn = this.navButtons[0];
    this.menuBtn = this.navButtons[1];
    this.contactBtn = this.navButtons[2];
  },

  bindEvents() {
    // Bindings to use navigation methods that handle history
    this.headerBtn.addEventListener('click', () => this.navigate('home'));
    this.homeBtn.addEventListener('click', () => this.navigate('home'));
    this.menuBtn.addEventListener('click', () => this.navigate('menu'));
    this.contactBtn.addEventListener('click', () => this.navigate('contact'));
  },

  // History Management: Central navigation function
  navigate(pageName) {
    let pageFunction, navIndex, urlPath;

    switch (pageName) {
      case 'menu':
        pageFunction = createMenu;
        navIndex = 1;
        urlPath = '/menu';
        break;
      case 'contact':
        pageFunction = contactPage;
        navIndex = 2;
        urlPath = '/contact';
        break;
      case 'home':
      default: // Default to home
        pageFunction = homePage;
        navIndex = 0;
        urlPath = '/';
        break;
    }

    // Only push state if the URL is actually changing
    if (window.location.pathname !== urlPath) {
      const state = { page: pageName, navIndex: navIndex };
      // Push state: state object, title (unused), URL
      history.pushState(state, '', urlPath);
    }

    // Load the actual content
    this.loadPageContent(pageFunction, navIndex);
  },

  // Renamed from loadPage - just handles content update
  loadPageContent(pageFunction, navIndex) {
    this.content.textContent = '';
    window.scrollTo(0, 0);
    const page = pageFunction();
    this.content.appendChild(page);
    this.setActiveNav(navIndex);
    // Consider calling setupMobileNav here if needed after content change
    // this.setupMobileNav();
  },

  // Loaders are now simpler, just call navigate
  loadHome() {
    this.navigate('home');
  },
  loadMenu() {
    this.navigate('menu');
  },
  loadContact() {
    this.navigate('contact');
  },

  setActiveNav(index) {
    this.activeNavIndex = index;
    this.navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  },

  // History Management: Handle back/forward button clicks
  handlePopState(event) {
    console.log("Popstate event:", event.state);
    if (event.state && event.state.page) {
      // Load content based on the state from history
      let pageFunction, navIndex;
      switch (event.state.page) {
        case 'menu':
          pageFunction = createMenu;
          navIndex = 1;
          break;
        case 'contact':
          pageFunction = contactPage;
          navIndex = 2;
          break;
        case 'home':
        default:
          pageFunction = homePage;
          navIndex = 0;
          break;
      }
      // Load content WITHOUT pushing state again
      this.loadPageContent(pageFunction, navIndex);
    } else {
      // Handle cases where state is null (e.g., initial load, manual URL change)
      // Often defaults to loading the home page or parsing the URL path
      this.loadPageContent(homePage, 0);
    }
  },

  // History Management: Handle initial page load
  handleInitialLoad() {
    const path = window.location.pathname;
    let pageName = 'home'; // Default
    if (path === '/menu') {
      pageName = 'menu';
    } else if (path === '/contact') {
      pageName = 'contact';
    }

    // Load the initial page content
    this.navigate(pageName);

    // Replace the initial history state so 'back' from the first page works correctly
    const initialState = { page: pageName, navIndex: this.activeNavIndex };
    history.replaceState(initialState, '', window.location.pathname);
  },

  // ... (keep setupMobileNav) ...
  setupMobileNav() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.classList.add('mobile-overlay');
      document.body.appendChild(overlay);
    }

    hamburger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');

    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
      console.log("Menu toggled, active:", nav.classList.contains('active'));
    };

    // Use onclick to simplify listener management if cloning was problematic
    hamburger.onclick = toggleMenu;
    overlay.onclick = toggleMenu;

    this.navButtons.forEach(button => {
      // Ensure original navigation still works
      const originalClickHandler = button.onclick; // Capture potential existing handler
      button.onclick = (e) => {
        if (nav.classList.contains('active')) {
          toggleMenu(); // Close menu if open
        }
        // Call the original handler if it existed (like the navigate function)
        if (originalClickHandler) {
           originalClickHandler.call(button, e);
        }
      };
    });
  }
};

// Initialize the application
pageManager.init();