/* Header component */
var _ = require('underscore');
var $ = jQuery = require('jquery');
var slider = require('../vendor/responsive.slides');
var React = require('react');
var Popup = React.createClass({

	getInitialState: function(){
		return {
			work : null
		}
	},

	componentDidMount: function(){
		this.setState({'work': this.props.work});
	},

	componentWillReceiveProps: function(new_props){
		this.setState({'work': new_props.work });
	},

	displayMedia: function(asset){

		if(asset.type === "img") {
			return <img src={'/public/'+asset.url} />
		}

		return (
			<video className="video-js vjs-default-skin" controls="" preload="auto" data-setup="{}" poster={'videos/'+asset.url+'-screenshot.png'}>
				<source src={'/public/videos/'+asset.url+'.mp4'} type="video/mp4;" />
			</video>
		)
	},

	componentDidUpdate: function(){

		$(".rslides").responsiveSlides({
			pager : true,
			auto : false
		}); 

	},

	render: function() {


		if(!this.state.work){
			return <div />;
		}

		return (

			<div className="popup popup--open" ref="popup">
				<span className="popup__close" onClick={this._handleClose}>
					<img src="/public/img/close.png" />
				</span>
				<div className="container">
					<div className="grid popup__inner">
						<div className="grid__item grid__item--2-5">
							<h2 className="title">
								{this.state.work.name}
							</h2>
							<h4 className="desc">
								{this.state.work.description}
							</h4>
							<p className="case">
								{_.unescape(this.state.work.case_study)}
								<br />
							</p>
							<p>
								<a href={this.state.url} target="_blank">
									{this.state.url}
								</a>
							</p>
						</div>
						<div className="grid__item grid__item--3-5">
							<ul className="rslides" ref="rslides">
								{
		                    		this.state.work.assets.map(function(asset, x){

		                    			return (
		                    				<li>{this.displayMedia(asset)}</li>
		                    			)

		                    		}, this)

		                    	}
		                    </ul>
		                </div>
					</div>
				</div>
			</div>
		); 
	},

	/* Events */
	_handleClose: function(){

		var close = this.props._handleClose;

		React.findDOMNode(this.refs.popup).className += ' popup--close';

		setTimeout(function(){
			// Call parent function to close 
			close.call();
		}, 400);

	}
});

module.exports = Popup;