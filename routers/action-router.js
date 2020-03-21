const express = require('express');

const Project = require('../data/helpers/projectModel.js');
const Action = require('../data/helpers/actionModel.js');
const router = express.Router();


// GET working
router.get('/', (req, res) => {

    Action.get()
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving the project', error})
        })
})

// POST working
router.post('/', (req,res) => {
    Project.get(req.body.project_id)
        .then( project => {
            if(project) {
                Action.insert(req.body)
                    .then(action => {
                        res.status(200).json({ message: 'Posted action', action})
                    })
                    .catch( error => {
                        res.status(500).json({ message: "Error", error})
                    })
            }
        })
})

// PUT
router.put('/:id', (req,res) => {
    const changes = req.body;
    if(!changes) {
        res.status(400).json({ message: "missing information"})
    } else {
        Action.update(req.params.id, changes)
            .then(action => {
                if(action) {
                res.status(200).json({ message: "Updated action", action})
            } else {
                res.status(400).json({ message: "error"})
            }
        })
    }

})



// DELETE working
router.delete('/:id', (req,res) => {
    Action.remove(req.params.id)
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


module.exports = router;