// require express and data.json 
const express = require('express');
const app = express();
const mainRoute = require('./routes/main');
const { projects } = require('./data.json');


// View engine set to pug
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// Middleware for Homepage, about, and projects

app.use(mainRoute);

//  404 Error Handling
app.use(( req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//Set app to listen on port 3000 

const port = process.PORT || 3000;
app.listen(port, () => {
    console.log(`The application is running on localhost: ${port}`);
});
