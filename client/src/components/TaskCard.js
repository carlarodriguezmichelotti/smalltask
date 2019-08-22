import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'


const TaskCard = ({ title, description, budget, _id }) => {

    return (
        <div className="col-md-3">
            <article className="task-card">
                <h4>{title}</h4>
								<p>{description}</p>
								<p>{budget}</p> 
              
                <Link to={`/task/${_id}`}>
                    <Button variant="dark" size="sm" block>Ver detalles</Button>
                </Link>
                <hr></hr>
            </article>
        </div >
    )
}

export default TaskCard