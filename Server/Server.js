
const mUtil         = require('./ServerUtils/UtilFunctions.js')
const express       = require('express');
const logger        = require("morgan");  // use for send logges of the application in devtool console.
const respomnseTime = require('response-time');
const mRouter       = require('./Router.js');
const fs            = require('fs');
const morgan        = require('morgan');
const path          = require('path');

// return request handler function
const server = express();
const port = process.env.PORT || 5000;
const BLOCK_IP = new Map();

// Use express route

// ===============================================================================================================
//                                                MIDDLEWARES 
// ===============================================================================================================

// Middlewares - without middlewares which are array of handler function, we
//               need one master handler that takes all the request and handle them (what happen in vanilaJS).


server.use(morgan("combined"));

// If the requested file exists in <staticData> directory express will send it to the browser, else call to next().
server.use(express.static(path.join(__dirname, "staticData")));

server.use((request, response, next)=>{
  mUtil.auth(request, response, next);
})

server.use((request, response, next)=>{
  console.log("Middleware 2");
  next();
})

// Thus middlewares will call if some of the previous middleware get some error and will send it with the next call
// by calling next(some_of_error). 
// In case of middleware error, all the next ordinery midlewares will be ignored and only the stack of the error middlewares
// function (the ones marked with err in their lambda's argument) should be called.
server.use((err, request, response, next) => {
  
});

server.use((err, request, response, next) => {
  response.status(500);
  response.send("Internal server error.");
});

server.use('/api', mRouter);



// console.log that your server is up and running
server.listen(port, () => console.log(`Listening on port ${port}`));
