/* Create app controller className */
var React = require('react');
var About = React.createClass({

    componentDidMount: function(){
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
                        
                    </div>

                    <h3 className="header--title">
                        <span className="header--title__text">
                            Skills
                        </span>
                    </h3>

                    <div className="grid">
                        <div className="grid__item skills float--none">

                            <ul className="skills__items">
                                {
                                    this.props.info.skills.map(function(skill){
                                        return <li className="skills__item">{skill}</li>
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