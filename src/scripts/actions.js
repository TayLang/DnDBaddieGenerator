import STORE from './store.js'
import {MonsterModel} from './models/monsterModels.js'
import User from './models/userModel.js'

const ACTIONS = {
	addMonster: function(monstData) {
		var newMonst = new MonsterModel(monstData)
		newMonst.save()
			.then(
				function(res) {
					alert('Your monster is successfully saved! Go make another, champ!')
					//ACTIONS.fetchMonsters()
					location.hash = 'welcome'
				},
				function(err) {
					alert('Something went wrong and your monster wasn\'t saved!')
					console.log(err)
				}
			)
	}
}

export default ACTIONS