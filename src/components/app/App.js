import React from 'react';

import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import "./App.scss"

import Home from './../home/home';
import Country from './../country/country';
import Footer from './../footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/travel-app" component={Home}/>
        <Route path="/country"component={Country}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
