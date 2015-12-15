import React, { Component } from 'react';

export class Operater extends Component{
  setText(e){
    let pageIndex = this.props.pageIndex;
    let moduleId = this.props.moduleId;
    let text = 'hello doto';
    this.props.setText(text,pageIndex,moduleId,this.props.moduleIndex);
  }
  render(){
    return(
      <div className='doto_module_textarea_operater' onClick={(e)=>this.setText(e)}>
        {this.props.text}
      </div>
    )
  }
}

export class Showcase extends Component{
  render(){
    return(
      <div className='doto_module_textarea_showcase'>
        {this.props.text}
      </div>
    )
  }
}
