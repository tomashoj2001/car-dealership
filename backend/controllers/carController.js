// 1) Import model
import Car from '../models/carModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

// 2) create each controller function
export const getAllCars = catchAsync(async (req, res) => {
  console.log('GETTING ALL CARS');

  const cars = await Car.find();

  res.status(200).json({
    status: 'success',
    length: cars.length,
    data: { cars },
  });
});

export const getCar = catchAsync(async (req, res, next) => {
  console.log('GETTING CAR WITH ID', req.params.id);
  const car = await Car.findById(req.params.id);

  if (!car) {
    return next(new AppError('No car was found with this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { car },
  });
});

export const createCar = catchAsync(async (req, res) => {
  console.log('CREATING A CAR', req.body);

  const newCar = await Car.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { car: newCar },
  });
});

export const updateCar = catchAsync(async (req, res) => {
  console.log('UPDATING CAR WITH ID', req.params.id);

  const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: 'after',
    runValidators: true,
  });

  if (!car) {
    return next(new AppError('No car was found this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { car },
  });
});

export const deleteCar = catchAsync(async (req, res, next) => {
  console.log('DELETING CAR WITH ID', req.params.id);

  const car = await Car.findByIdAndDelete(req.params.id);

  if (!car) {
    return next(new AppError('No car was found with this ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
