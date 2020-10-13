import React from "react";
import Info from "./client/component/Info/info";
import Discount from "./client/component/Discount/discount";
import Experience from "./client/component/Experience/experience";
import ADR from "./client/component/ADR/ADR";
import CAS from "./client/component/CAS/CAS";
import PDP from "./client/component/PDP/PDP";
import ER from "./client/component/ER/ER";
import Form from "./client/component/Form/form";

import Footer from "./client/component/Footer/footer";
class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <Info />
        <Discount />
        <Experience />
        <CAS />

        <PDP />

        <ER />

        <ADR />
        <br />
        <Form />
        <Footer />
      </div>
    );
  }
}
export default Home;
