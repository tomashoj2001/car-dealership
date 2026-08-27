// SETTING UP EXPRESS

// 1) import express and morgan
import express from 'express';
import morgan from 'morgan';

// 2) import AppError class, globalerrorHandler controller, routes
import carRouter from './routes/carRoutes.js';
import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

// 3) create express app
const app = express();

// 4) initialize morgan on dev environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 5) setup json and static public
app.use(express.json()); /* allows express to work with json files */
// app.use(express.static(`${__dirname}/public`)); -> allow public folder to be accessible from outside

// 6) initialize routes
app.use('/api/v1/cars', carRouter);

// 7) catch route error
app.use('/*splat', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// 8) catch global error
app.use(globalErrorHandler);

// 9) export express app
export default app;
