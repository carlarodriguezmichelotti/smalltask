import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import '../App.css'

const Home = ({ userInSession }) => {
	if ({ userInSession }) {
		console.log({ userInSession })
		return (
			<>
				<div className='profileHeader'>
					<h2 className='profileQuote'>
						Find the people with the skills <br></br> you need on SmallTask
					</h2>
					<Button className='homeMainButton'>
						<Link className='homeMainLink' to='/signup'>
							Get started
						</Link>
					</Button>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div className='profileHeader'>
					<h2 className='headerOffline'>
						Find the people with the skills <br></br> you need on SmallTask
					</h2>
					<Button className='homeMainButton'>
						<Link className='homeMainLink' to='/signup'>
							Get started
						</Link>
					</Button>
				</div>
			</>
		)
	}
}
export default Home
