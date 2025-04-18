// Food array
const food = [
  {
    id: 1,
    name: "Croissant",
    price: 3.95,
    calories: 340,
    description: "Buttery, flaky croissant with a golden exterior and soft, airy interior.",
    ingredients: ["Flour", "Butter", "Yeast", "Sugar", "Salt", "Milk"],
    image: require("../assets/food/croissant.jpg")
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    price: 4.25,
    calories: 360,
    description: "Chocolate-filled croissant with rich dark chocolate batons folded into buttery layers.",
    ingredients: ["Flour", "Butter", "Sugar", "Yeast", "Salt", "Dark Chocolate", "Milk", "Eggs"],
    image: require("../assets/food/chocolate-croissant.jpg")
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    price: 3.50,
    calories: 310,
    description: "Moist muffin bursting with fresh blueberries and topped with streusel crumble.",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Milk", "Fresh Blueberries", "Baking Powder", "Salt", "Vanilla Extract"],
    image: require("../assets/food/blueberry-muffin.jpg")
  },
  {
    id: 4,
    name: "Chocolate Chip Muffin",
    price: 3.75,
    calories: 340,
    description: "Moist, tender muffin packed with chocolate chips and topped with a sprinkle of turbinado sugar for extra crunch.",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Milk", "Vanilla Extract", "Baking Powder", "Salt", "Chocolate Chips", "Turbinado Sugar"],
    image: require("../assets/food/chocolate-chip-muffin.jpg")
  },
  {
    id: 5,
    name: "Almond Danish",
    price: 4.25,
    calories: 390,
    description: "Flaky pastry filled with sweet almond paste and topped with sliced almonds.",
    ingredients: ["Puff Pastry", "Almond Paste", "Butter", "Sliced Almonds", "Powdered Sugar", "Eggs", "Vanilla Extract"],
    image: require("../assets/food/almond-danish.jpg")
  },
  {
    id: 6,
    name: "Strudel",
    price: 4.50,
    calories: 380,
    description: "Flaky pastry filled with sweet apple and cinnamon, dusted with powdered sugar.",
    ingredients: ["Filo Pastry", "Apples", "Cinnamon", "Sugar", "Butter", "Raisins", "Powdered Sugar", "Lemon Zest"],
    image: require("../assets/food/strudel.jpg")
  },
  {
    id: 7,
    name: "Cream Cheese Swirl",
    price: 4.25,
    calories: 320,
    description: "Sweet pastry with spirals of cream cheese filling, baked until golden brown.",
    ingredients: ["Flour", "Butter", "Sugar", "Cream Cheese", "Eggs", "Vanilla Extract", "Cinnamon", "Salt"],
    image: require("../assets/food/cream-cheese-swirl.jpg")
  },
  {
    id: 8,
    name: "Cinnamon Roll",
    price: 4.50,
    calories: 420,
    description: "Swirled pastry with cinnamon sugar filling and cream cheese frosting.",
    ingredients: ["Flour", "Butter", "Sugar", "Cinnamon", "Yeast", "Cream Cheese", "Vanilla Extract", "Salt"],
    image: require("../assets/food/cinnamon-roll.jpg")
  },
  
  {
    id: 9,
    name: "Blueberry Scone",
    price: 3.95,
    calories: 320,
    description: "Buttery, crumbly scone bursting with fresh blueberries and finished with a light vanilla glaze.",
    ingredients: ["Flour", "Butter", "Sugar", "Baking Powder", "Salt", "Heavy Cream", "Fresh Blueberries", "Vanilla Extract", "Lemon Zest", "Vanilla Glaze"],
    image: require("../assets/food/blueberry-scone.jpg")
  },
  {
    id: 10,
    name: "Raspberry Scone",
    price: 3.75,
    calories: 290,
    description: "Flaky, tender scone studded with fresh raspberries and finished with a light sugar glaze.",
    ingredients: ["Flour", "Butter", "Sugar", "Baking Powder", "Salt", "Heavy Cream", "Fresh Raspberries", "Vanilla Extract"],
    image: require("../assets/food/raspberry-scone.jpg")
  },
  {
    id: 11,
    name: "Eclair",
    price: 4.75,
    calories: 340,
    description: "Light choux pastry filled with vanilla custard and topped with glossy chocolate glaze.",
    ingredients: ["Flour", "Butter", "Eggs", "Water", "Salt", "Vanilla Custard", "Chocolate Glaze"],
    image: require("../assets/food/eclair.jpg")
  },
  {
    id: 12,
    name: "Chocolate Chip Cookie",
    price: 2.75,
    calories: 280,
    description: "Soft-baked cookie loaded with premium chocolate chips and a hint of vanilla.",
    ingredients: ["Flour", "Butter", "Brown Sugar", "White Sugar", "Eggs", "Vanilla Extract", "Chocolate Chips", "Baking Soda", "Salt"],
    image: require("../assets/food/chocolate-chip-cookie.jpg")
  },
  {
    id: 13,
    name: "Vanilla Cupcake",
    price: 3.95,
    calories: 310,
    description: "Moist vanilla cupcake topped with creamy buttercream frosting and colorful sprinkles.",
    ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Milk", "Vanilla Extract", "Baking Powder", "Salt", "Buttercream", "Sprinkles"],
    image: require("../assets/food/vanilla-cupcake.jpg")
  },
  {
    id: 14,
    name: "Chocolate Cupcake",
    price: 4.25,
    calories: 380,
    description: "Rich chocolate cupcake topped with smooth chocolate buttercream frosting and colorful rainbow sprinkles.",
    ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs", "Milk", "Vanilla Extract", "Baking Powder", "Salt", "Chocolate Buttercream", "Rainbow Sprinkles"],
    image: require("../assets/food/chocolate-cupcake.jpg")
  },
  {
    id: 15,
    name: "Almond Frangipane Tart",
    price: 5.75,
    calories: 410,
    description: "Delicate shortcrust pastry filled with rich almond cream and topped with seasonal fruit and sliced almonds.",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Ground Almonds", "Almond Extract", "Seasonal Fruit", "Sliced Almonds", "Apricot Glaze"],
    image: require("../assets/food/almond-tart.jpg")
  },
  {
    id: 16,
    name: "Lemon Tart",
    price: 5.25,
    calories: 320,
    description: "Buttery shortbread crust filled with tangy lemon curd and dusted with powdered sugar.",
    ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Lemons", "Cream", "Vanilla Extract", "Salt"],
    image: require("../assets/food/lemon-tart.jpg")
  },
  {
    id: 17,
    name: "Plain Bagel",
    price: 2.50,
    calories: 280,
    description: "Classic hand-rolled bagel with a chewy interior and a slightly crisp exterior.",
    ingredients: ["Flour", "Water", "Yeast", "Salt", "Malt Syrup"],
    image: require("../assets/food/plain-bagel.jpg")
  },
  {
    id: 18,
    name: "Everything Bagel",
    price: 2.75,
    calories: 290,
    description: "Savory bagel coated with a mixture of sesame seeds, poppy seeds, onion, garlic, and salt.",
    ingredients: ["Flour", "Water", "Yeast", "Salt", "Malt Syrup", "Sesame Seeds", "Poppy Seeds", "Dried Garlic", "Dried Onion"],
    image: require("../assets/food/everything-bagel.jpg")
  },
  {
    id: 19,
    name: "Poppy Seed Bagel",
    price: 2.75,
    calories: 285,
    description: "Traditional bagel generously coated with crunchy poppy seeds.",
    ingredients: ["Flour", "Water", "Yeast", "Salt", "Malt Syrup", "Poppy Seeds"],
    image: require("../assets/food/poppy-seed-bagel.jpg")
  }
];

