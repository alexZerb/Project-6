const express = require('express');
const router = express.Router();
const { projects } = require('../data.json')

router.get('/', (req, res, next) => {
    res.locals = projects;
    res.render('index', { projects })
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects[projectId];
    if(project) {
        res.render('project', { project })
    } else {
        const err = new Error;
        err.status = 404;
        err.message = `Cannot find project ${projectId}`;
        next(err)
    }
});

module.exports = router;