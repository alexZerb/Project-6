const express = require('express');

const app = express();

const { projects } = require('./data.json');

app.use(express.json());

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res, next) => {
    res.render('index', {projects});
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/projects/:id', (req, res, next) => {
    const id = req.params.id;
    const project = projects[id];
        if(project) {
            res.render('project', { project });
        } else {
            const err = new Error;
            err.status = 404;
            err.message = `Cannot find project ${id}`;
            next(err);
        }

});
const port = process.PORT || 3000;
app.listen(port, () => {
    console.log(`The application is running on localhost: ${port}`);
});
