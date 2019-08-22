const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OfferSchema = new Schema(
	{
		bidder: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
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
