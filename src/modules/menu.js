import { pastries, coffees } from "./menuData.js";

const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // Create pastries section
  const pastriesSection = document.createElement('div');
  pastriesSection.classList.add('menu-section');
  
  const pastriesHeading = document.createElement('h1');
  pastriesHeading.textContent = 'Pastries';
  pastriesHeading.classList.add('section-heading');
  pastriesSection.appendChild(pastriesHeading);
  
  const pastriesDiv = document.createElement('div');
  pastriesDiv.classList.add('menu-div');
  
  // Add pastry items
  pastries.forEach(item => {
    const menuItem = createMenuItem(item);
    pastriesDiv.appendChild(menuItem);
  });
  
  pastriesSection.appendChild(pastriesDiv);
  menuContainer.appendChild(pastriesSection);
  
  // Create coffee section
  const coffeeSection = document.createElement('div');
  coffeeSection.classList.add('menu-section');
  
  const coffeeHeading = document.createElement('h1');
  coffeeHeading.textContent = 'Coffee';
  coffeeHeading.classList.add('section-heading');
  coffeeSection.appendChild(coffeeHeading);
  
  const coffeeDiv = document.createElement('div');
  coffeeDiv.classList.add('menu-div');
  
  // Add coffee items
  coffees.forEach(item => {
    const menuItem = createMenuItem(item);
    coffeeDiv.appendChild(menuItem);
  });
  
  coffeeSection.appendChild(coffeeDiv);
  menuContainer.appendChild(coffeeSection);

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

  const itemCalories = document.createElement('p');
  itemCalories.textContent = item.calories;
  itemCalories.classList.add('item-calories');

  const itemDescription = document.createElement('p');
  itemDescription.textContent = item.description;
  itemDescription.classList.add('item-description');

  const itemIngredients = document.createElement('p');
  itemIngredients.textContent = item.ingredients.join(', ');
  itemIngredients.classList.add('item-ingredients');

  menuItem.appendChild(itemPicture);
  menuItem.appendChild(itemName);
  menuItem.appendChild(itemPrice);
  menuItem.appendChild(itemCalories);
  menuItem.appendChild(itemDescription);
  menuItem.appendChild(itemIngredients);

  return menuItem;
};

export default createMenu;