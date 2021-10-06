import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NavBar from "./components/NavBar.js";
//these imports help us create a single page application instead of reloading it every time we open different page of our website.

import About from "./pages/About.js";
import Links from "./pages/Links.js";
const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Links />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

//npm install @iconify/icons-simple-icons @iconify/react       ......to include social media icons in app
//npm install bootstrap node-sass                                          ......so that we have to use less CSS
//npm install react-router-dom                                             ......to create single page applications
