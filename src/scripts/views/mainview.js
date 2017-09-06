import React from 'react'
import ReactDOM from 'react-dom'
import ACTIONS from '../actions.js'
import STORE from '../store.js'

class MainView extends React.Component {
	_handleSubmit(eventObj){
		eventObj.preventDefault()
		// console.log(eventObj.target)
		var formEl = eventObj.target
		var monstData = {
			name: formEl.monstName.value,
			size: formEl.sizeList.value,
			type: formEl.typeList.value,
			alignment: formEl.alignList.value,
			abilityScore: {
				Strength: formEl.str.value,
				Dexterity: formEl.dex.value,
				Constitution: formEl.con.value,
				Intelligence: formEl.int.value,
				Wisdom: formEl.wis.value,
				Charisma: formEl.cha.value
			}
		}
		console.log(monstData)
		formEl.reset()
		ACTIONS.addMonster(monstData)
	}

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
					<select name="sizeList">
						<option value='Tiny'>Tiny</option>
						<option value='Small'>Small</option>
						<option value='Medium'>Medium</option>
						<option value='Large'>Large</option>
						<option value='Huge'>Huge</option>
						<option value='Gargantuan'>Gargantuan</option>
					</select>
					<select name='typeList'>
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
					<select name='alignList'>
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
							min='1'
							max='30'
						/>
						<input 
							className='abDex'
							type='number'
							name='dex'
							placeholder='Enter Dex Score'
							min='1'
							max='30'
						/>
						<input 
							className='abCon'
							type='number'
							name='con'
							placeholder='Enter Con Score'
							min='1'
							max='30'
						/>
						<input 
							className='abInt'
							type='number'
							name='int'
							placeholder='Enter Int Score'
							min='1'
							max='30'
						/>
						<input 
							className='abWis'
							type='number'
							name='wis'
							placeholder='Enter Wis Score'
							min='1'
							max='30'
						/>
						<input 
							className='abCha'
							type='number'
							name='cha'
							placeholder='Enter Cha Score'
							min='1'
							max='30'
						/>
					</div>
					<button className="monstSubmit" type="submit">submit</button>
				</form>
			</div>
		)
	}
}

export default MainView