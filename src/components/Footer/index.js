import React from 'react';

import { footerLinks } from './../../data.js';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <div className='navigation'>
          <ul>
              {footerLinks.map(link => (
              <li key={link.key}><a href='{link.url}'>{link.text}</a></li>
              ))}
          </ul>
          <ul className='social-links'>
              {/* {socialLinks.map(link => (
              <li key={link.key}><a href='{link.url}'><img src={link.src} alt={link.alt} /></a></li>
              ))} */}
          </ul>
        </div>
        <div className='site-info'>
            <p>Copyright © iFit.com, All rights reserved.</p>
            <div className='language-menu'>Language: English</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;