// Beverage array
const beverage = [
  {
    id: 100,
    name: "House Blend Coffee",
    price: 2.95,
    calories: 5,
    description: "Our signature medium roast coffee with notes of chocolate and caramel.",
    ingredients: ["Arabica Coffee Beans", "Filtered Water"],
    image: require("../assets/beverage/house-coffee.jpg")
  },
  {
    id: 101,
    name: "Cappuccino",
    price: 4.50,
    calories: 120,
    description: "Espresso topped with equal parts steamed and frothed milk.",
    ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
    image: require("../assets/beverage/cappucinno.jpg")
  },
  {
    id: 102,
    name: "Caramel Latte",
    price: 5.25,
    calories: 250,
    description: "Espresso with steamed milk and rich caramel syrup, topped with whipped cream.",
    ingredients: ["Espresso", "Steamed Milk", "Caramel Syrup", "Whipped Cream", "Caramel Drizzle"],
    image: require("../assets/beverage/caramel-latte.jpg")
  },
  {
    id: 103,
    name: "Americano",
    price: 3.50,
    calories: 10,
    description: "Espresso diluted with hot water, creating a coffee similar to drip coffee but with a different flavor profile.",
    ingredients: ["Espresso", "Hot Water"],
    image: require("../assets/beverage/americano.jpg")
  },
  {
    id: 104,
    name: "Mocha",
    price: 5.50,
    calories: 290,
    description: "Espresso with steamed milk, chocolate syrup, and whipped cream.",
    ingredients: ["Espresso", "Steamed Milk", "Chocolate Syrup", "Whipped Cream", "Chocolate Shavings"],
    image: require("../assets/beverage/mocha.jpg")
  },
  {
    id: 105,
    name: "Cold Brew",
    price: 4.75,
    calories: 15,
    description: "Coffee steeped in cold water for 24 hours, producing a smooth, less acidic brew.",
    ingredients: ["Coarsely Ground Coffee Beans", "Cold Filtered Water"],
    image: require("../assets/beverage/cold-brew.jpg")
  },
  {
    id: 106,
    name: "Vanilla Flat White",
    price: 4.95,
    calories: 170,
    description: "Ristretto shots of espresso with steamed milk and vanilla syrup, resulting in a velvety texture.",
    ingredients: ["Ristretto Espresso", "Steamed Milk", "Vanilla Syrup"],
    image: require("../assets/beverage/vanilla-flat-white.jpg")
  },
  {
    id: 107,
    name: "Chai Tea Latte",
    price: 4.50,
    calories: 240,
    description: "Black tea infused with cinnamon, cloves, and other warming spices, combined with steamed milk.",
    ingredients: ["Black Tea", "Cinnamon", "Cardamom", "Ginger", "Cloves", "Steamed Milk", "Honey"],
    image: require("../assets/beverage/chai-latte.jpg")
  },
  {
    id: 108,
    name: "Espresso Shot",
    price: 2.50,
    calories: 5,
    description: "Concentrated coffee served in a small cup, featuring a rich flavor and hazelnut-colored crema on top.",
    ingredients: ["Finely Ground Espresso Beans", "Filtered Water"],
    image: require("../assets/beverage/espresso.jpg")
  },
  {
    id: 109,
    name: "Hot Chocolate",
    price: 4.95,
    calories: 310,
    description: "Rich and creamy hot chocolate topped with fluffy marshmallows and a sprinkle of cinnamon. Made with premium cocoa for a deeply satisfying chocolate experience.",
    ingredients: ["Whole Milk", "Premium Cocoa Powder", "Dark Chocolate", "Vanilla Extract", "Marshmallows", "Ground Cinnamon", "Whipped Cream"],
    image: require("../assets/beverage/hot-chocolate.jpg")
  }
];

export { food, beverage };