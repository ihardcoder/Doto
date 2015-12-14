import './style.scss';
import React, { Component, PropTypes } from 'react';

/**
* @desc 操作区组件
*/
export class Operater extends Component{
  // 设置面板的展示与收起
  togglePanel(e){
    console.log('togglePanel');
    let nextStatus = !this.props.stateData[this.props.index].status.showSettingPanel ? true : false;
    this.props.setStatus(nextStatus,this.props.index);
  }
  toggleBakcolorInput(e){
    console.log('toggleBakcolorInput');
    if(e.target.tagName === 'INPUT' && e.keyCode !== 13){
      return;
    }
    let nextStatus = !this.props.stateData[this.props.index].status.showBakcolorInput ? true : false;
    this.props.toggleBakcolorInput(nextStatus,this.props.index);
  }
  // 设置背景颜色
  setBakcolor(e){
    console.log('setBakcolor');
    let color = '';
    color = e.target.value;
    this.props.setBakcolor(color,this.props.index);
  }
  render(){
    const className = 'doto_h5page_operater' + (this.props.className || '');
    return(
      <div className={className}>
        <div className='operater_sign' onClick = {(e)=>this.togglePanel(e)}></div>
        <div className='operater_panel' style={{
          display:this.props.stateData[this.props.index].status.showSettingPanel? 'block':'none'
        }}>
          <ul className='operater_list'>
            <li className='operater_item operater_item_bakcolor'>
              <span>背景色</span>
              <div className='item_sign bakcolor_sign' style={{
                backgroundColor: this.props.stateData[this.props.index].styles.backgroundColor
              }}
              onClick = {(e)=>this.toggleBakcolorInput(e)}></div>
              <div className='item_input_box' style={{
                display:this.props.stateData[this.props.index].status.showBakcolorInput? 'block':'none'
              }}>
                <input className='item_input' onChange={(e)=>this.setBakcolor(e)} onKeyDown={(e)=>this.toggleBakcolorInput(e)}/>
              </div>
            </li>
            <li className='operater_item operater_item_bakimg'>
              <span>背景图片</span>
              <div className='bakcolor_sign' style={{
                backgroundImage: this.props.stateData[this.props.index].styles.backgroundImage
              }}></div>
            </li>
            <li className='operater_item operater_item_width'>
              <span>宽度</span>
            </li>
            <li className='operater_item operater_item_height'>
              <span>高度</span>
            </li>
          </ul>
        </div>
        <span>Page</span>
      </div>
    );
  }
}

Operater.PropTypes = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};

/**
* @desc 展示区组件
*/
export class Showcase extends Component{
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

Showcase.PropTypes = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};
