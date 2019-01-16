import React from 'react';

import heroImg from '../../img/hero-image.jpg';

export default class Hero extends React.Component {

  render () {
    return (
        <div className='hero-section'>
            <img src={heroImg} alt='people stretching in exercise class' />
        </div>
    );
  }
}
