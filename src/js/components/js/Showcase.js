import React, { Component } from 'react';
/**
* @desc 展示区组件
*/
export default class Showcase extends Component{
  render(){
    const className = 'doto_h5page_showcase' + (this.props.className || '');
    return(
      <div className={className}
      style={{
        width:this.props.stateData[this.props.index].styles.showcaseWidth,
        height:this.props.stateData[this.props.index].styles.showcaseHeight,
        backgroundColor: this.props.stateData[this.props.index].styles.backgroundColor,
        backgroundImage: this.props.stateData[this.props.index].styles.backgroundImage
      }}>
      {this.props.children}
      </div>
    );
  }
}
