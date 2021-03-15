import React, {useContext} from 'react';
import {Context} from '../context/context';

import "./../../Normalize.css";
import "./modal-login.scss";

interface ModalLoginProps {
  visability: Boolean
}

const ModalLogin:React.FunctionComponent<ModalLoginProps>  = ({visability}:ModalLoginProps)=> {
  const {changeModal} = useContext(Context);
  return (
    <div className={visability ? "modal" : "modal modal-hidden"}>
      <div className="wrap-modal">
        <button className="reset" onClick={() => changeModal('login')}>x</button>
        <form onSubmit={(e) => e.preventDefault()}/*method='post'*/ /*action="https://rs-react.herokuapp.com/auth/login"*/>
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
