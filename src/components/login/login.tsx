import React, {useContext} from 'react';
import {Context} from '../context/context';

import "./../../Normalize.css";
import "./login.scss";

function Login() {
  const {changeModal} = useContext(Context);
  return (
    <div className="login">
      <button onClick={()=>changeModal('login')}>LOG IN</button>
    </div>
  )
}

export default Login;
