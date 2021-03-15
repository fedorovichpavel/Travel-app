import React, {useEffect, useState} from 'react';

import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import {Context} from '../context/context';

import "./App.scss"

import Home from './../home/home';
import Country from './../country/country';
import Footer from './../footer/footer';
import ModalLogin from './../modal-login/modal-login';
import ModalRegistration from './../modal-registration/modal-registration';


function App() {
  const [domLoading, setDomLoading] = useState(false);
  const [classNamePreloader, setClassNamePreloader] = useState('preloader');
  useEffect(() => {
    window.onload =  (event) => {
       setClassNamePreloader('preloader preloader-hidden');
       setTimeout(() => setDomLoading(true), 1000);
    }
 });
 const [modalLogin, setModalLogin] = useState(false);
 const [modalRegistration, setModalRegistration] = useState(false);

 function changeModal(target) {
  return target === 'login' ? setModalLogin(!modalLogin) : setModalRegistration(!modalRegistration);
 }

 //fetch('https://rs-react.herokuapp.com/') .then(response => response.json()) .then(data=> console.log(data))

  return (
    <Context.Provider value={{
      changeModal
    }}>
    <BrowserRouter>
      <div className="App">
        {domLoading ? '' : <div className={classNamePreloader}><BounceLoader css="position:absolute;top:calc(50% - 250px);left:calc(50% - 250px);" size={500} color='#49a4b0' /></div>}
        <Route path="/travel-app" component={Home}/>
        <Route path="/country"component={Country}/>
        <Footer />
        <ModalLogin visability={modalLogin} />
        <ModalRegistration visability={modalRegistration} />
      </div>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
