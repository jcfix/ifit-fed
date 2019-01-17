import React from 'react';

import filledCircle from '../../img/icons/filled-ring.png';
import emptyCircle from '../../img/icons/empty-ring.png';

const Blockquote = () => {
  return (
    <section className='blockquote-section'>
      <div className='quote'>
        <blockquote className='animate-text'>To date I have lost 14 Kilos (30 pounds) and my fitness level is at least the same as when I was actively engaged in sport (if not better), thanks to iFit and the range and variation of fitness programs available.</blockquote>
        <span>—Graham Lambourne</span>
      </div>
      <div className='slide-controls'>
        <span className='control'><img src={filledCircle} alt='current slide' /></span>
        <span className='control'><img src={emptyCircle} alt='next slide' /></span>
        <span className='control'><img src={emptyCircle} alt='last slide' /></span>
      </div>
    </section>
  );
}

export default Blockquote;
