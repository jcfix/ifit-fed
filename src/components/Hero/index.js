import React from 'react';

import FadeIn from '../../shared/FadeIn';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-text animate-text'>
        <FadeIn>
        <h1>Working out<br /> has never been so fun</h1>
        <p>Welcome to the center of it all. The Fitness Shop presents you with hundreds of workout programs designed to guide your weight loss journey.</p>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;