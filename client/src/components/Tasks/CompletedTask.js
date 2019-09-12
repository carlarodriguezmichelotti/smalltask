import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const CompletedTask = () => {
	return (
		<>
			<Container>
				<Row>
					<h4 className='allFontFamily'>Your completed tasks</h4>
				</Row>

				<Row-text-center>
					<h4 className='allFontFamily centeralign'>
						Looks like you haven’t completed a task yet!<br></br>
					</h4>
				</Row-text-center>
			</Container>
			<br></br>
		</>
	)
}

export default CompletedTask
