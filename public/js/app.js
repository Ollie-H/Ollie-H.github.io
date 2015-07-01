(function(window) {

	/* Include mcfly and set as global obj */
	var Mcfly = require('mcfly');
	window.Mcfly = new Mcfly();

	var React = require('react/addons');
	var Router = require('react-router');

	/* The following are used as pseudo components for router */
	var Route = Router.Route;
	var NotFoundRoute = Router.NotFoundRoute;
	var DefaultRoute = Router.DefaultRoute; 
	var Link = Router.Link;
	var RouteHandler = Router.RouteHandler;
	var Redirect = Router.Redirect;

	/* Include components */
	var App = require('./components/app.jsx');
	var About = require('./components/about.jsx');

	/* Setup routes */
	var routes = (
	    <Route handler={App}>
	        <DefaultRoute handler={About} />
	        <Route name="/react/" handler={About}/>
	    </Route>
	);

	/* Call router.run, pass params into handler so they are available to components */
	Router.run(routes, Router.HistoryLocation, function (Handler, state) {

	   	React.render(<Handler params={state.params} router={this} />, document.body);

	});

})(window);