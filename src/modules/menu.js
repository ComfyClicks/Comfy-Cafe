import { food, beverage } from "./menuData.js";

// --- Core Menu Creation ---

// Main menu creation function
function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuContainer.appendChild(createMenuSection('Food', food));
  menuContainer.appendChild(createMenuSection('Beverages', beverage));

  // Handle item highlighting after a short delay to ensure DOM is ready
  setTimeout(scrollToHighlightedItem, 100);

  return menuContainer;
}

// Create sections for Food and Beverages
function createMenuSection(title, items) {
  const section = document.createElement('div');
  section.classList.add('menu-section');

  const heading = document.createElement('h1');
  heading.textContent = title;
  heading.classList.add('section-heading');

  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('menu-div');

  // Use DocumentFragment for efficient DOM manipulation
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    fragment.appendChild(createMenuItem(item));
  });

  itemsContainer.appendChild(fragment);

  section.appendChild(heading);
  section.appendChild(itemsContainer);
  return section;
}

// Create menu item element
function createMenuItem(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item', 'clickable');
  menuItem.dataset.itemId = item.id; // Store item ID for later reference

  // Use template literal for cleaner HTML structure
  menuItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="item-picture">
    <h2 class="item-name">${item.name}</h2>
    <p class="price">$${item.price.toFixed(2)}</p>
    <p class="item-description">${item.description}</p>
    <p class="item-calories">${item.calories}</p>
    <p class="item-ingredients">${item.ingredients.join(', ')}</p>
  `;

  // Add click event to open the modal for this item
  menuItem.addEventListener('click', () => showItemModal(item));

  return menuItem;
}

// --- Highlight and Scroll ---

// Scroll to a specific item after navigating from home page
function scrollToHighlightedItem() {
  const itemId = sessionStorage.getItem('scrollToItemId');
  if (!itemId) return;

  sessionStorage.removeItem('scrollToItemId'); // Clear immediately

  // Ensure browser doesn't try to restore scroll position automatically
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

  const targetItem = document.querySelector(`[data-item-id="${itemId}"]`);
  if (!targetItem) return;

  // Use requestAnimationFrame for smoother visual updates
  requestAnimationFrame(() => {
    targetItem.classList.add('highlight-item');
    targetItem.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    // Remove highlight after animation completes (matches CSS animation duration)
    setTimeout(() => {
      targetItem.classList.remove('highlight-item');
    }, 4500);
  });
}

// --- Modal Functionality ---

// Show the modal for a given menu item
function showItemModal(item) {
  const allItems = [...food, ...beverage]; // Combine all items for navigation
  document.querySelectorAll('.menu-item').forEach(menuItem => {
    menuItem.classList.remove('highlight-item', 'highlight');  // Try both possible class names
  });

  // Create modal container and store current item ID in its dataset
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.dataset.currentItemId = item.id; // Key fix: Store current ID here

  // Populate modal content using template literal
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="nav-arrow left-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </div>
      <img src="${item.image}" alt="${item.name}" class="modal-image">
      <div class="modal-details">
        <h2 class="modal-name">${item.name}</h2>
        <p class="modal-price">$${item.price.toFixed(2)}</p>
        <p class="modal-description">${item.description}</p>
        <p class="modal-calories">${item.calories}</p>
        <p class="modal-ingredients">${item.ingredients.join(', ')}</p>
      </div>
      <div class="nav-arrow right-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Setup event handlers for closing the modal
  setupModalCloseHandlers(modal);

  // Setup event handlers for arrow navigation
  setupModalArrowNavigation(modal, allItems);

  // Setup event handlers for keyboard navigation
  setupModalKeyboardNavigation(modal, allItems);
}

// Setup handlers for closing the modal (X button, overlay click, Escape key)
function setupModalCloseHandlers(modal) {
  const closeBtn = modal.querySelector('.close-modal');

  // Close on X button click
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent triggering overlay click
    closeModal(modal);
  });

  // Close on overlay click (clicking outside the content)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // Close on Escape key press
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
      // Clean up listener immediately after closing
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  // Ensure Escape listener is removed if modal is closed by other means
  modal.addEventListener('modalClosed', () => {
    document.removeEventListener('keydown', escHandler);
  }, { once: true }); // Automatically remove listener after it fires once
}

// Setup click handlers for the left/right navigation arrows
function setupModalArrowNavigation(modal, allItems) {
  const leftArrow = modal.querySelector('.left-arrow');
  const rightArrow = modal.querySelector('.right-arrow');

  leftArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    navigatePrevious(modal, allItems);
  });

  rightArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateNext(modal, allItems);
  });
}

// Setup keyboard handlers (ArrowLeft, ArrowRight) for navigation
function setupModalKeyboardNavigation(modal, allItems) {
  const keyHandler = (e) => {
    // Only navigate if the modal is the active element or relevant
    if (!document.body.contains(modal)) return; // Exit if modal is gone

    if (e.key === 'ArrowLeft') {
      navigatePrevious(modal, allItems);
    } else if (e.key === 'ArrowRight') {
      navigateNext(modal, allItems);
    }
  };
  document.addEventListener('keydown', keyHandler);

  // Clean up the keyboard listener when the modal is closed
  modal.addEventListener('modalClosed', () => {
    document.removeEventListener('keydown', keyHandler);
  }, { once: true });
}

// Navigate to the previous item in the list (with wraparound)
function navigatePrevious(modal, allItems) {
  const currentItemIdString = modal.dataset.currentItemId;
  // Convert the string ID from the dataset to a number
  const currentItemIdNumber = parseInt(currentItemIdString, 10); 
  const currentIndex = allItems.findIndex(i => i.id === currentItemIdNumber);
  // Calculate previous index with wraparound
  const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
  navigateToItem(modal, allItems[prevIndex]);
}

// Navigate to the next item in the list (with wraparound)
function navigateNext(modal, allItems) {
  const currentItemIdString = modal.dataset.currentItemId;
  const currentItemIdNumber = parseInt(currentItemIdString, 10);
  const currentIndex = allItems.findIndex(i => i.id === currentItemIdNumber);
  // Calculate next index with wraparound
  const nextIndex = (currentIndex + 1) % allItems.length;
  navigateToItem(modal, allItems[nextIndex]);
}

// Update the modal content to display a new item
function navigateToItem(modal, newItem) {
  // Update the stored current item ID on the modal
  modal.dataset.currentItemId = newItem.id;

  const modalContent = modal.querySelector('.modal-content');
  const img = modal.querySelector('.modal-image');
  const nameEl = modal.querySelector('.modal-name');
  const priceEl = modal.querySelector('.modal-price');
  const descEl = modal.querySelector('.modal-description');
  const calEl = modal.querySelector('.modal-calories');
  const ingEl = modal.querySelector('.modal-ingredients');

  // Add animation class for transition
  modalContent.classList.add('sliding');

  // Update content after a short delay to allow animation start
  setTimeout(() => {
    img.src = newItem.image;
    img.alt = newItem.name;
    nameEl.textContent = newItem.name;
    priceEl.textContent = `$${newItem.price.toFixed(2)}`;
    descEl.textContent = newItem.description;
    calEl.textContent = newItem.calories;
    ingEl.textContent = newItem.ingredients.join(', ');

    // Remove animation class slightly after content update
    // to ensure smooth visual transition
    requestAnimationFrame(() => {
        modalContent.classList.remove('sliding');
    });
  }, 150); // Adjust timing slightly for better perceived transition
}

// Close the modal with an animation and cleanup
function closeModal(modal) {
  modal.classList.add('closing'); // Add class for fade-out animation

  // Use a custom event to signal closure for listener cleanup
  modal.dispatchEvent(new CustomEvent('modalClosed'));

  // Remove the modal from the DOM after the animation completes
  setTimeout(() => {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
  }, 200); // Match CSS animation duration for closing
}

export default createMenu;