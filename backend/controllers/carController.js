// 1) Import model
import Car from '../models/carModel.js';

// 2) create each controller function
export const getAllCars = async (req, res) => {
  console.log('GETTING ALL CARS');
  try {
    const cars = await Car.find();

    res.status(200).json({
      status: 'success',
      length: cars.length,
      data: { cars },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const createCar = async (req, res) => {
  console.log('CREATING A CAR', req.body);
  try {
    const newCar = await Car.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { car: newCar },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
