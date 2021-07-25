'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');
const v1Routes = require('./routes/v1.js')
const v2Routes = require('./routes/v2.js')

// Prepare the express app
const app = express();

// App Level MW
app.use(
cors({
    origin: '*'
  })
);

// app.use(function (req, res, next) {
//   /*var err = new Error('Not Found');
//    err.status = 404;
//    next(err);*/

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//   //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//   // Pass to next layer of middleware
//   next();
// });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
app.use(v1Routes);
app.use(v2Routes);

// Home Handler
app.get('/', (req, res) => {
  res.status(200).json('Server is Working!')
})

// Error Handlers
app.use('*', notFound);
app.use(errorHandler)


module.exports = {
  app: app,
  start: (port) => {
    if (!port) { throw new Error("Missing Port"); }
    app.listen(port, () => console.log(`Listening on PORT: ${port}`))
  }
}