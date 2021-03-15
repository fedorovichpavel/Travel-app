import React from 'react';

import "./../../Normalize.css";
import "./modal-registration.scss";

function ModalRegistration() {
  return (
    <div className="modal modal-hidden">
      <div className="wrap-modal">
        <button className="reset">x</button>
        <form method='post' /*action="https://rs-react.herokuapp.com/auth/registration"*/>
          <div className="login">
            <label>login: </label><input type="text" name="nickName" />
          </div>
          <div className="email">
            <label>e-mail: </label><input type="email" name="email" />
          </div>
          <div className="password">
            <label>password: </label><input type="password" name="password" />
          </div>
          <div className="buttons">
            <button className="ok">ok</button>
            <span> | </span>
            <button className="registration">log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalRegistration;
