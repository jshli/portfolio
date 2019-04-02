import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact' 
import Nav from './Nav'
import Footer from "./Blocks/Footer/Index"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav /> 
        <Switch>
          <Route exact path= "/" render = {() => <Home />}/>
          <Route exact path="/about" render = {() => <About />} />
          <Route exact path="/work" render = {() => <Work />} />
          <Route exact path="/contact" render = {() => <Contact />} />
        </Switch>
        <Footer>
          <Footer.Text>Built with <i class="fas fa-mug-hot"></i> and <i class="fab fa-react"></i></Footer.Text>
          <Footer.Icons>
            <Footer.Link href="https://github.com/jshli/"><i class="fab fa-github"></i></Footer.Link>
            <Footer.Link href="https://www.linkedin.com/in/jshli/"><i class="fab fa-linkedin-in"></i></Footer.Link>
          </Footer.Icons>
        </Footer>
      </div>
    );
  }
}

export default App;
