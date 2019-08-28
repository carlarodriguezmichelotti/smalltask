import axios from 'axios'

export default class Services {
	constructor() {
		this.service = axios.create({
			// baseURL: 'http://localhost:5000/api/'
			baseURL: `${process.env.REACT_APP_URL}`,
			withCredentials: true
		})
	}

	getTasks = () => this.service.get('tasks')
	getMyTasks = () => this.service.get('my-tasks')
	getOneTask = id => this.service.get(`task/${id}`)
	getAssignedTasks = () => this.service.get('assigned-tasks')
	postTask = theNewTask => this.service.post(`postTask`, theNewTask)
	postOffer = theNewOffer => this.service.post(`postOffer`, theNewOffer)
	getOffers = () => this.service.get('task-offers')
	deleteOffer = (taskId, bidderId) => this.service.post(`accept-offer`, { taskId, bidderId })
	getOneOffer = id => this.service.get(`offer-details/${id}`)
}
