import React from 'react';

import Navigation from './Navigation';
import logo from '../../img/logo.png';
import menuIcon from '../../img/icons/menu-icon.png';
import searchIcon from '../../img/icons/search-icon.png';
import { mainLinks, subLinks } from './../../data.js';

const Header = () => {
  return (
    <React.Fragment>
      <div className='header primary-header'>
        <img className='logo' src={logo} alt='logo' />
        <div className='navigation'>
          <Navigation links={mainLinks} />
          <button>
            <span>Menu</span>
            <img src={menuIcon} alt='menu-icon' />
          </button>
        </div>
      </div>
      <div  className='header secondary-header'>
        <p className="section-header">Weight Loss</p>
        <div className='navigation'>
          <Navigation links={subLinks} />
          <button>
            <img src={searchIcon} alt='search-icon' />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
