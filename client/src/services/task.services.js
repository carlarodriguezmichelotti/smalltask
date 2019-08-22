import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    getTasks = () => this.service.get('tasks')
    getMyTasks=() => this.service.get('my-tasks')
    getOneTask = id => this.service.get(`task/${id}`)
    postTask = theNewTask => this.service.post(`postTask`, theNewTask)
  }