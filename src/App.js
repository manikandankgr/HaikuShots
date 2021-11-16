import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Navigation, Footer, Home, About, Contact } from "./components/_index";
import './App.css';
import Navbar from './components/Navbar';
import Home1 from '../src/components/Home'
import About1 from '../src/components/About';
import Contact1 from '../src/components/Contact';

// import ImageSlider from './components/ImageSlider';
// import { SliderData } from './components/SliderData';




function App() {
  return (
    <div className="App">

{/* <ImageSlider slides={SliderData} />; */}


      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home1 />} />
          <Route path="/about" exact component={() => <About1 />} />
          <Route path="/contact1" exact component={() => <Contact1 />} />
        </Switch>
        {/* <ImageSlider slides={SliderData} />; */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;

