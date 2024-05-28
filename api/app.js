import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import createError from 'http-errors';
import { checkDatabaseConnection } from './db.js'

import indexRouter from './routes/index.js';
import booksApi from './routes/booksApi.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 4000;

// view engine setup
app.set('views', path.join(path.resolve(), 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/', indexRouter);
app.use('/api/books', booksApi);
app.use('/api', userRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const startServer = async () => {
  await checkDatabaseConnection();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer()

export default app;