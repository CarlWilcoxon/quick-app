
const express = require('express');
require('dotenv').config();
const cors= require('cors');

const app = express();

// CORS middleware
const originWhiteList = ['http://localhost:3000'];
const options = {
  origin:(origin, callback)=> {
    if (originWhiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(console.error('Not allowed by CORS'))
    }
  }
};
app.use(cors(options));


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Route includes
const historyRouter = require('./routes/history.router');

/* Routes */
app.use('/api/history', historyRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
