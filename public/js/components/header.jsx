/* Header component */

var React = require('react');
var Header = React.createClass({

	render: function() {

		return (

			<header role="banner" className='banner'>

				<div className="container">

					<h1 className="white text--center flush--bottom elem--block">
						{this.props.info.name}
					</h1>

					<h2 className="text--center flush--top">
						{this.props.info.job_title} 
					</h2>

					<h3 className="text--center">
						Curriculum Vitae
					</h3>

					<div className="contact">
						<span>T: <a href={'tel:'+this.props.info.mobile} target="_blank" className="a--inverse">{this.props.info.mobile}</a></span>
						<span>E: <a href={'mailto:'+this.props.info.email} target="_blank" className="a--inverse">{this.props.info.email}</a></span>
						<span>G: <a href={this.props.info.github} target="_blank" className="a--inverse">{this.props.info.github}</a></span>
						<span>W: <a href={this.props.info.website} target="_blank" className="a--inverse">{this.props.info.website}</a></span>
					</div>

				</div>

			</header>
		); 
	}
});

module.exports = Header;