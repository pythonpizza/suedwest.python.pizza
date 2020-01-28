import * as React from "react";

import "./index.css";

import Hero from "@/Components/Hero";

import About from "./Sections/About";
import Schedule from "./Sections/Schedule";
import Sponsors from "./Sections/Sponsors";
import Speakers from "./Sections/Speakers";
import Travel from "./Sections/Travel";
import Coc from "./Sections/Coc";
import Imprint from "./Sections/Imprint";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Travel />
        <Sponsors />
        <Coc />
        <Imprint />
      </div>
    );
  }
}
// <Schedule />
