import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from "./components/Navbar";
import FooterComp from "./components/FooterComp";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <Navigationbar />
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/portfolio" component={Results} /> */}
          <Route exact path="/contact" component={Contact} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
      <FooterComp />
    </Router>
  );
}

export default App;
