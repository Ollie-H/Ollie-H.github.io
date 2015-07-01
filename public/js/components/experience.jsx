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

            					<div>
	            					<article className="grid ">

				                        <div className="grid__item grid__item--3-3">

				                            <p>{job.company} - {job.role} - {job.type}</p>
				                            <p><a href={job.url} target="_blank">{job.url}</a></p>
				                            <date>{job.date}</date>

				                        </div>

				                    </article>

	                   				<hr />
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