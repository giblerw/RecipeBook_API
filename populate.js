import mongoose from 'mongoose';
import Recipe from './models/recipe';

const recipes = [
  {
    title: 'Enchiladas',
    image: 'https://s3.us-east-2.amazonaws.com/reci-peas-photo-album/enchiladas.jpg',
    rating: 5,
    mealType: 'Entree',
    directions: 'Put olive oil on medium. Add onions. Saute. Add flower. Lower. Absorb. Add some of the Chicken Stock. Add Tomato Paste. Add a little water. Add Chili Powders, Oregano, Salt, Chocolate. Add rest of the liquids. Pretty thin --> milk thin. Dip corn tortillas in sauce. Get out with spatula. Put tortilla in pan. Add mexican cheese(or enchilada cheese) and onions. Dip other tortilla. Repeat. If chicken: shred, add powders, set oven to 350. Bake for 20 minutes or so.',
    ingredients: [
      {
        ingredient: 'Red Chili Powder',
        amount: 'Packet, 2-3 tbsp',
      },
      {
        ingredient: 'Pure Pepper',
        amount: '(1 mild, 1 hot) 2-3 tbsp',
      },
      {
        ingredient: 'Oregano (Mexican Powder)',
        amount: 'Packet',
      },
      {
        ingredient: 'White Onion',
        amount: '2-3 tbsp',
      },
      {
        ingredient: 'Tomato Paste',
        amount: '1-2 tbsp',
      },
      {
        ingredient: 'Sugar',
        amount: 'Between 1 tsp and 1 tbsp; to taste',
      },
      {
        ingredient: 'Chocolate (Hersheys - morsels, milk or cocoa powder)',
        amount: 'Just a little, to taste',
      },
      {
        ingredient: 'Chicken Stock',
        amount: '1 cup',
      },
      {
        ingredient: 'Water',
        amount: '1 cup',
      },
      {
        ingredient: 'Olive Oil',
        amount: '1-2 tbsp',
      },
      {
        ingredient: 'Flour',
        amount: '1-2 tbsp',
      },
    ],
    keywords: [
      'Mexican',
      'Poppy',
      'Dinner',
      'Entree'
    ],
  },
  {
    title: 'Red Sauce',
    image: 'https://s3.us-east-2.amazonaws.com/reci-peas-photo-album/red_sauce.jpg',
    rating: 5,
    mealType: 'Sauce',
    directions: 'Saute garlic, dont brown. Add tomatoes, paste, and almost all of the basil. Cook for 10-15 minutes. Sip. Add more basil. Cook for 10 more minutes, and sip. Maybe add sugar.',
    ingredients: [
      {
        ingredient: 'Olive Oil',
        amount: '1-2 tbsp',
      },
      {
        ingredient: 'Fresh Basil',
        amount: 'Entire Package',
      },
      {
        ingredient: 'Garlic',
        amount: '4-5 Cloves(Big)',
      },
      {
        ingredient: 'Tomatoe Paste',
        amount: 'TBD (Private Selection)',
      },
      {
        ingredient: 'San Marzano Tomatoes',
        amount: 'TBD (Private Selection)',
      },
    ],
    keywords: [
      'Sauce',
      'Poppy',
      'Pasta',
    ],
  },

];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/recipes');

// Go through each movie
recipes.map(data => {
  try {
    // Initialize a model with recipe data
    const recipe = new Recipe(data);
    // and save it into the database
    recipe.save();
  } catch(error) {
    console.log(`Error populating db: ${error.message}`)
  }

});
