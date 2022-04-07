// require express and data.json 
const express = require('express');
const app = express();
const mainRoute = require('./routes/main');
const errorHandling = require('./routes/error')


// View engine set to pug
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// Routing for Homepage, about, and projects

app.use(mainRoute);

// Routing for error handling
app.use(errorHandling.fourOneFourHandler);
app.use(errorHandling.globalHandler);



//Set app to listen on port 3000 

const port = process.PORT || 3000;
app.listen(port, () => {
    console.log(`The application is running on localhost: ${port}`);
});
