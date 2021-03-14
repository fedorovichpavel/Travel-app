import React, { Component } from 'react';

// import {
//   Route,
//   Switch,
//   Redirect,
//   withRouter
// } from "react-router-dom";

import "./App.scss"

import Header from './../header/header';
// import Wrap from './../wrap/wrap';
import Home from './../home/home';
import Country from './../country/country';
import Footer from './../footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

// class App extends Component {
//   render() {
//     const { history } = this.props;
//     return (
//       <div className="App">
//         <Header />
//           <Switch>
//             <Route history={history} path='/home' component={Home} />
//             <Redirect from='/' to='/home' />
//           </Switch>
//         <Footer />
//       </div>
//     );
//   }
//
// }
//
// export default withRouter(App);
