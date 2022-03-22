// require express and data.json 
const express = require('express');
const app = express();

const {projects} = require('./data.json');
app.use(express.json());


// Middleware and View engine set to pug
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// Routing for index, about, and projects

app.get('/', (req, res, next) => {
    res.render('index', { projects })
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects/:id', (req, res, next) => {
    
    res.render('project', { id: parseInt(req.params.id), data: data.projects });
});

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
