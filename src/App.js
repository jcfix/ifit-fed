import React, { Component } from 'react';

import Blockquote from './components/Blockquote';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Programs />
        <Blockquote />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default App;
