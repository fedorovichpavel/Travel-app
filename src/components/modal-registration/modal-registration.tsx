import React, {useContext} from 'react';
import {Context} from '../context/context';

import "./../../Normalize.css";
import "./modal-registration.scss";

interface ModalRegistrationProps {
  visability: Boolean
}

const ModalRegistration:React.FunctionComponent<ModalRegistrationProps> = ({visability}) => {

  const {changeModal} = useContext(Context);

  return (
    <div className={visability ? "modal-registration" : "modal-registration modal-registration-hidden"}>
      <div className="wrap-modal">
        <button className="reset" onClick={() => (changeModal('registration'))}>x</button>
        <form onSubmit={(e) => e.preventDefault()}/*method='post'*/ /*action="https://rs-react.herokuapp.com/auth/registration"*/>
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
            <button className="registration" onClick={() => (changeModal('registration'), changeModal('login'))}>log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalRegistration;
