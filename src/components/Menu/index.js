import React from 'react';

export default class Menu extends React.Component {

  state = { isOpen: false }

  render () {
    return (
      <React.Fragment>
      <div>
        <button>Menu</button>
      </div>

      this.state.isOpen ? (
        <div>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      ) : (
        null
      )
      </React.Fragment>
    )
  }
}
