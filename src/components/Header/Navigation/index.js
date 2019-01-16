import React from 'react';

type Props = {|
  className: string,
  links: [],
|};

export default class Navigation extends React.Component<Props> {

  render = () => {

    const { className, links } = this.props;
    return (
      <div className={className}>
        <ul>
          {links.map(link => (
            <li key={link.key}><a href='{link.url}'>{link.text}</a></li>
          ))}
        </ul>
      </div>
    );
  };

}
