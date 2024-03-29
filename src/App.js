import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga4";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    if (!ReactGA._hasLoadedGA) {
      ReactGA.initialize("G-QLL0ZP5SJB");
    } else {
      ReactGA.event({
        category: "PAGE_VIEW",
        action: "NEW_PAGE_LOADED",
        value: window.location.pathname,
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <HashRouter>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </Router>
  );
}

export default App;
