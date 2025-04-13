// Pastry items array
const pastries = [
  {
    id: 1,
    name: "Croissant",
    price: 3.95,
    calories: 340,
    description: "Buttery, flaky croissant with a golden exterior and soft, airy interior.",
    ingredients: ["Flour", "Butter", "Yeast", "Sugar", "Salt", "Milk"],
    image: require("../assets/pastries/croissant.jpg")
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    price: 4.25,
    calories: 360,
    description: "Chocolate-filled croissant with rich dark chocolate batons folded into buttery layers.",
    ingredients: ["Flour", "Butter", "Sugar", "Yeast", "Salt", "Dark Chocolate", "Milk", "Eggs"],
    image: require("../assets/pastries/chocolate-croissant.jpg")
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    price: 3.50,
    calories: 310,
    description: "Moist muffin bursting with fresh blueberries and topped with streusel crumble.",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Milk", "Fresh Blueberries", "Baking Powder", "Salt", "Vanilla Extract"],
    image: require("../assets/pastries/blueberry-muffin.jpg")
  },
  {
    id: 4,
    name: "Almond Danish",
    price: 4.25,
    calories: 390,
    description: "Flaky pastry filled with sweet almond paste and topped with sliced almonds.",
    ingredients: ["Puff Pastry", "Almond Paste", "Butter", "Sliced Almonds", "Powdered Sugar", "Eggs", "Vanilla Extract"],
    image: require("../assets/pastries/almond-danish.jpg")
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    price: 4.50,
    calories: 420,
    description: "Swirled pastry with cinnamon sugar filling and cream cheese frosting.",
    ingredients: ["Flour", "Butter", "Sugar", "Cinnamon", "Yeast", "Cream Cheese", "Vanilla Extract", "Salt"],
    image: require("../assets/pastries/cinnamon-roll.jpg")
  },
  {
    id: 6,
    name: "Lemon Tart",
    price: 5.25,
    calories: 320,
    description: "Buttery shortbread crust filled with tangy lemon curd and dusted with powdered sugar.",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Lemons", "Cream", "Vanilla Extract", "Salt"],
    image: require("../assets/pastries/lemon-tart.jpg")
  },
  {
    id: 7,
    name: "Raspberry Scone",
    price: 3.75,
    calories: 290,
    description: "Flaky, tender scone studded with fresh raspberries and finished with a light sugar glaze.",
    ingredients: ["Flour", "Butter", "Sugar", "Baking Powder", "Salt", "Heavy Cream", "Fresh Raspberries", "Vanilla Extract"],
    image: require("../assets/pastries/raspberry-scone.jpg")
  },
  {
    id: 8,
    name: "Chocolate Chip Cookie",
    price: 2.75,
    calories: 280,
    description: "Soft-baked cookie loaded with premium chocolate chips and a hint of vanilla.",
    ingredients: ["Flour", "Butter", "Brown Sugar", "White Sugar", "Eggs", "Vanilla Extract", "Chocolate Chips", "Baking Soda", "Salt"],
    image: require("../assets/pastries/chocolate-chip-cookie.jpg")
  }
];

// Coffee drinks array
const coffees = [
  {
    id: 100,
    name: "House Blend Coffee",
    price: 2.95,
    calories: 5,
    description: "Our signature medium roast coffee with notes of chocolate and caramel.",
    ingredients: ["Arabica Coffee Beans", "Filtered Water"],
    image: require("../assets/coffees/house-coffee.jpg")
  },
  {
    id: 101,
    name: "Cappuccino",
    price: 4.50,
    calories: 120,
    description: "Espresso topped with equal parts steamed and frothed milk.",
    ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
    image: require("../assets/coffees/cappucinno.jpg")
  },
  {
    id: 102,
    name: "Caramel Latte",
    price: 5.25,
    calories: 250,
    description: "Espresso with steamed milk and rich caramel syrup, topped with whipped cream.",
    ingredients: ["Espresso", "Steamed Milk", "Caramel Syrup", "Whipped Cream", "Caramel Drizzle"],
    image: require("../assets/coffees/caramel-latte.jpg")
  },
  {
    id: 103,
    name: "Americano",
    price: 3.50,
    calories: 10,
    description: "Espresso diluted with hot water, creating a coffee similar to drip coffee but with a different flavor profile.",
    ingredients: ["Espresso", "Hot Water"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 104,
    name: "Mocha",
    price: 5.50,
    calories: 290,
    description: "Espresso with steamed milk, chocolate syrup, and whipped cream.",
    ingredients: ["Espresso", "Steamed Milk", "Chocolate Syrup", "Whipped Cream", "Chocolate Shavings"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 105,
    name: "Cold Brew",
    price: 4.75,
    calories: 15,
    description: "Coffee steeped in cold water for 24 hours, producing a smooth, less acidic brew.",
    ingredients: ["Coarsely Ground Coffee Beans", "Cold Filtered Water"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 106,
    name: "Vanilla Flat White",
    price: 4.95,
    calories: 170,
    description: "Ristretto shots of espresso with steamed milk and vanilla syrup, resulting in a velvety texture.",
    ingredients: ["Ristretto Espresso", "Steamed Milk", "Vanilla Syrup"],
    image: "/api/placeholder/300/200"
  },
  {
    id: 107,
    name: "Chai Tea Latte",
    price: 4.50,
    calories: 240,
    description: "Black tea infused with cinnamon, cloves, and other warming spices, combined with steamed milk.",
    ingredients: ["Black Tea", "Cinnamon", "Cardamom", "Ginger", "Cloves", "Steamed Milk", "Honey"],
    image: "/api/placeholder/300/200"
  }
];

export { pastries, coffees };