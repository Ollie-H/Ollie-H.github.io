/* Header component */

var React = require('react');
var Footer = React.createClass({

	render: function() {

		return (

			<footer role="contentinfo">

				<div className="yuno">
					<iframe width="100%"  src="https://app.yunojuno.com/p/ollie-husband/availability/" scrolling="no" frameborder="0"></iframe>
				</div>

				<div className="container">
					&copy; Ollie Husband Development LTD - 2014 <i><a href="https://github.com/Ollie-H/Responsive-CV" className="a--inverse"></a></i>
				</div>

			</footer>
		); 
	}
});

module.exports = Footer;