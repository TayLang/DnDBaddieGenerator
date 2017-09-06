import React from 'react'
import ReactDOM from 'react-dom'

class WelcomeView extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className = 'welcome'>
				<h1>D&D 5e Baddie Generator</h1>
				<p>Welcome to the Baddie Generator! The idea behind this site is to allow DMs to have a personal repository of custom-created bad guys, in case they've exhausted the available pre-made monsters in the books. As implied above, this is for 5th Edition, and as such, 4th and earlier editions may not be totally compatible with this generator. At the moment, the application is still in pre-alpha phase, and I'm trying to phase in features one at a time. I have many, many great plans for this application, and I hope to roll them all out as soon as possible. Thanks so much for stopping by! -Taylor Lang, Developer</p>
				<button className="goToMain" onClick={function() {location.hash = 'main'}}>Let's Get Started!</button>
			</div>

		)
	}
}

export default WelcomeView