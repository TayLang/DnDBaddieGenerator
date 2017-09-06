import Backbone from 'backbone'

export const MonsterModel = Backbone.Model.extend({
	urlRoot: '/api/monsters',
	idAttribute: '_id'
})

export const MonsterCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	model: MonsterModel,
	url: '/api/monsters'
})