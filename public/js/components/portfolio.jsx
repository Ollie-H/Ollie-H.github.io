/* Header component */

var _ = require('underscore');
var Popup = require('./popup.jsx');

var React = require('react');
var Portfolio = React.createClass({

	getInitialState: function(){

		var work = [];
		work.push(this.props.info.work.slice(0, 4));
		work.push(this.props.info.work.slice(4,-1));

		return { 
			work: work,
			popup: null
		}
	},

	componentDidMount: function(){
		console.log('props', this.props);
	},

	render: function() {

		return (

            <section className="work">

                <div className="container">

                    <h3 className="header--title">
                        <span className="header--title__text">
                            Recent Work
                        </span>
                    </h3>

                    <article className="grid work">

                    	{
                    		this.state.work.map(function(work, x){

								return (

									work.map(function(content){
										return (
											<div className={'grid__item grid__item--1-'+ (x+2) +' work__item'} data-workid={content.id} onClick={this._handleClick}>
					                            <div className="work__inner">
					                                <img src={content.thumb} />
					                                <div className="hover">
					                                    <span>{content.name}</span>
					                                </div>
					                            </div>
					                        </div>
					                    )
									}, this)

								)

							}, this)
						}

                    </article>

                </div>

                <Popup _handleClose={this._handleClose} work={this.state.popup}  />

            </section>

		); 
	},

	/* Events */

	_handleClose: function(e){

		// Remove popup data so it closes
		this.setState({'popup': null });

	},

	_handleClick: function(e){

		var work_id = e.currentTarget.getAttribute('data-workid');
		var work = _.findWhere(this.props.info.work, {id: work_id});

		this.setState({'popup': work});

	}
});

module.exports = Portfolio;