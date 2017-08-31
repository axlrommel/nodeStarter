process.title = 'NodeJSStarter';

require('babel-register')

// read environment variables from .env file
require('dotenv').config();

// make sure your environment variables are all there 
// set them in the system
require('./helpers/AppInit.js').SetupEnv();

//start the main application
require('./App.js')
