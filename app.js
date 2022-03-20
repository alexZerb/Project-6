const express = require('express');

const app = express();

const { projects } = require('./data.json');

app.set('view engine', 'pug');

app.use(express.json());

app.use('static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('The application is running on localhost: 3000!');
});
