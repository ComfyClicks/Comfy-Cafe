const menuItems = [
  {
    name: "BBQ Chicken",
    price: 14.99,
    description: "Tender half chicken slow-smoked and brushed with our signature BBQ sauce. Served with coleslaw and cornbread.",
    ingredients: ["Chicken", "BBQ Sauce", "Spice Rub", "Apple Wood Chips"],
    calories: 780,
    picture: './assets/chicken.png'
  },
  {
    name: "Brisket",
    price: 18.99,
    description: "Slow-smoked for 14 hours, our tender beef brisket features a perfect smoke ring and flavorful bark. Served with two sides.",
    ingredients: ["Beef Brisket", "Salt", "Pepper", "Garlic Powder", "Oak Wood Chips"],
    calories: 950,
    picture:'./assets/brisket.png'
  },
  {
    name: "Hamburger",
    price: 12.99,
    description: "Half-pound of house-ground brisket and chuck, topped with cheddar, lettuce, tomato, and our special sauce. Served with fries.",
    ingredients: ["Ground Beef", "Brioche Bun", "Cheddar Cheese", "Lettuce", "Tomato", "Special Sauce"],
    calories: 850,
    picture: './assets/hamburger.png'
  },
  {
    name: "Kielbasa",
    price: 13.99,
    description: "Smoked Polish sausage with a snappy casing and rich, garlicky flavor. Served with sauerkraut and potato salad.",
    ingredients: ["Pork", "Beef", "Garlic", "Spices", "Hickory Wood Chips"],
    calories: 720,
    picture: './assets/kielbasa.png'
  },
  {
    name: "Pork Ribs",
    price: 19.99,
    description: "Full rack of St. Louis style ribs, dry-rubbed and slow-smoked until fall-off-the-bone tender. Finished with a light glaze of our house BBQ sauce.",
    ingredients: ["Pork Ribs", "Dry Rub", "BBQ Sauce", "Cherry Wood Chips"],
    calories: 1250,
    picture: './assets/pork-ribs.png'
  },
  {
    name: "Pulled Pork",
    price: 15.99,
    description: "Slow-smoked pork shoulder, hand-pulled and tossed in our Carolina-style sauce. Served on a brioche bun with pickles and coleslaw.",
    ingredients: ["Pork Shoulder", "Carolina Sauce", "Spice Rub", "Hickory Wood Chips", "Brioche Bun"],
    calories: 820,
    picture: './assets/pulled-pork.png'
  },
  {
    name: "Short Ribs",
    price: 22.99,
    description: "Beef short ribs smoked for 8 hours until fork-tender, then glazed with our bourbon BBQ sauce. Served with mashed potatoes and grilled vegetables.",
    ingredients: ["Beef Short Ribs", "Bourbon BBQ Sauce", "Salt", "Pepper", "Mesquite Wood Chips"],
    calories: 1100,
    pictures: './assets/short-ribs.png'
  }
];


const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-div');

  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemPicture = document.createElement('img');
    itemPicture.classList.add('item-picture');

    const itemName = document.createElement('h1');
    itemName.textContent = item.name;
    itemName.classList.add('item-name');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `$${item.price}`;
    itemPrice.classList.add('price');

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    itemDescription.classList.add('item-description');

    const itemIngredients = document.createElement('p');
    itemIngredients.textContent = item.ingredients;
    itemIngredients.classList.add('item-ingredients');

    const itemCalories = document.createElement('p');
    itemCalories.textContent = item.calories;
    itemCalories.classList.add('item-calories');

    menuItem.appendChild(itemPicture);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemIngredients);
    menuItem.appendChild(itemCalories);

    menuContainer.appendChild(menuItem);
  })

  return menuContainer;
}


export default createMenu;