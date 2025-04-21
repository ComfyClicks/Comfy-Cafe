import { food, beverage } from "./menuData.js";

function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  
  const foodSection = createMenuSection('Food', food);
  menuContainer.appendChild(foodSection);

  const beverageSection = createMenuSection('Beverages', beverage);
  menuContainer.appendChild(beverageSection);

  // Check if we need to scroll to a specific item
  setTimeout(() => {
    const itemId = sessionStorage.getItem('scrollToItemId');
    if (itemId) {
      // Clear the storage so it only happens once
      sessionStorage.removeItem('scrollToItemId');
      
      // Prevent any automatic scrolling to top
      // This stops the default behavior that causes jerkiness
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }
      
      // Find the item
      const targetItem = document.querySelector(`[data-item-id="${itemId}"]`);
      if (targetItem) {
        // Disable any competing scroll events temporarily
        document.body.style.overflow = 'hidden';
        
        // First wait for everything to fully render
        setTimeout(() => {
          // Add highlight effect in advance
          targetItem.classList.add('highlight-item');
          
          // Scroll directly to the item in one smooth motion
          targetItem.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          
          // Re-enable scrolling after animation completes
          setTimeout(() => {
            document.body.style.overflow = '';
            
            // Remove highlight after a delay
            setTimeout(() => {
              targetItem.classList.remove('highlight-item');
            }, 1500);
          }, 1000); // Allow time for scroll animation
        }, 300); // Wait for page to stabilize
      }
    }
  }, 100);

  return menuContainer;
};

function createMenuSection(title, array) {
  // Create food section
  const section = document.createElement('div');
  section.classList.add('menu-section');
  
  const heading = document.createElement('h1');
  heading.textContent = title;
  heading.classList.add('section-heading');
  section.appendChild(heading);
  
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('menu-div');
  
  // Add food items
  array.forEach(item => {
    const menuItem = createMenuItem(item);
    itemDiv.appendChild(menuItem);
  });
  
  section.appendChild(itemDiv);
  return section;
}

// Helper function to create a menu item
function createMenuItem(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  // Make the whole card clickable
  const itemId = item.id;
  menuItem.dataset.itemId = itemId;
  menuItem.classList.add('clickable');

  const itemPicture = document.createElement('img');
  itemPicture.src = item.image;
  itemPicture.alt = item.name;
  itemPicture.classList.add('item-picture');

  const itemName = document.createElement('h2');
  itemName.textContent = item.name;
  itemName.classList.add('item-name');

  const itemPrice = document.createElement('p');
  itemPrice.textContent = `$${item.price.toFixed(2)}`;
  itemPrice.classList.add('price');

  const itemDescription = document.createElement('p');
  itemDescription.textContent = item.description;
  itemDescription.classList.add('item-description');

  const itemCalories = document.createElement('p');
  itemCalories.textContent = item.calories;
  itemCalories.classList.add('item-calories');

  const itemIngredients = document.createElement('p');
  itemIngredients.textContent = item.ingredients.join(', ');
  itemIngredients.classList.add('item-ingredients');

  menuItem.appendChild(itemPicture);
  menuItem.appendChild(itemName);
  menuItem.appendChild(itemPrice);
  menuItem.appendChild(itemDescription);
  menuItem.appendChild(itemCalories);
  menuItem.appendChild(itemIngredients);
  
  // Add click event to show modal
  menuItem.addEventListener('click', () => {
    showItemModal(item);
  });

  return menuItem;
};

// Function to create modal
function showItemModal(item) {
  // Create modal container
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  // Create close button
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-modal');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.removeChild(modal);
  });
  
  // Create modal image - larger version
  const modalImage = document.createElement('img');
  modalImage.src = item.image;
  modalImage.alt = item.name;
  modalImage.classList.add('modal-image');
  
  // Create item details container
  const modalDetails = document.createElement('div');
  modalDetails.classList.add('modal-details');
  
  // Item name
  const modalName = document.createElement('h2');
  modalName.textContent = item.name;
  modalName.classList.add('modal-name');
  
  // Item price
  const modalPrice = document.createElement('p');
  modalPrice.textContent = `$${item.price.toFixed(2)}`;
  modalPrice.classList.add('modal-price');
  
  // Item description
  const modalDescription = document.createElement('p');
  modalDescription.textContent = item.description;
  modalDescription.classList.add('modal-description');
  
  // Calories
  const modalCalories = document.createElement('p');
  modalCalories.classList.add('modal-calories');
  modalCalories.textContent = item.calories;
  
  // Ingredients
  const modalIngredients = document.createElement('p');
  modalIngredients.classList.add('modal-ingredients');
  modalIngredients.textContent = item.ingredients.join(', ');
  
  // Append all elements to modal details
  modalDetails.appendChild(modalName);
  modalDetails.appendChild(modalPrice);
  modalDetails.appendChild(modalDescription);
  modalDetails.appendChild(modalCalories);
  modalDetails.appendChild(modalIngredients);
  
  // Append elements to modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalImage);
  modalContent.appendChild(modalDetails);
  
  // Append content to modal
  modal.appendChild(modalContent);
  
  // Add modal to body
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
  });
}

export default createMenu;