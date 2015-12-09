import React from 'react';
import {render} from 'react-dom';

export const H5PageShowCase = React.createClass({
  render(){
    const className = 'doto_page ' + this.props.className || '';
    return (
      <div className={className}>
      {this.props.children}
      </div>
    );
  }
});
