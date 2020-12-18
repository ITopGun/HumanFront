import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/common/nav";
import Footer from "./components/common/footer";
import Landing from "./components/landing";
import LandingSecond from "./components/landingsecond";
import AboutWeb from "./components/aboutweb";
import Contact from "./components/contact";
import Knowledge from "./components/knowledge";
import Knowledge2 from "./components/knowledge2";
import Knowledge3 from "./components/knowledge3";
import Knowledge4 from "./components/knowledge4";
import Knowledge5 from "./components/knowledge5";
import TermsAndConditions from "./components/terms";
import Media from "./components/terms";
import BlogDetails from './components/BlogDetails'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Nav />
          <LandingSecond />
        </Route>
        <Route exact path="/blog">
          <Nav />
          <Landing />
        </Route>
        <Route exact path="/about">
          <AboutWeb />
        </Route>
        <Route exact path="/contact">
          <Nav />
          <Contact />
        </Route>
        <Route exact path="/self-knowledge">
          <Nav />
          <Knowledge />
        </Route>
        <Route exact path="/self-knowledge2">
          <Nav />
          <Knowledge2 />
        </Route>
        <Route exact path="/self-knowledge3">
          <Nav />
          <Knowledge3 />
        </Route>
        <Route exact path="/self-knowledge4">
          <Nav />
          <Knowledge4 />
        </Route>
        <Route exact path="/self-knowledge5">
            <Nav />
            <Knowledge5 />
        </Route>
        <Route exact path="/terms">
          <Nav />
          <TermsAndConditions />
        </Route>
        <Route exact path="/terms">
        <Nav />
          <Media />
        </Route>
        <Route path="/blog-details/:id" component={BlogDetails}>
         
          {/* <Nav /> */}
          {/* <BlogDetail s></BlogDetails> */}
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
