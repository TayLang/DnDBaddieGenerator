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
			},
			skills: {
				athletics: formEl.ath.value,
				acrobatics: formEl.acr.value,
				sleightOfHand: formEl.soh.value,
				stealth: formEl.ste.value,
				arcana: formEl.arc.value,
				history: formEl.his.value,
				investigation: formEl.inv.value,
				nature: formEl.nat.value,
				religion: formEl.rel.value,
				animalHandling: formEl.rel.value,
				insight: formEl.ins.value,
				medicine: formEl.med.value,
				perception: formEl.perc.value,
				survival: formEl.sur.value,
				deception: formEl.dec.value,
				intimidation: formEl.intim.value,
				performance: formEl.perf.value,
				persuasion: formEl.pers.value
			},
			mvmtModes: {
				canWalk: formEl.walk.value,
				canRun: formEl.run.value,
				canBurrow: formEl.burrow.value,
				canSwim: formEl.swim.value,
				canClimb: formEl.climb.value,
				canFly: formEl.fly.value
			},
			damType: {
				acid: formEl.aciDam.value,
				bludgeoning: formEl.bluDam.value,
				cold: formEl.colDam.value,
				fire: formEl.firDam.value,
				force: formEl.firDam.value,
				lightning: formEl.ligDam.value,
				necrotic: formEl.necDam.value,
				piercing: formEl.pieDam.value,
				poison: formEl.poiDam.value,
				psychic: formEl.psyDam.value,
				radiant: formEl.radDam.value,
				slashing: formEl.slaDam.value,
				thunder: formEl.thuDam.value
			},
			senses: {
				hasBlindsight: formEl.bSight.value,
				hasDarkvision: formEl.dVision.value,
				hasTremorsense: formEl.tSense.value,
				hasTruesight: formEl.tSight.value
			},
			environment: formEl.envInput.value,
			challengeRating: formEl.cRate.value
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
					<select name="sizeList" defaultValue='Gargantuan'>
						<option value='Tiny'>Tiny</option>
						<option value='Small'>Small</option>
						<option value='Medium'>Medium</option>
						<option value='Large'>Large</option>
						<option value='Huge'>Huge</option>
						<option value='Gargantuan'>Gargantuan</option>
					</select>
					<select name='typeList' defaultValue='Construct'>
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
					<select name='alignList' defaultValue='Neutral Evil'>
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
						<p>Ability Scores</p>
						<input 
							className='abStr'
							type='number'
							name='str'
							placeholder='Enter Strength Score'
							min='1'
							max='30'
						/>
						<input 
							className='abDex'
							type='number'
							name='dex'
							placeholder='Enter Dexterity Score'
							min='1'
							max='30'
						/>
						<input 
							className='abCon'
							type='number'
							name='con'
							placeholder='Enter Constitution Score'
							min='1'
							max='30'
						/>
						<input 
							className='abInt'
							type='number'
							name='int'
							placeholder='Enter Intelligence Score'
							min='1'
							max='30'
						/>
						<input 
							className='abWis'
							type='number'
							name='wis'
							placeholder='Enter Wisdom Score'
							min='1'
							max='30'
						/>
						<input 
							className='abCha'
							type='number'
							name='cha'
							placeholder='Enter Charisma Score'
							min='1'
							max='30'
						/>
					</div>
					<div className='skillScoreForm'>
						<p>Skill Scores</p>
						<input
							className='skAth'
							type='number'
							name='ath'
							placeholder='Enter Athletics Score'
							min='0'
							max='15'
						/>
						<input
							className='skAcr'
							type='number'
							name='acr'
							placeholder='Enter Acrobatics Score'
							min='0'
							max='15'
						/>
						<input
							className='skSoH'
							type='number'
							name='soh'
							placeholder='Enter Sleight of Hand Score'
							min='0'
							max='15'
						/>
						<input
							className='skSte'
							type='number'
							name='ste'
							placeholder='Enter Stealth Score'
							min='0'
							max='15'
						/>
						<input
							className='skArc'
							type='number'
							name='arc'
							placeholder='Enter Arcana Score'
							min='0'
							max='15'
						/>
						<input
							className='skHis'
							type='number'
							name='his'
							placeholder='Enter History Score'
							min='0'
							max='15'
						/>
						<input
							className='skInv'
							type='number'
							name='inv'
							placeholder='Enter Investigation Score'
							min='0'
							max='15'
						/>
						<input
							className='skNat'
							type='number'
							name='nat'
							placeholder='Enter Nature Score'
							min='0'
							max='15'
						/>
						<input
							className='skRel'
							type='number'
							name='rel'
							placeholder='Enter Religion Score'
							min='0'
							max='15'
						/>
						<input
							className='skAni'
							type='number'
							name='ani'
							placeholder='Enter Animal Handling Score'
							min='0'
							max='15'
						/>
						<input
							className='skIns'
							type='number'
							name='ins'
							placeholder='Enter Insight Score'
							min='0'
							max='15'
						/>
						<input
							className='skMed'
							type='number'
							name='med'
							placeholder='Enter Medicine Score'
							min='0'
							max='15'
						/>
						<input
							className='skPerc'
							type='number'
							name='perc'
							placeholder='Enter Perception Score'
							min='0'
							max='15'
						/>
						<input
							className='skSur'
							type='number'
							name='sur'
							placeholder='Enter Survival Score'
							min='0'
							max='15'
						/>
						<input
							className='skDec'
							type='number'
							name='dec'
							placeholder='Enter Deception Score'
							min='0'
							max='15'
						/>
						<input
							className='skInt'
							type='number'
							name='intim'
							placeholder='Enter Intimidation Score'
							min='0'
							max='15'
						/>
						<input
							className='skPerf'
							type='number'
							name='perf'
							placeholder='Enter Performance Score'
							min='0'
							max='15'
						/>
						<input
							className='skPers'
							type='number'
							name='pers'
							placeholder='Enter Persuasion Score'
							min='0'
							max='15'
						/>

					</div>
					<div className="mvmtForm">
						<p>Movement Options</p>
						<select name='walk'>
							<option value='true'>Can Walk</option>
							<option value='false'>Cannot Walk</option>
						</select>
						<select name='run'>
							<option value='true'>Can Run</option>
							<option value='false'>Cannot Run</option>
						</select>
						<select name='burrow' defaultValue='false'>
							<option value='true'>Can Burrow</option>
							<option value='false'>Cannot Burrow</option>
						</select>
						<select name='swim'>
							<option value='true'>Can Swim</option>
							<option value='false'>Cannot Swim</option>
						</select>
						<select name='climb'>
							<option value='true'>Can Climb</option>
							<option value='false'>Cannot Climb</option>
						</select>
						<select name='fly' defaultValue='false'>
							<option value='true'>Can Fly</option>
							<option value='false'>Cannot Fly</option>
						</select>
					</div>
					<div className="damForm">
						<p>Damage Types-Vulnerable, Resistant, or Immune to:</p>
						<select name='aciDam'>
							<option value='none'>Acid</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='bluDam'>
							<option value='none'>Bludgeoning</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='colDam'>
							<option value='none'>Cold</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='firDam'>
							<option value='none'>Fire</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='forDam'>
							<option value='none'>Force</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='ligDam'>
							<option value='none'>Lightning</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='necDam'>
							<option value='none'>Necrotic</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='pieDam'>
							<option value='none'>Piercing</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='poiDam'>
							<option value='none'>Poison</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='psyDam'>
							<option value='none'>Psychic</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='radDam'>
							<option value='none'>Radiant</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='slaDam'>
							<option value='none'>Slashing</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
						<select name='thuDam'>
							<option value='none'>Thunder</option>
							<option value='isVul'>Vulnerable to</option>
							<option value='isRes'>Resistant to</option>
							<option value='isImm'>Immune to</option>
							<option value='none'>Regular damage</option>
						</select>
					</div>
					<div className="senseForm">
						<p>Senses</p>
						<select name='bSight'>
							<option value='false'>Blindsight</option>
							<option value='true'>Has</option>
							<option value='false'>Does not Have</option>
						</select>
						<select name='dVision'>
							<option value='false'>Darkvision</option>
							<option value='true'>Has</option>
							<option value='false'>Does not Have</option>
						</select>
						<select name='tSense'>
							<option value='false'>Tremorsense</option>
							<option value='true'>Has</option>
							<option value='false'>Does not Have</option>
						</select>
						<select name='tSight'>
							<option value='false'>Truesight</option>
							<option value='true'>Has</option>
							<option value='false'>Does not Have</option>
						</select>
					</div>
					<div className='envForm'>
						<p>Native Environment</p>
						<input
						className='environmentInput'
						type='text'
						name='envInput'
						placeholder="Desert, Forest, etc."
						 />
					</div>
					<div className='crForm'>
						<p>Challenge Rating</p>
						<input
							className='cRating'
							type='number'
							name='cRate'
							placeholder='Whole numbers or Decimals only'
							min='0'
							max='30'
							step='any'
						/>
					</div>
					<button className="monstSubmit" type="submit">submit</button>
				</form>
			</div>
		)
	}
}

export default MainView