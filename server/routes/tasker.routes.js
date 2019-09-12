const express = require('express')
const router = express.Router()

const Task = require('../models/Task.model')
const User = require('../models/User.model')
const Offer = require('../models/Offer.model')

router.post('/accept-offer', (req, res) => {
	Offer.deleteMany({ $and: [{ taskid: req.body.taskId }, { bidderid: { $ne: req.body.bidderId } }] })
		.then(x => {
			console.log(x, 'devuelve el delete')

			User.findById(req.body.bidderId).then(user => {
				Task.findById(req.body.taskId, 'pepe')
					.update({ status: 'ASSIGNED', assignedto: user.username })
					.then(x => res.status(200))
			})
		})
		.catch(err => {
			console.log('Hubo un error:', err)
		})
})

//Tasks routes
router.get('/tasks', (req, res) => {
	Task.find()
		.populate('creator')
		.then(allTasks => res.json(allTasks))
		.catch(err => console.log('Error', err))
})

router.get('/task/:id', (req, res) => {
	Task.findById(req.params.id)
		.populate('creator')
		.then(theTask => res.json(theTask))
		.catch(err => console.log('Error', err))
})

router.get('/my-tasks', (req, res) => {
	Task.find({ creator: req.user._id })
		.populate('creator')
		.then(allTasks => {
			res.json(allTasks)
		})
		.catch(err => console.log('Error', err))
})

router.get('/assigned-tasks', (req, res) => {
	Task.find({ status: 'ASSIGNED' })
		.populate('creator')
		.then(allTasks => {
			res.json(allTasks)
		})
		.catch(err => console.log('Error', err))
})

router.get('/task-offers/:taskId', (req, res) => {
	console.log(req.params.taskId)
	Offer.find({ $and: [{ taskowner: req.user.username }, { taskid: req.params.taskId }] })
		.then(allOffers => {
			res.json(allOffers)
		})
		.catch(err => console.log('Error', err))
})

router.post('/postTask', (req, res) => {
	console.log(req.body)
	Task.create(req.body)
		.then(theNewTask => res.json(theNewTask))
		.catch(err => console.log('Error', err))
})

//Offers routes
router.get('/offer-details/:id', (req, res) => {
	console.log(req.params.id)
	Offer.findById(req.params.id)
		.populate('bidder')
		.then(theOffer => {
			res.json(theOffer)
		})
		.catch(err => console.log('Error', err))
})

router.post('/postOffer', (req, res) => {
	console.log(req.body)
	const { bidderid, taskid, taskowner, bidderusername, description, budget } = req.body
	Offer.create({ bidderid, taskid, taskowner, bidderusername, description, budget, bidder: bidderid })
		.then(theNewOffer => res.json(theNewOffer))
		.catch(err => console.log('Error', err))
})

router.get('/offers', (req, res) => {
	Offer.find()
		.then(allOffers => res.json(allOffers))
		.catch(err => console.log('Error', err))
})

router.get('/how-it-works', (req, res) => {})

module.exports = router
