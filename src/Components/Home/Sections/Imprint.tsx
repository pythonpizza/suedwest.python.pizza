import * as React from "react";

import Container, { Sizes } from "@/Components/Container";

export default class Imprint extends React.Component {
  render() {
    return (
      <section id="imprint">
        <Container size={Sizes.medium}>
          <h1>Imprint</h1>
          <p>
            Python Software Verband e.V.<br />
            Leipziger Straße 70<br />
            D-06108 Halle (Saale)
        </p>
        &nbsp;
        <p>
            E-Mail: info@python-verband.org<br />
            Telefon +49 340 122 98 89 9
        </p>
        &nbsp;
        <p>
            USt-ID: DE287430795
        </p>
        &nbsp;
        <p>
            Vereinsregister: Amtsgericht Stendal<br />
            Vereinssitz:<br />
            Halle (Saale)<br />
            Deutschland<br />
            Registernummer: VR 33442<br />
        </p>
        </Container>
      </section>
    );
  }
}

