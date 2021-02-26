import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.scss'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Success from './components/pages/Success';


function App() {
  return (
    <>
    <Router>
      <div className="app-container">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/success' component={Success} />
      </Switch>
      <Footer/>
      </div>
    </Router>
      
    </>
  );
}

export default App;
