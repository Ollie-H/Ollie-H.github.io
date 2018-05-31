/* Header component */

import React from "react";

const Header = props => (
  <header role="banner" className="banner" style={{ background: "#95a5a6" }}>
    <div className="container">
      <h1 className="white text--center flush--bottom elem--block">
        {props.name}
      </h1>

      {/* <h2 className="text--center flush--top">
        {props.route.path.indexOf("blog") > -1
          ? "BLOG"
          : props.job_title}
      </h2> */}

      <div className="contact">
        <span>
          CV: <a href="/docs/cv.pdf">PDF</a> | <a href="/docs/cv.docx">DOC</a>
        </span>
        <br />
        <span>
          T:{" "}
          <a
            href={"tel:" + props.mobile}
            target="_blank"
            className="a--inverse"
          >
            {props.mobile}
          </a>
        </span>
        <span>
          E:{" "}
          <a
            href={"mailto:" + props.email}
            target="_blank"
            className="a--inverse"
          >
            {props.email}
          </a>
        </span>
        <br />
        <span>
          G:{" "}
          <a href={props.github} target="_blank" className="a--inverse">
            {props.github}
          </a>
        </span>
        <span>
          W:{" "}
          <a href={props.website} target="_blank" className="a--inverse">
            {props.website}
          </a>
        </span>
        <br />
        <span>
          SO:{" "}
          <a href={props.so} target="_blank" className="a--inverse">
            {props.so}
          </a>
        </span>
      </div>
    </div>

    {/* <a
      href="#"
      onClick={this.handleNavToggle}
      title="Menu toggle"
      className="menu-toggle"
      dangerouslySetInnerHTML={{ __html: this.svg }}
    />

    <nav className="navigation">
      <Link to="/">HOME</Link>
      <Link to="blog">BLOG</Link>
      <a href="/docs/cv.pdf">CV</a>
    </nav> */}
  </header>
);

export default Header;
