import { food, beverage } from "./menuData.js";

const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // Create food section
  const foodSection = document.createElement('div');
  foodSection.classList.add('menu-section');
  
  const foodHeading = document.createElement('h1');
  foodHeading.textContent = 'Food';
  foodHeading.classList.add('section-heading');
  foodSection.appendChild(foodHeading);
  
  const foodDiv = document.createElement('div');
  foodDiv.classList.add('menu-div');
  
  // Add food items
  food.forEach(item => {
    const menuItem = createMenuItem(item);
    foodDiv.appendChild(menuItem);
  });
  
  foodSection.appendChild(foodDiv);
  menuContainer.appendChild(foodSection);
  
  // Create beverage section
  const beverageSection = document.createElement('div');
  beverageSection.classList.add('menu-section');
  
  const beverageHeading = document.createElement('h1');
  beverageHeading.textContent = 'Beverages';
  beverageHeading.classList.add('section-heading');
  beverageSection.appendChild(beverageHeading);
  
  const beverageDiv = document.createElement('div');
  beverageDiv.classList.add('menu-div');
  
  // Add beverage items
  beverage.forEach(item => {
    const menuItem = createMenuItem(item);
    beverageDiv.appendChild(menuItem);
  });
  
  beverageSection.appendChild(beverageDiv);
  menuContainer.appendChild(beverageSection);

  return menuContainer;
};

// Helper function to create a menu item
const createMenuItem = (item) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');
  // Make the whole card clickable
  menuItem.setAttribute('data-item-id', item.id || item.name.replace(/\s+/g, '-').toLowerCase());
  menuItem.classList.add('clickable');
  
  // Add the pointer cursor and click effect via CSS
  
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

// Add this function to your menu.js file
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
  
  // Add nutritional info section if available
  if (item.nutritionalInfo) {
    const nutritionSection = document.createElement('div');
    nutritionSection.classList.add('nutrition-section');
    
    const nutritionHeading = document.createElement('h3');
    nutritionHeading.textContent = 'Nutritional Information';
    nutritionSection.appendChild(nutritionHeading);
    
    const nutritionList = document.createElement('ul');
    nutritionList.classList.add('nutrition-list');
    
    for (const [key, value] of Object.entries(item.nutritionalInfo)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${value}`;
      nutritionList.appendChild(listItem);
    }
    
    nutritionSection.appendChild(nutritionList);
    modalDetails.appendChild(nutritionSection);
  }
  
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