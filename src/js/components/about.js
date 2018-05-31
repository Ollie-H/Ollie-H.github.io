/* Create app controller className */
import React from "react";
import _ from "underscore";

var About = props => (
  <section>
    <div className="container">
      <h3 className="header--title">
        <span className="header--title__text">About Me</span>
      </h3>

      <div className="grid">
        <div className="grid__item">
          {props.bio
            .split("\n")
            .map((content, index) => (
              <p
                key={index}
                className="case"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
        </div>
      </div>

      <h3 className="header--title">
        <span className="header--title__text">Skills</span>
      </h3>

      <div className="grid">
        <div className="grid__item skills float--none">
          <ul className="skills__items">
            {props.skills.map((skill, index) => (
              <li className="skills__item" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
