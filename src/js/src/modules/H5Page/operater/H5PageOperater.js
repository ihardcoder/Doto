import React from 'react';
import {render} from 'react-dom';

export const H5PageOperater = React.createClass({
  render(){
    const className = 'doto_operater_page ' + this.props.className || '';
    const range = this.props.range || 0;
    return (
      <div className={className} data-range={range}>
      {this.props.children}
      </div>
    );
  }
});
