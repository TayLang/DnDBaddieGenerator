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
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				<button className="goToMain" onClick={function() {location.hash = 'main'}}>Let's Get Started!</button>
			</div>

		)
	}
}

export default WelcomeView