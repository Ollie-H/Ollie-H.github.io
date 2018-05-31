import React from "react";

var Experience = props => (
  <section className="experience">
    <div className="container">
      <h3 className="header--title">
        <span className="header--title__text">Experience</span>
      </h3>

      {props.experience.map((job, index) => (
        <div className="experience__item" key={index}>
          <article className="grid ">
            <p>
              Company:{" "}
              <a href={job.url} target="_blank">
                {job.company}
              </a>
              <br />
              Role: {job.role}
              <br />
              Type: {job.type}
            </p>
            <p>
              <date>{job.date}</date>
            </p>

            <img src={job.logo} />
          </article>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
