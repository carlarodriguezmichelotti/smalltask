const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OfferSchema = new Schema(
	{
		taskid: { type: String, required: true },
		taskowner: { type: String, required: true },
		bidder: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		bidderid: { type: String, required: true },
		bidderusername: { type: String, required: true },
		description: { type: String, required: true },
		budget: { type: Number, required: true }
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
)

const Offer = mongoose.model('Offer', OfferSchema)
module.exports = Offer
