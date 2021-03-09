import React from 'react';
import "./App.scss"

import Header from './../header/header';
import Wrap from './../wrap/wrap';
import Footer from './../footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrap />
      <Footer />
    </div>
  );
}

export default App;
