import { food, beverage } from "./menuData.js";

// Main menu creation function
function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  
  menuContainer.appendChild(createMenuSection('Food', food));
  menuContainer.appendChild(createMenuSection('Beverages', beverage));

  // Handle item highlighting after a short delay
  setTimeout(scrollToHighlightedItem, 100);

  return menuContainer;
}

// Scroll to highlighted item function
function scrollToHighlightedItem() {
  const itemId = sessionStorage.getItem('scrollToItemId');
  if (!itemId) return;

  // Clear storage immediately
  sessionStorage.removeItem('scrollToItemId');
  
  // Prevent default scroll restoration
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  
  // Find the target item
  const targetItem = document.querySelector(`[data-item-id="${itemId}"]`);
  if (!targetItem) return;

  // Use animation frame for smoother rendering
  requestAnimationFrame(() => {
    targetItem.classList.add('highlight-item');
    targetItem.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
    
    // Remove highlight after animation completes
    setTimeout(() => {
      targetItem.classList.remove('highlight-item');
    }, 2500);
  });
}

// Create a section of the menu
function createMenuSection(title, items) {
  const section = document.createElement('div');
  section.classList.add('menu-section');
  
  const heading = document.createElement('h1');
  heading.textContent = title;
  heading.classList.add('section-heading');
  
  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('menu-div');
  
  // Use DocumentFragment for better performance
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    fragment.appendChild(createMenuItem(item));
  });
  
  itemsContainer.appendChild(fragment);
  
  section.appendChild(heading);
  section.appendChild(itemsContainer);
  return section;
}

// Create a single menu item
function createMenuItem(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item', 'clickable');
  menuItem.dataset.itemId = item.id;

  // Use template for consistent HTML structure
  menuItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="item-picture">
    <h2 class="item-name">${item.name}</h2>
    <p class="price">$${item.price.toFixed(2)}</p>
    <p class="item-description">${item.description}</p>
    <p class="item-calories">${item.calories}</p>
    <p class="item-ingredients">${item.ingredients.join(', ')}</p>
  `;
  
  // Add click event for modal
  menuItem.addEventListener('click', () => showItemModal(item));

  return menuItem;
}

// Show modal for a menu item
function showItemModal(item) {
  // Create modal elements
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  // Use template string for cleaner HTML structure
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <img src="${item.image}" alt="${item.name}" class="modal-image">
      <div class="modal-details">
        <h2 class="modal-name">${item.name}</h2>
        <p class="modal-price">$${item.price.toFixed(2)}</p>
        <p class="modal-description">${item.description}</p>
        <p class="modal-calories">${item.calories}</p>
        <p class="modal-ingredients">${item.ingredients.join(', ')}</p>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Setup event handlers
  setupModalEventHandlers(modal);
}

// Extract modal event handling to a separate function
function setupModalEventHandlers(modal) {
  const closeBtn = modal.querySelector('.close-modal');
  
  // Close button click handler
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal(modal);
  });
  
  // Click outside content to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });
  
  // Escape key handler
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
      document.removeEventListener('keydown', escHandler);
    }
  };
  
  document.addEventListener('keydown', escHandler);
}

// Centralized modal closing logic
function closeModal(modal) {
  // Add a fade-out effect
  modal.classList.add('closing');
  setTimeout(() => document.body.removeChild(modal), 200);
}

export default createMenu;