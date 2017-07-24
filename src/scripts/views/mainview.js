import React from 'react'
import ReactDOM from 'react-dom'
// import ACTIONS from '../ACTIONS.js'
// import STORE from '../STORE.js'

class MainView extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className = 'main'>
				<h1>D&D 5e Baddie Generator</h1>
				<p>The Form will go here. It will be separated by various categories and will need to have * to delineate required or not.</p>
				<p>Don't forget a link to e-mail me with ideas</p>
			</div>
		)
	}
}

export default MainView