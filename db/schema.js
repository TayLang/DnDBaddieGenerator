const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

 const monsterSchema = new mongoose.Schema({
 		name: { type: String, required: true, unique: true},
 		size: { type: String, enum: ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'], required: true },
 		type: { type: String, enum: ['Aberration', 'Beast', 'Celestial', 'Construct', 'Dragon', 'Elemental', 'Fey', 'Fiend', 'Giant', 'Humanoid', 'Monstrosity', 'Ooze', 'Plants', 'Undead'], required: true },
 		tag: { type: String },
 		alignment: { type: String, enum: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil', 'Unaligned'], required: true },
 		abilityScore: { 
 			Strength : { type: Number, min: 1, max: 30, required: true, default: 10 },
 			Dexterity : { type: Number, min: 1, max: 30, required: true, default: 10},
 			Constitution : { type: Number, min: 1, max: 30, required: true, default: 10},
 			Intelligence : { type: Number, min: 1, max: 30, required: true, default: 10},
 			Wisdom : { type: Number, min: 1, max: 30, required: true, default: 10},
 			Charisma : { type: Number, min: 1, max: 30, required: true, default: 10}
 		},
 		mvmtModes: {
 			canWalk : { type: Boolean, default: true},
 			canRun : { type: Boolean, default: true},
 			canBurrow : { type: Boolean, default: false},
 			canSwim : { type: Boolean, default: true},
 			canClimb : { type: Boolean, default: true},
 			canFly : { type: Boolean, default: false},
 		},
 		skills: {
 			athletics : { type: Number, default: 0},
 			acrobatics : { type: Number, default: 0},
 			sleightOfHand : { type: Number, default: 0},
 			stealth : { type: Number, default: 0},
 			arcana : { type: Number, default: 0},
 			history : { type: Number, default: 0},
 			investigation : { type: Number, default: 0},
 			nature : { type: Number, default: 0},
 			religion : { type: Number, default: 0},
 			animalHandling : { type: Number, default: 0},
 			insight : { type: Number, default: 0},
 			medicine : { type: Number, default: 0},
 			perception : { type: Number, default: 0},
 			survival : { type: Number, default: 0},
 			deception : { type: Number, default: 0},
 			intimidation : { type: Number, default: 0},
 			performance : { type: Number, default: 0},
 			persuasion : { type: Number, default: 0}
 		},
 		damType: {
 			acid : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			bludgeoning : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			cold : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			fire : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			force : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			lightning : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			necrotic : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			piercing : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			poison : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			psychic : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			radiant : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			slashing : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 			thunder : { type: String, enum: ['isVul', 'isRes', 'isImm', 'none'], default: 'none'
 			},
 		},
 		senses : {
 			hasBlindsight: {type: Boolean},
 			hasDarkvision: {type: Boolean},
 			hasTremorsense: {type: Boolean},
 			hasTruesight: {type: Boolean}
 		},
 		languages: {
 			canSpeak: {
 				type: Array, enum: ['abyssal', 'aquan', 'auran', 'celestial', 'common', 'deepSpeech', 'draconic', 'druidic', 'dwarvish', 'elvish', 'giant', 'gnomish', 'goblin', 'gnoll', 'halfling', 'ignan', 'infernal', 'orc', 'primordial', 'sylvan', 'terran', 'undercommon', 'none']
 			},
 			canComprehend: {
 				type: Array, enum: ['abyssal', 'aquan', 'auran', 'celestial', 'common', 'deepSpeech', 'draconic', 'druidic', 'dwarvish', 'elvish', 'giant', 'gnomish', 'goblin', 'gnoll', 'halfling', 'ignan', 'infernal', 'orc', 'primordial', 'sylvan', 'terran', 'undercommon', 'none']
 			},
 			hasTelepathy: {type: Boolean, default: false}
 		},
 		environment: {type: String},
 		challengeRating: {type: Number},
 		reactions: {type: String},
 		attacks: {type: Array},
 		specialAbilities: {type: String},
 		equipment: {type: Array},
 		motivation: {type: String},
 		fears: {type: String},
 		special: {type: String},
 		background: {type: String},
 		createdAt: {type: Date, default: Date.now}
 })

module.exports = {
  User: mongoose.model('User', usersSchema),
  Monster: mongoose.model('Monster', monsterSchema)
}
