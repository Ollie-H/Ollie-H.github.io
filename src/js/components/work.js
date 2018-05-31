/* Header component */

import _ from "underscore";
import Popup from "./popup";
import React from "react";

const sliceWork = work => [work.slice(0, 4), work.slice(4)];

class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      work: null
    };
  }

  render() {
    return (
      <section className="work">
        <div className="container">
          <h3 className="header--title">
            <span className="header--title__text">Recent Work</span>
          </h3>

          <article className={"grid work grid--items-6"}>
            {sliceWork(this.props.work).map((work, index) =>
              work.map((content, workIndex) => (
                <div
                  key={workIndex}
                  className={
                    "grid__item grid__item--1-" + (index + 2) + " work__item"
                  }
                  onClick={_ => {
                    this.setState({ work: content });
                  }}
                >
                  <div className="work__inner">
                    <img src={content.thumb} />
                    <div className="hover">
                      <span>{content.name}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </article>
        </div>

        <Popup
          handleClose={_ => this.setState({ work: null })}
          work={this.state.work}
        />
      </section>
    );
  }
}

export default Work;
