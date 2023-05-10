const {Item} = require('../models');

const itemData = [
    {
        name: "Apples",
        description: "Organic Fuji apples",
        category: "Fruit",
        daysUntilExpiration: 7,
      },
      {
        name: "Spinach",
        description: "Organic baby spinach",
        category: "Vegetable",
        daysUntilExpiration: 3,
      },
      {
        name: "Salmon",
        description: "Fresh Atlantic salmon",
        category: "Seafood",
        daysUntilExpiration: 2,
      },
      {
        name: "Ground Beef",
        description: "Grass-fed beef",
        category: "Meat",
        daysUntilExpiration: 4,
      },
      {
        name: "Milk",
        description: "Organic whole milk",
        category: "Dairy",
        daysUntilExpiration: 5,
      },
      {
        name: "Eggs",
        description: "Organic free-range eggs",
        category: "Dairy",
        daysUntilExpiration: 7,
      },
      {
        name: "Bread",
        description: "Sourdough bread",
        category: "Bakery",
        daysUntilExpiration: 5,
      },
      {
        name: "Broccoli",
        description: "Organic broccoli",
        category: "Vegetable",
        daysUntilExpiration: 4,
      },
      {
        name: "Pork Chops",
        description: "Heritage pork chops",
        category: "Meat",
        daysUntilExpiration: 3,
      },
      {
        name: "Pasta",
        description: "Organic spaghetti",
        category: "Pantry",
        daysUntilExpiration: 365,
      },
      {
        name: "Lentils",
        description: "Organic red lentils",
        category: "Pantry",
        daysUntilExpiration: 730,
      },
      {
        name: "Rice",
        description: "Organic brown rice",
        category: "Pantry",
        daysUntilExpiration: 365,
      },
      {
        name: "Chicken",
        description: "Organic chicken breast",
        category: "Meat",
        daysUntilExpiration: 2,
      },
      {
        name: "Carrots",
        description: "Organic baby carrots",
        category: "Vegetable",
        daysUntilExpiration: 5,
      },
      {
        name: "Bananas",
        description: "Organic bananas",
        category: "Fruit",
        daysUntilExpiration: 4,
      },
      {
        name: "Cheese",
        description: "Organic cheddar cheese",
        category: "Dairy",
        daysUntilExpiration: 7,
      },
      {
        name: "Yogurt",
        description: "Organic Greek yogurt",
        category: "Dairy",
        daysUntilExpiration: 7,
      },
      {
        name: "Potatoes",
        description: "Organic Yukon gold potatoes",
        category: "Vegetable",
        daysUntilExpiration: 14,
      },
      {
        name: "Onions",
        description: "Organic yellow onions",
        category: "Vegetable",
        daysUntilExpiration: 30,
      },
      {
        name: "Tomatoes",
        description: "Organic Roma tomatoes",
        category: "Vegetable",
        daysUntilExpiration: 3,
      },
      {
        name: "Avocado",
        description: "Organic avocado",
        category: "Fruit",
        daysUntilExpiration: 2,
      },
      {
        name: "Oranges",
        description: "Organic navel oranges",
        category: "Fruit",
        daysUntilExpiration: 10,
      },
      {
  name: "Apples",
  description: "Organic Fuji apples",
  category: "Fruit",
  daysUntilExpiration: 7,
},
{
  name: "Spinach",
  description: "Organic baby spinach",
  category: "Vegetable",
  daysUntilExpiration: 3,
},
{
  name: "Salmon",
  description: "Fresh Atlantic salmon",
  category: "Seafood",
  daysUntilExpiration: 2,
},
{
    name: "Sweet Potatoes",
    description: "Organic sweet potatoes",
    category: "Vegetable",
    daysUntilExpiration: 14,
  },
  {
    name: "Oranges",
    description: "Organic navel oranges",
    category: "Fruit",
    daysUntilExpiration: 10,
  },
  {
    name: "Beef Jerky",
    description: "Organic beef jerky",
    category: "Snacks",
    daysUntilExpiration: 90,
  },
  {
    name: "Granola Bars",
    description: "Organic granola bars",
    category: "Snacks",
    daysUntilExpiration: 30,
  },
  {
    name: "Peanut Butter",
    description: "Organic peanut butter",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "Jelly",
    description: "Organic strawberry jelly",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "Soy Milk",
    description: "Organic soy milk",
    category: "Dairy",
    daysUntilExpiration: 10,
  },
  {
    name: "Almond Milk",
    description: "Organic almond milk",
    category: "Dairy",
    daysUntilExpiration: 14,
  },
  {
    name: "Coconut Milk",
    description: "Organic coconut milk",
    category: "Dairy",
    daysUntilExpiration: 10,
  },
  {
    name: "Cashews",
    description: "Organic cashews",
    category: "Snacks",
    daysUntilExpiration: 60,
  },
  {
    name: "Pecans",
    description: "Organic pecans",
    category: "Snacks",
    daysUntilExpiration: 90,
  },
  {
    name: "Pistachios",
    description: "Organic pistachios",
    category: "Snacks",
    daysUntilExpiration: 60,
  },
  {
    name: "Peanuts",
    description: "Organic peanuts",
    category: "Snacks",
    daysUntilExpiration: 90,
  },
  {
    name: "Honey",
    description: "Organic honey",
    category: "Pantry",
    daysUntilExpiration: 730,
  },
  {
    name: "Maple Syrup",
    description: "Organic maple syrup",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "Olive Oil",
    description: "Organic olive oil",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "Coconut Oil",
    description: "Organic coconut oil",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "Balsamic Vinegar",
    description: "Organic balsamic vinegar",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "Red Wine Vinegar",
    description: "Organic red wine vinegar",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "White Wine Vinegar",
    description: "Organic white wine vinegar",
    category: "Pantry",
    daysUntilExpiration: 365,
  },
  {
    name: "Apple Cider Vinegar",
    description: "Organic apple cider vinegar",
    category: "Pantry",
    daysUntilExpiration: 365,
  }
]  

const seedItems = () => Item.bulkCreate(itemData, {
    individualHooks: true,
    returning:true
  });

  module.exports = seedItems