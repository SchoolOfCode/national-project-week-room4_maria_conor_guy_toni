import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
// specification of our routers info to the server imported here
import timersRouter  from './routes/timers.js';
import quotesRouter  from './routes/quotes.js';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Express only serves static assets in production
// this points to our frontend (needs to be named as per the app folder ie wellnessapp)
// and the folder specifically made using npm run build

if (process.env.NODE_ENV === "production") {
  app.use(express.static("wellnessapp/build"));
}
app.use(express.static(path.join(__dirname, "public")));



// routers routes used here
app.use('/timers', timersRouter);
app.use('/quotes', quotesRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
