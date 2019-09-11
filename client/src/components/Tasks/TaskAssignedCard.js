import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const TaskAssignedCard = ({ bidderusername, description, budget, _id, status, offerinfo }) => {
	console.log(_id)
	return (
		<div className='col-md-3'>
			<article className='task-card'>
				<p>Posted by: {bidderusername}</p>
				<p>{description}</p>
				<p>TASK PRICE: {budget}</p>

				<Button>{status}</Button>

				<Link to={`/tasks`}>Back</Link>

				<hr />
			</article>
		</div>
	)
}

export default TaskAssignedCard
