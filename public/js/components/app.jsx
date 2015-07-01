var _ = require('underscore');
var React = require('react');
var Router = require('react-router');

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

// Include action and store for info about me
var Actions = require('../actions/actions');
var Store = require('../stores/store');

// Include components
var Loading = require('./loading.jsx');

var About = require('./about.jsx');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Portfolio = require('./portfolio.jsx');   
var Experience = require('./experience.jsx');   

var App = React.createClass({

	mixins: [Store.mixin],

	getInitialState: function(){

		// Set initial state
		return {
			'info': null
		}
	},

	componentDidMount: function() {

		// Trigger action to get about data
		Actions.getAbout();

	},

	storeDidChange: function(){

		// This method is called once the store is resolved (has emmited a change event)
		// Set info state as the returned store data
		this.setState({ 'info': Store.getAbout() });

	},

	render: function() {

		if(!this.state.info){
			return <Loading />
		}

		return (
			<div>
				<Header {...this.state} />
				<main>
					<About {...this.props} {...this.state} />
					<Portfolio {...this.props} {...this.state} />
					<Experience {...this.props} {...this.state} />
					<Footer {...this.props} {...this.state} />
				</main>
			</div>
		); 
	}

});

module.exports = App;