/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import boxA from '../../../img/grid/box-a.jpg';
import boxB from '../../../img/grid/box-b.jpg';
import boxC from '../../../img/grid/box-c.jpg';
import boxD from '../../../img/grid/box-d.jpg';
import boxE from '../../../img/grid/box-e.jpg';

const Grid = () => {
  return (
    <section className='grid-area'>
      <div className='grid'>
        <a href='#'>
          <div className="box a">
            <img src={boxA} alt='Jillian Michaels' />
            <div className='box-heading'>
              <h3>Get Fit with Jillian Michaels</h3>
              <h4>weight loss</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box b">
            <img src={boxB} alt='Grand Canyon' />
            <div className='box-heading'>
              <h3>Grand Canyon</h3>
              <h4>incline trainer</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box c">
            <img src={boxC} alt='Person power-walking' />
            <div className='box-heading'>
              <h3>Power Walk</h3>
              <h4>walking</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box d">
            <img src={boxD} alt='Person training' />
            <div className='box-heading'>
              <h3>Elliptical Weight Loss With Text Spanning Multiple Lines</h3>
              <h4>weight loss</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box e">
            <img src={boxE} alt='Person on exercise bicycle' />
            <div className='box-heading'>
              <h3>Off Season Weight Loss</h3>
              <h4>cycling</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box f">
            <img src={boxB} alt='Grand Canyon' />
            <div className='box-heading'>
              <h3>Central Park</h3>
              <h4>fitness</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box g">
            <img src={boxA} alt='Jillian Michaels' />
            <div className='box-heading'>
              <h3>5K Beginner Training</h3>
              <h4>running</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box h">
            <img src={boxE} alt='Person on exercise bicycle' />
            <div className='box-heading'>
              <h3>Going Coastal</h3>
              <h4>running</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box i">
            <img src={boxD} alt='Person training' />
            <div className='box-heading'>
              <h3>Elliptical Weight Loss</h3>
              <h4>weight loss</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box j">
            <img src={boxC} alt='Person power-walking' />
            <div className='box-heading'>
              <h3>Incline train</h3>
              <h4>incline trainer</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box k">
            <img src={boxB} alt='Grand Canyon' />
            <div className='box-heading'>
              <h3>Paris</h3>
              <h4>running</h4>
            </div>
          </div>
        </a>
        <a href='#'>
          <div className="box l">
            <img src={boxA} alt='Jillian Michaels' />
            <div className='box-heading'>
              <h3>Get Fit with Jillian Michaels</h3>
              <h4>weight loss</h4>
            </div>
          </div>
        </a>
      </div>
      <button>View More</button>
    </section>
  );
}

export default Grid;
  