import * as React from "react";

import Container, { Sizes } from "@/Components/Container";

export default class Travel extends React.Component {
  render() {
    return (
      <section id="travel">
        <Container size={Sizes.medium}>
          <h1>Travel</h1>
          <h2>By (regional) public transport</h2>
          <p>
            The venue is connected via tram at <tt>Herzogenriedstraße</tt>.
            You can either take Line 1 from the main train station or Line 3 from the city center.
            For all other modes of transport below, you will have to change at Mannheim Hbf (train station) into Line 1 towards Schönau.
          </p>
          &nbsp;
          <p>
            Mannheim is easily reachable by regional trains from Frankfurt, Karlsruhe, Heidelberg and the Palatine region.
            It is at the center of the S-Bahn RheinNeckar suburban train network and also connected to its surrounding larger cities via a well-serve RE (express regional train) network.
            For more information on the available regional trains, you can consult <a href="https://www.vrn.de/liniennetz/Wabenplan/index.html">the map of the local transport body VRN</a>.
          </p>
          &nbsp;
          <h2>By Train</h2>
          <p>
            Mannheim is one of the hubs in Germany for long-range high-speed rail travel.
            Thus there are several, mostly hourly served, connections in less than 3h to Paris, Cologne, Hannover, Basel or Munich.
            With a bit more than 3h of travel, you can still reach Mannheim without interchange from Marseille, Berlin, Hamburg, Amsterdam, Zürich or Milano.
          </p>
          &nbsp;
          <p>
            In addition to day-time high-speed trains, you can also reach Mannheim with the <a href="https://www.nightjet.com/">ÖBB Nightjet</a> sleeper train from Berlin and Hamburg.
          </p>
          &nbsp;
          <h2>By Plane</h2>
          <p>
            If other modes are not possible for you, you can also reach Mannheim by plane.
            Although Mannheim has its own small airport, you are better served by Frankfurt/Main Airport which is only a 30min train ride away.
            As Europe's 4th largest airport, it has a vast amount of connections to all parts of the world.
          </p>
        </Container>
      </section>
    );
  }
}

