import { food, beverage } from './menuData.js';

// Helper function to create elements with classes and text
function createElement(type, className = null, textContent = null) {
  const element = document.createElement(type);
  if (className) {
      element.classList.add(className);
  }
  if (textContent !== null) {
    element.textContent = textContent;
  }
  return element;
}

function homePage() {
  const homeContainer = createElement('div', 'home-container');
  
  // Hero Section
  const heroSection = createElement('section', 'hero-section');
  const heroImage = createElement('div', 'hero-image');
  const heroContent = createElement('div', 'hero-content');
  const heroHeading = createElement('h2', null, 'Welcome to Comfy Cafe');
  
  heroContent.appendChild(heroHeading);
  heroSection.appendChild(heroImage);
  heroSection.appendChild(heroContent);
  
  // About Us Section
  const aboutSection = createElement('section', 'about-section');
  const aboutHeading = createElement('h3', null, 'About Us');
  const aboutText = createElement('p', null, 'Established in 2000, Comfy Cafe was born from a simple idea: create a space where people feel at home while enjoying exceptional coffee and food. Our relaxed atmosphere and friendly staff invite you to slow down and savor the moment.');
  
  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutText);
  
  // Features Section
  const featuresSection = createElement('section', 'features-section');
  const featuresHeading = createElement('h3', null, 'What Makes Us Special');
  featuresSection.appendChild(featuresHeading);
  
  const featuresGrid = createElement('div', 'features-grid');
  
  const features = [
    {
      icon: '☕',
      title: 'Locally Roasted Beans',
      description: 'Sourced from ethical farms and roasted in-house'
    },
    {
      icon: '🥐',
      title: 'Homemade Pastries',
      description: 'Freshly baked daily with organic ingredients'
    },
    {
      icon: '🛜',
      title: 'Free Wi-Fi',
      description: 'Stay connected while you enjoy your coffee'
    },
    {
      icon: '🛋️',
      title: 'Comfortable Workspaces',
      description: 'Designed for both relaxation and productivity'
    }
  ];
  
  features.forEach(feature => {
    const featureCard = createElement('div', 'feature-card');
    
    const featureIcon = createElement('span', 'feature-icon', feature.icon);
    const featureTitle = createElement('h4', null, feature.title);
    const featureDescription = createElement('p', null, feature.description);
    
    featureCard.appendChild(featureIcon);
    featureCard.appendChild(featureTitle);
    featureCard.appendChild(featureDescription);
    
    featuresGrid.appendChild(featureCard);
  });
  
  featuresSection.appendChild(featuresGrid);
  
  // Featured Menu Section
  const menuSection = createElement('section', 'featured-menu-section');
  const menuHeading = createElement('h3', null, 'Featured Menu Items');
  const menuGrid = createElement('div', 'featured-menu-grid');

  // Creates array for top six featured items - keep exact indices
  const featuredFood = [food[0], food[5], food[7]];
  const featuredbeverage = [beverage[0], beverage[6], beverage[9]];
  const featuredItems = [...featuredFood, ...featuredbeverage];

  featuredItems.forEach(item => {
    const menuItem = createElement('div', 'featured-menu-item');
    const itemId = item.id;
    menuItem.dataset.itemId = itemId;
    
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="featured-item-image">
      <div class="featured-item-info">
        <h4 class="featured-item-name">${item.name}</h4>
        <p>${item.description}</p>
        <p class="featured-item-price">$${item.price.toFixed(2)}</p>
      </div>
    `;
    
    // Add click event listener to navigate to menu page
    menuItem.addEventListener('click', () => {
      navigateToMenuItem(itemId);
    });
      
    menuGrid.appendChild(menuItem);
  });
  
  const viewMenuButton = createElement('button', 'view-menu-btn', 'View Full Menu');
  
  menuSection.appendChild(menuHeading);
  menuSection.appendChild(menuGrid);
  menuSection.appendChild(viewMenuButton);
  
  // Function to navigate to menu and scroll to the item
  function navigateToMenuItem(itemId) {
    // Check if loadMenu exists
    if (typeof window.loadMenu !== 'function') {
      console.error('loadMenu function not found on window object');
      return;
    }
    
    // Store the itemId in sessionStorage so it persists across page navigation
    sessionStorage.setItem('scrollToItemId', itemId);
    
    // Navigate to menu page (only once)
    window.loadMenu(true); // Pass true to skip automatic scroll
  }

  // Testimonial Section
  const testimonialSection = createElement('section', 'testimonial-section');
  const testimonialText = createElement('p', 'testimonial-text', 'Comfy Cafe is my second home. The ambiance is perfect for working, the coffee is exceptional, and the staff makes you feel like family.');
  const testimonialAuthor = createElement('p', 'testimonial-author', '— Jerry Garcia');
  
  testimonialSection.appendChild(testimonialText);
  testimonialSection.appendChild(testimonialAuthor);
  
  // Hours & Location Section
  const hoursLocationSection = createElement('section', 'hours-location-section');
  const hoursLocationFlex = createElement('div', 'hours-location-flex');
  
  const hoursDiv = createElement('div', 'hours-div');
  const hoursHeading = createElement('h3', null, 'Hours');
  const hoursText = createElement('p', null, 'Open Daily: 7am - 8pm');
  
  hoursDiv.appendChild(hoursHeading);
  hoursDiv.appendChild(hoursText);
  
  const locationDiv = createElement('div', 'location-div');
  const locationHeading = createElement('h3', null, 'Location');
  const locationText = createElement('p', null, '123 Comfy Street');
  const locationTextCity = createElement('p', null, 'Paris, France 75008');
  const contactButton = createElement('button', 'contact-btn', 'Contact Us');
  
  locationDiv.appendChild(locationHeading);
  locationDiv.appendChild(locationText);
  locationDiv.appendChild(locationTextCity);
  locationDiv.appendChild(contactButton);
  
  hoursLocationFlex.appendChild(hoursDiv);
  hoursLocationFlex.appendChild(locationDiv);
  hoursLocationSection.appendChild(hoursLocationFlex);
  
  // Append all sections to the main container
  homeContainer.appendChild(heroSection);
  homeContainer.appendChild(aboutSection);
  homeContainer.appendChild(featuresSection);
  homeContainer.appendChild(menuSection);
  homeContainer.appendChild(testimonialSection);
  homeContainer.appendChild(hoursLocationSection);
  
  // Add event listeners for buttons using global functions
  viewMenuButton.addEventListener('click', () => {
    window.loadMenu();
  });
  
  contactButton.addEventListener('click', () => {
    window.loadContact();
  });

  return homeContainer;
}

export default homePage;