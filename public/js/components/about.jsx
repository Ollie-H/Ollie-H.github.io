/* Create app controller className */
var React = require('react');
var About = React.createClass({

    componentDidMount: function(){
        console.log('about componentDidMount', this.props);
    },

	render: function() {

		return (
            <section>
                <div className="container">

                    <h3 className="header--title">
                        <span className="header--title__text">
                            About Me
                        </span>
                    </h3>

                    <div className="grid">

                        <div className="grid__item">

                        	{
								this.props.info.bio.split('\n').map(function(content){
									return <p>{content}</p>
								}, this)	
							}

                        </div>

                        <div className="grid__item">

                            <h4>Skills include:</h4>

                            <ul>
                                {
									this.props.info.skills.map(function(skill){
										return <li>{skill}</li>
									}, this)	
								}

                            </ul>
                            
                        </div>
                        
                    </div>

                </div>
            </section>
		); 
	}

});

module.exports = About;