// SETTING UP THE SERVER

// 1) import mongoose and dotenv
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

// 2) error -> caught exception
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION', { name: err.name, msg: err.message });
  throw err;
});

// 3) dotenv config -> it needs the .env file
dotenv.config({ path: './.env' });

// 4) create DB and mongoose connection
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => console.log('DB connection succesful'));

// 5) import app, create port, listen server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Listening on port', port);
});

// 6) error -> unhandled rejection
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION', { name: err.name, message: err.message });
  server.close(() => {
    throw err;
  });
});
