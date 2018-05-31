import React from "react";
import ReactDOM from "react-dom";
import Header from "./js/components/header";
import Footer from "./js/components/footer";
import Portfolio from "./js/components/portfolio";
import data from "./js/data";

const App = () => (
  <div className={"fade-in app"}>
    <Header {...data} />
    <main>
      <Portfolio {...data} />
    </main>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
