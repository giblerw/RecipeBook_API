import express, { Router } from 'express';
import { index } from './controllers/recipes';

// Initialize the router
const router = Router();

// Handle /recipes.json route with index action from recipes controller
router.route('/recipes.json')
  .get(index);

export default router;
