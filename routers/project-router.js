const express = require('express');

const Project = require('../data/helpers/projectModel.js');
const router = express.Router();


// GET working
router.get('/', (req, res) => {

    Project.get()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving the project', error})
        })
})

// POST working
router.post('/', (req,res) => {
    Project.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch( error => {
            res.status(500).json({ message: "Error adding project", error})
        })
})


//PUT
router.put('/:id',(req,res) => {
    const changes = req.body;

    Project.update(req.params.id, changes)
        .then(project => {
            res.status(200).json(project);
        })
        .catch( error => {
            res.status(500).json({ message: " Error updating the project" })
        });
});

// DELETE working
router.delete('/:id', (req,res) => {
    Project.remove(req.params.id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: 'The project has been deleted'})
            } else {
                res.status(400).json({ message: "The project could not be found"})
            }
        })
        .catch( error => {
            res.status(500).json({ message: 'Error removing the project', error})
        })
})

// GET PROJECT ACTIONS working
router.get('/:id/actions', (req,res) => {
    Project.getProjectActions(req.params.id)
        .then(action => {
            res.status(200).json(action)
        })
        .catch( error => {
            res.status(500).json({ message: "Error getting the actions for the project"})
        })
})


module.exports = router;