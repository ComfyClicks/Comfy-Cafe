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

  const itemPicture = document.createElement('img');
  itemPicture.src = item.image || 'default-placeholder.jpg';
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

  return menuItem;
};

export default createMenu;