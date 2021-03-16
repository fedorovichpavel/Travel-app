import React from 'react';

import Logo from './../logo/logo';

import "./../../Normalize.css";
import "./footer.scss";

function Footer() {

  return (
    <footer>
      <div className="col-left">
        <Logo />
      </div>
      <div className="col-right">
        <ul>
          <li><a href="https://github.com/mikhail-hursky">Mikhail Hursky</a></li>
          <li><a href="https://github.com/fedorovichpavel">Pavel Fedorovich</a></li>
          <li><a href="https://github.com/mig-marina">Marina Migacheva</a></li>
          <li><a href="https://github.com/reactplanner">Oleg Borodin</a></li>
          <li><p>2021</p></li>
          <li className="link-school"><a href="https://rs.school/react/" target="_blank" title="rs-school"></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
