
const sauceIngredients = {
  "ingredientList": [
        {
          "ingredient": "Olive Oil",
          "amount": "1-2 tbsp"
        },
        {
          "ingredient": "Fresh Basil",
          "amount": "Entire Package"
        },
        {
          "ingredient": "Garlic",
          "amount": "4-5 Cloves(Big)"
        },
        {
          "ingredient": "Tomatoe Paste",
          "amount": "TBD (Private Selection)"
        },
        {
          "ingredient": "San Marzano Tomatoes",
          "amount": "TBD (Private Selection)"
        }
        ]}

const enchiladaIngredients = {
  "ingredientList": [
        {
          "_id": "5bec84cf1cb26c0eeec324df",
          "ingredient": "Red Chili Powder",
          "amount": "Packet, 2-3 tbsp"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324de",
          "ingredient": "Pure Pepper",
          "amount": "(1 mild, 1 hot) 2-3 tbsp"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324dd",
          "ingredient": "Oregano (Mexican Powder)",
          "amount": "Packet"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324dc",
          "ingredient": "White Onion",
          "amount": "2-3 tbsp"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324db",
          "ingredient": "Tomato Paste",
          "amount": "1-2 tbsp"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324da",
          "ingredient": "Sugar",
          "amount": "Between 1 tsp and 1 tbsp; to taste"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324d9",
          "ingredient": "Chocolate (Hersheys - morsels, milk or cocoa powder)",
          "amount": "Just a little, to taste"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324d8",
          "ingredient": "Chicken Stock",
          "amount": "1 cup"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324d7",
          "ingredient": "Water",
          "amount": "1 cup"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324d6",
          "ingredient": "Olive Oil",
          "amount": "1-2 tbsp"
        },
        {
          "_id": "5bec84cf1cb26c0eeec324d5",
          "ingredient": "Flour",
          "amount": "1-2 tbsp"
        }
      ],
}

exports.seed = function(knex, Promise) {
    return knex.raw('ALTER SEQUENCE recipe_id_seq RESTART WITH 3')
  .then(function() {
    return knex('recipe').del();
  })
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('recipe').insert({
          id: 1,
          title: 'Red Sauce',
          created_at: knex.fn.now(),
          image: 'https://s3.us-east-2.amazonaws.com/reci-peas-photo-album/red_sauce.jpg',
          rating: 5,
          mealType: 'Sauce',
          instructions: 'Saute garlic, dont brown. Add tomatoes, paste, and almost all of the basil. Cook for 10-15 minutes. Sip. Add more basil. Cook for 10 more minutes, and sip. Maybe add sugar.',
          ingredients: JSON.stringify(sauceIngredients),
          keywords: 'Poppy, Suace, Pasta',
        }),

        knex('recipe').insert({
          id: 2,
          title: 'Enchiiladas',
          created_at: knex.fn.now(),
          image: 'https://s3.us-east-2.amazonaws.com/reci-peas-photo-album/enchiladas.jpg',
          rating: 5,
          mealType: 'Entree',
          instructions: 'Put olive oil on medium. Add onions. Saute. Add flower. Lower. Absorb. Add some of the Chicken Stock. Add Tomato Paste. Add a little water. Add Chili Powders, Oregano, Salt, Chocolate. Add rest of the liquids. Pretty thin --> milk thin. Dip corn tortillas in sauce. Get out with spatula. Put tortilla in pan. Add mexican cheese(or enchilada cheese) and onions. Dip other tortilla. Repeat. If chicken: shred, add powders, set oven to 350. Bake for 20 minutes or so.',
          ingredients: JSON.stringify(enchiladaIngredients),
          keywords: 'Mexican, Poppy, Dinner, Entree',
        }),

      ]);
    });

    // knex('recipe').insert({
    //   id: 1,
    //   title: '',
    //   created_at: knex.fn.now(),
    //   image: '',
    //   rating: 5,
    //   mealType: '',
    //   instructions: '',
    //   ingredients: '',
    //   keywords: '',
    // }),
};
