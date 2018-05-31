/* Header component */
import _ from "underscore";
import React from "react";

const displayMedia = asset => {
  if (asset.type === "img") {
    return <img src={asset.url} />;
  }

  return (
    <video
      className="video-js vjs-default-skin"
      controls=""
      autoplay="true"
      preload="auto"
      data-setup="{}"
      poster={"/videos/" + asset.url + "-screenshot.png"}
    >
      <source src={"/videos/" + asset.url + ".mp4"} type="video/mp4;" />
    </video>
  );
};

var Popup = props => {
  if (!props.work) {
    return null;
  }

  return (
    <div className="popup popup--open" style={{ animation: "unset" }}>
      <span className="popup__close" onClick={props.handleClose}>
        <img src="/img/close.png" />
      </span>
      <div style={{ overflow: "auto", maxHeight: "100vh" }}>
        <div className="container">
          <div className="grid popup__inner">
            <div className="grid__item grid__item--5-5">
              <h2 className="title">{props.work.name}</h2>
              <h4 className="desc">{props.work.description}</h4>
              <p
                className="case html"
                dangerouslySetInnerHTML={{ __html: props.work.case_study }}
              />
              <p>
                <a href={props.work.url} target="_blank">
                  {props.work.url}
                </a>
              </p>
            </div>
            <div className="grid__item grid__item--5-5">
              <ul className="rslides">
                {props.work.assets.map((asset, x) => (
                  <li
                    key={x}
                    style={{
                      position: "static",
                      display: "block",
                      paddingBottom: "2rem"
                    }}
                  >
                    {displayMedia(asset)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
