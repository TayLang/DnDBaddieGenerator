import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import WelcomeView from './views/welcome.js'
import MainView from './views/mainview.js'


const app = function() {
	var MonstRouter = Backbone.Router.extend({
		routes: {
			"welcome" : "handleWelcome",
			"main" : "handleMain",
			"list" : "handleList",
			"*splat" : "redirect"
		},

		handleWelcome: function(){
			ReactDOM.render(<WelcomeView />, document.querySelector('.container'))
		},

		handleMain: function(){
			ReactDOM.render(<MainView />, document.querySelector('.container'))
		},

		handleList: function(){
			ReactDOM.render(<ListView />, document.querySelector('.container'))
		},

		redirect: function(){
			location.hash = "welcome"
		}
	})
	new MonstRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..