import React from 'react';

import "./../../Normalize.css";
import "./modal-login.scss";

function ModalLogin() {
  return (
    <div className="modal modal-hidden">
      <div className="wrap-modal">
        <button className="reset">x</button>
        <form method='post' /*action="https://rs-react.herokuapp.com/auth/login"*/>
          <div className="login">
            <label>login: </label><input type="text" name="email" />
          </div>
          <div className="password">
            <label>password: </label><input type="password" name="password" />
          </div>
          <div className="buttons">
            <button className="ok">ok</button>
            <span> | </span>
            <button className="registration">registration</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalLogin;
