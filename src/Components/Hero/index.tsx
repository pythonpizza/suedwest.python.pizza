import * as React from "react";

import Wave from "@/Components/Wave";

import "./index.css";

// Background image from https://unsplash.com/photos/zAp-NoDJwFs

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero--info">
          <h1>Python Pizza</h1>
          <h2>
            <a target="_blank" rel="noopener noreferrer">
              Südwest @ bitExpert (Mannheim)
            </a>
          </h2>
          <h2>Postponed to autumn due to the heath crisis.</h2>
          <h2>Sign up <a href="https://ti.to/pythonpizza/pypizza-sudwest" target="_blank"></a>here for updates.</h2>
        </div>

        <Wave />
      </div>
    );
  }
}
