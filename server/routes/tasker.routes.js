const express = require('express')
const router = express.Router()

const Task = require('../models/Task.model')

router.get('/tasks', (req, res) => {
	Task.find()
		.then(allTasks => res.json(allTasks))
		.catch(err => console.log('Error', err))
})

router.get('/task/:id', (req, res) => {
	Task.findById(req.params.id)
		.then(theTask => res.json(theTask))
		.catch(err => console.log('Error', err))
})

router.get('/my-tasks', (req, res) => {
	console.log(req.user._id)
	Task.find({creator: req.user._id})
		.then(allTasks => {res.json(allTasks)})
		.catch(err => console.log('Error', err))
})

router.post('/postTask', (req, res) => {
	console.log(req.body)
	Task.create(req.body)
		.then(theNewTask => res.json(theNewTask))
		.catch(err => console.log('Error', err))
})

router.get('/how-it-works', (req, res) => {})

module.exports = router
