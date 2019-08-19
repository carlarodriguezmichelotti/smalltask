const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		budget: { type: Number, required: true }
	},
	{ timestamps: true }
)

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task
