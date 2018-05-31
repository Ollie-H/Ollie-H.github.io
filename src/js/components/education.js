import React from "react";

var Education = props => (
  <section>
    <div className="container">
      <h3 className="header--title">
        <span className="header--title__text">Education</span>
      </h3>

      {props.education.map((qual, x) => (
        <article className="grid elem--underline" key={x}>
          <div className="grid__item grid__item--3-3">
            <p>{qual.qualification}</p>
            <p>
              <a href={qual.url} target="_blank">
                {qual.school}
              </a>
            </p>
            <date>{qual.date}</date>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
