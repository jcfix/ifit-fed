import { Component } from 'react'

export default class FadeIn extends Component {
  componentDidMount() {
    setTimeout(function() {
      // eslint-disable-next-line no-unused-expressions
      document.querySelector('.hero-text').classList.add('fade-in');
    })
  }

  render() {
    return this.props.children
  }
}




