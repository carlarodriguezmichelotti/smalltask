const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema(
	{
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		title: { type: String, required: true },
		description: { type: String, required: true },
		budget: { type: Number, required: true },
		offers: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Offer'
			}
		],
		status: { type: String, enum: ['OPEN', 'ASSIGNED', 'COMPLETED'] },
		date: { type: Date, required: true },
		place: {
			latitude: { type: Number, require: true },
			longitude: { type: Number, require: true },
			address: { type: String, require: true }
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
)

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task
