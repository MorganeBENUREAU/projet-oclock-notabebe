import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logo from 'src/images/NotaBebe_logo.png';

const Header = () => (
  <>
    <h1 className="header-title">Lien parent-crèche</h1>
      <Link to="/">
        <img src={logo} className="header-logo" alt="Logo NotaBebe" />
      </Link>  
  </>

    
  
);

export default Header;
