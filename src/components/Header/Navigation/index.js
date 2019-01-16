import React from 'react';

type Props = {|
  links: [],
|};

export default class Navigation extends React.Component<Props> {

  render = () => {

    const { links } = this.props;
    return (
      <ul>
        {links.map(link => (
          <li key={link.key} className={link.isSelected ? 'currentLink' : ''}><a href='{link.url}'>{link.text}</a></li>
        ))}
      </ul>
    );
  };

}
