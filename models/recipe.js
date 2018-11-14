import mongoose, { Schema } from 'mongoose';

// Define recipe schema
var recipeSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  image: String,
  rating: Number,
  mealType: String,
  directions: String,
  ingredients: [{
    ingredient: String,
    amount: String,
  }],
  keywords: Array,
});

// Export Mongoose model
export default mongoose.model('recipe', recipeSchema);
