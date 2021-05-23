import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import { useState, useEffect } from 'react';
import Cv from './components/Cv'; 
import Contact from './components/Contact';
import Home from './components/Home';

const App = () => {
  const [color, setColor] = useState("blue");

  const changeColor = (navColor) => {
    if(navColor) setColor(navColor);


  }
  const changeColor2 = () => {
    debugger
  }
  return (
    <Router>
      <Switch>
        <div className="b-app">
          <NavBar color={changeColor} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/cv" component={Cv}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
