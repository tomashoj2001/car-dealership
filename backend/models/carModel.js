// 1) import mongoose (and slugify ?)
import mongoose from 'mongoose';

// 2) create a new mongoose schema
const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'A new car must have a brand name'],
    trim: true,
    minLength: [2, 'A brand name must have at least 2 characters'],
    maxLength: [20, 'A brand name must have up to 20 characters'],
  },
  model: {
    type: String,
    required: [true, 'A new car must have a model name'],
    trim: true,
    minLength: [1, 'A brand name must have at least 1 characters'],
    maxLength: [40, 'A brand name must have up to 40 characters'],
  },
  price: {
    type: Number,
    required: [true, 'A new car must have a price'],
    min: 1000,
  },
  year: {
    type: Number,
    required: [true, 'A new car must have a year'],
    min: 1910,
    max: new Date().getFullYear(),
  },
  kms: {
    type: Number,
    required: [true, 'A new car must have kms'],
    min: 0,
  },
  description: String,
});

// 3) add pre/post middleware if necessary

// 4) create mongoose model with name and schema
const Car = mongoose.model('Car', carSchema);

// 5) export model
export default Car;
