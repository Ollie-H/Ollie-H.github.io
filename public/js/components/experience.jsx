/* Header component */

var _ = require('underscore');
var Popup = require('./popup.jsx');

var React = require('react');
var Experience = React.createClass({

	render: function() {

		return (

            <section className="experience">

                <div className="container">

                    <h3 className="header--title">
                        <span className="header--title__text">
                            Experience
                        </span>
                    </h3>

                    {
                		this.props.info.experience.map(function(job, x){

                			return (

            					<div className="experience__item">
	            					<article className="grid ">

			                            <p>
                                            Company: <a href={job.url} target="_blank">{job.company}</a>
                                            <br />
                                            Role: {job.role}
                                            <br />
                                            Type: {job.type}
                                        </p>
			                            <p><date>{job.date}</date></p>

                                        <img src={job.logo} />

				                    </article>

	                   			</div>
                   			)

                   		}, this)
                   	}
                    
                </div>

            </section>

		); 
	}

});

module.exports = Experience;