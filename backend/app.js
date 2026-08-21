// SETTING UP EXPRESS

// 1) import express and morgan
import express from 'express';
import morgan from 'morgan';

// 2) import AppError class, globalerrorHandler controller, routes
// 3) create express app
const app = express();

// 4) initialize morgan on dev environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 5) setup json and static public -> idk what are these lines
app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

// 6) initialize routes

// 7) catch route error

// 8) catch global error

// 9) export express app
export default app;
