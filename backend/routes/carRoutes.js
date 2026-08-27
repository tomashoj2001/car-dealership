// 1) Import Express
import express from 'express';
// 2) import controller
import {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} from '../controllers/carController.js';
// 3) create express Router
const router = express.Router();

// 4) create each Router
router.route('/').get(getAllCars).post(createCar);
router.route('/:id').get(getCar).patch(updateCar).delete(deleteCar);

// 5) export the router
export default router;
