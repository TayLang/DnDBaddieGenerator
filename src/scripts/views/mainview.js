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
				<form onSubmit={this._handleSubmit} className='form-group monster-form' >
					<input
						className='monsterName form-control'
						type='text'
						name='monstName'
						placeholder="Enter name of Monster"
						 />
					<select name="sizeList" form="sizeForm">
						<option value='Tiny'>Tiny</option>
						<option value='Small'>Small</option>
						<option value='Medium'>Medium</option>
						<option value='Large'>Large</option>
						<option value='Huge'>Huge</option>
						<option value='Gargantuan'>Gargantuan</option>
					</select>
					<select name='typeList' form='typeForm'>
						<option value='Aberration'>Aberration</option>
						<option value='Beast'>Beast</option>
						<option value='Celestial'>Celestial</option>
						<option value='Construct'>Construct</option>
						<option value='Dragon'>Dragon</option>
						<option value='Elemental'>Elemental</option>
						<option value='Fey'>Fey</option>
						<option value='Fiend'>Fiend</option>
						<option value='Giant'>Giant</option>
						<option value='Humanoid'>Humanoid</option>
						<option value='Monstrosity'>Monstrosity</option>
						<option value='Ooze'>Ooze</option>
						<option value='Plants'>Plant</option>
						<option value='Undead'>Undead</option>
					</select>
					<select name='alignList' form='alignForm'>
						<option value='Lawful Good'>Lawful Good</option>
						<option value='Neutral Good'>Neutral Good</option>
						<option value='Chaotic Good'>Chaotic Good</option>
						<option value='Lawful Neutral'>Lawful Neutral</option>
						<option value='True Neutral'>True Neutral</option>
						<option value='Chaotic Neutral'>Chaotic Neutral</option>
						<option value='Lawful Evil'>Lawful Evil</option>
						<option value='Neutral Evil'>Neutral Evil</option>
						<option value='Chaotic Evil'>Chaotic Evil</option>
						<option value='Unaligned'>Unaligned</option>
					</select>
					<div className='abilityScoreForm'>
						<input 
							className='abStr'
							type='number'
							name='str'
							placeholder='Enter Str Score'
						/>
						<input 
							className='abDex'
							type='number'
							name='dex'
							placeholder='Enter Dex Score'
						/>
						<input 
							className='abCon'
							type='number'
							name='con'
							placeholder='Enter Con Score'
						/>
						<input 
							className='abInt'
							type='number'
							name='int'
							placeholder='Enter Int Score'
						/>
						<input 
							className='abWis'
							type='number'
							name='wis'
							placeholder='Enter Wis Score'
						/>
						<input 
							className='abCha'
							type='number'
							name='cha'
							placeholder='Enter Cha Score'
						/>
					</div>
					<button className="monstSubmit" type="submit">submit</button>
				</form>
			</div>
		)
	}
}

export default MainView