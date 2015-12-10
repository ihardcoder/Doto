import React, { Component, PropTypes } from 'react';

export class Operater extends Component{
  clickHandler(e){
    let color = 'red';
    this.props.clickHandler(color);
  }
  render(){
    const className = 'doto_h5page_operater' + (this.props.className || '');
    return(
      <div className={className}
      onClick = {(e) => this.clickHandler(e)}
      style={{
        width:this.props.styles.operaterWidth,
        height:this.props.styles.operaterHeight,
      }}>
        <div className='operater_sign' style={{
          width:30,
          height: 30,
          display: 'inline-block',
          verticalAlign:'middle',
          backgroundColor: this.props.styles.backgroundColor
        }}></div>
        <span>Page</span>
      </div>
    );
  }
}

Operater.PropTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export class Showcase extends Component{
  render(){
    const className = 'doto_h5page_showcase' + (this.props.className || '');
    return(
      <div className={className}
      style={{
        width:this.props.styles.showcaseWidth,
        height:this.props.styles.showcaseHeight,
        backgroundColor: this.props.styles.backgroundColor
      }}>
      {this.props.children}
      </div>
    );
  }
}

Showcase.PropTypes = {
  backgroundColor: PropTypes.string.isRequired
};
