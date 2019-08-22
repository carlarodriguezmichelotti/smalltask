import axios from 'axios'

export default class Services {
	constructor() {
		this.service = axios.create({
			baseURL: "https://maps.googleapis.com/maps/api/geocod",
		})
  }
	
	getLocation(address)
			return this.service.get("/json?address=1600+Amphitheatre+Parkway+Mountain+View,+CA&key=AIzaSyDOuDALvzBrOz-Y-iQxy8lPZKvl8yw9ZX4")
			.then(Directions => {
				return Directions.data.geometry.location.lat
			})	
			
			)
}



