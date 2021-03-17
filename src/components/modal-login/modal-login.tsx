import React, {useContext} from 'react';
import {Context} from '../context/context';
import axios from "axios";

import "./../../Normalize.css";
import "./modal-login.scss";

interface ModalLoginProps {
  visability: Boolean
}

const ModalLogin:React.FunctionComponent<ModalLoginProps>  = ({visability}:ModalLoginProps)=> {
  const {changeModal} = useContext(Context);

  function loginUser(e: any) {
    console.log(e);
      axios({
         method: 'post',
         url: 'https://rs-react.herokuapp.com/auth/login',
         data: {
           email: e.target[0].value,
           password: e.target[1].value
         }
       }).then(response => console.log(response.data)); 
  }

  return (
    <div className={visability ? "modal" : "modal modal-hidden"}>
      <div className="wrap-modal">
        <button className="reset" onClick={() => changeModal('login')}>x</button>
        <form onSubmit={(e) => (e.preventDefault(), loginUser(e))}/*method='post'*/ /*action="https://rs-react.herokuapp.com/auth/login"*/>
          <div className="login">
            <label>login: </label><input type="text" name="email" />
          </div>
          <div className="password">
            <label>password: </label><input type="password" name="password" />
          </div>
          <div className="buttons">
            <button className="ok">ok</button>
            <span> | </span>
            <button className="registration" onClick={() => (changeModal('login'), changeModal('registration'))}>registration</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalLogin;
