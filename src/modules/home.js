import { food, beverage } from './menuData.js';
import createMenu from './menu.js'
import contactPage from './contact.js';

const homePage = () => {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');
  
  // Hero Section
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');
  
  const heroImage = document.createElement('div');
  heroImage.classList.add('hero-image');
  
  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  
  const heroHeading = document.createElement('h2');
  heroHeading.textContent = 'Welcome to Comfy Cafe';
  
  heroContent.appendChild(heroHeading);
  heroSection.appendChild(heroImage);
  heroSection.appendChild(heroContent);
  
  // About Us Section
  const aboutSection = document.createElement('section');
  aboutSection.classList.add('about-section');
  
  const aboutHeading = document.createElement('h3');
  aboutHeading.textContent = 'About Us';
  
  const aboutText = document.createElement('p');
  aboutText.textContent = 'Established in 2020, Comfy Cafe was born from a simple idea: create a space where people feel at home while enjoying exceptional coffee and food. Our relaxed atmosphere and friendly staff invite you to slow down and savor the moment.';
  
  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutText);
  
  // Features Section
  const featuresSection = document.createElement('section');
  featuresSection.classList.add('features-section');
  
  const featuresHeading = document.createElement('h3');
  featuresHeading.textContent = 'What Makes Us Special';
  featuresSection.appendChild(featuresHeading);
  
  const featuresGrid = document.createElement('div');
  featuresGrid.classList.add('features-grid');
  
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
    const featureCard = document.createElement('div');
    featureCard.classList.add('feature-card');
    
    const featureIcon = document.createElement('span');
    featureIcon.textContent = feature.icon;
    featureIcon.classList.add('feature-icon');
    
    const featureTitle = document.createElement('h4');
    featureTitle.textContent = feature.title;
    
    const featureDescription = document.createElement('p');
    featureDescription.textContent = feature.description;
    
    featureCard.appendChild(featureIcon);
    featureCard.appendChild(featureTitle);
    featureCard.appendChild(featureDescription);
    
    featuresGrid.appendChild(featureCard);
  });
  
  featuresSection.appendChild(featuresGrid);
  
  // Featured Menu Section
  const menuSection = document.createElement('section');
  menuSection.classList.add('featured-menu-section');
  
  const menuHeading = document.createElement('h3');
  menuHeading.textContent = 'Featured Menu Items';
  
  const menuGrid = document.createElement('div');
  menuGrid.classList.add('featured-menu-grid');

  // Creates array for top six featured items
  const featuredFood = [food[0], food[5], food[7]];
  const featuredbeverage = [beverage[0], beverage[6], beverage[9]];
  const featuredItems = [...featuredFood, ...featuredbeverage];

  featuredItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('featured-menu-item');
    
    // Add data attributes for finding this item later
    const itemId = item.id 
    menuItem.dataset.itemId = itemId;

    const itemImage = document.createElement('img');
    console.log(itemImage);
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.classList.add('featured-item-image');
    
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('featured-item-info');
    
    const itemName = document.createElement('h4');
    itemName.textContent = item.name;
    itemName.classList.add('featured-item-name');
    
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('featured-item-price');
    itemPrice.textContent = `$${item.price.toFixed(2)}`;
    
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDescription);
    itemInfo.appendChild(itemPrice);
    
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemInfo);
    
    // Add click event listener to navigate to menu
    menuItem.addEventListener('click', () => {
      navigateToMenuItem(itemId);
    });
      
    menuGrid.appendChild(menuItem);
  });
  
  const viewMenuButton = document.createElement('button');
  viewMenuButton.classList.add('view-menu-btn');
  viewMenuButton.textContent = 'View Full Menu';
  
  menuSection.appendChild(menuHeading);
  menuSection.appendChild(menuGrid);
  menuSection.appendChild(viewMenuButton);
  
// Function to navigate to menu and scroll to the item
function navigateToMenuItem(itemId) {
  
  if (typeof loadMenu !== 'function') {
    console.error('loadMenu function not found in global scope');
    return;
  }
  
  // Store the itemId in sessionStorage so it persists across page navigation
  sessionStorage.setItem('scrollToItemId', itemId);
  
  // Navigate to menu page but SKIP the automatic scroll to top
  if (typeof window.loadMenu === 'function') {
    window.loadMenu(); // Pass true to skip scroll
  }

  // Navigate to menu page
  window.loadMenu();
  
  // Wait for DOM to render
  setTimeout(() => {
    let targetSection = null;
    
    if (targetSection) {
      // First scroll to the section heading
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      // Then wait a bit and scroll to the specific item
      setTimeout(() => {
        // Try to find the item by data-item-id
        const targetItem = document.querySelector(`[data-item-id="${itemId}"]`);
        
        if (targetItem) {
          // Add a highlight effect
          targetItem.classList.add('highlight-item');
          
          // Scroll the item into view
          targetItem.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          
          // Remove the highlight after a delay
          setTimeout(() => {
            targetItem.classList.remove('highlight-item');
          }, 2000);
        } else {
          console.warn(`Menu item with ID ${itemId} not found`);
        }
      }, 500);
    }
  }, 300);
}


  // Testimonial Section
  const testimonialSection = document.createElement('section');
  testimonialSection.classList.add('testimonial-section');
  
  const testimonialText = document.createElement('p');
  testimonialText.classList.add('testimonial-text');
  testimonialText.textContent = 'Comfy Cafe is my second home. The ambiance is perfect for working, the coffee is exceptional, and the staff makes you feel like family.';
  
  const testimonialAuthor = document.createElement('p');
  testimonialAuthor.classList.add('testimonial-author');
  testimonialAuthor.textContent = '— Jerry Garcia';
  
  testimonialSection.appendChild(testimonialText);
  testimonialSection.appendChild(testimonialAuthor);
  
  // Hours & Location Section
  const hoursLocationSection = document.createElement('section');
  hoursLocationSection.classList.add('hours-location-section');
  
  const hoursLocationFlex = document.createElement('div');
  hoursLocationFlex.classList.add('hours-location-flex');
  
  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('hours-div');
  
  const hoursHeading = document.createElement('h3');
  hoursHeading.textContent = 'Hours';
  
  const hoursText = document.createElement('p');
  hoursText.textContent = 'Open Daily: 7am - 8pm';
  
  hoursDiv.appendChild(hoursHeading);
  hoursDiv.appendChild(hoursText);
  
  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-div');
  
  const locationHeading = document.createElement('h3');
  locationHeading.textContent = 'Location';
  
  const locationText = document.createElement('p');
  locationText.textContent = '123 Comfy Street';
  const locationTextCity = document.createElement('p');
  locationTextCity.textContent = ' Paris, France 75008';
  
  const contactButton = document.createElement('button');
  contactButton.classList.add('contact-btn');
  contactButton.textContent = 'Contact Us';
  
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
  
  // Add event listeners for navigation
  viewMenuButton.addEventListener('click', () => {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = '';
    const menu = createMenu();
    contentDiv.appendChild(menu);
  });
  
  contactButton.addEventListener('click', () => {
    // Clear the content container
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = '';
    const contact = contactPage();
    contentDiv.appendChild(contact);

    // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  return homeContainer;
};

export default homePage;