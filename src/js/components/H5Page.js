import './style.scss';
import React, { Component } from 'react';

/**
* @desc page操作区组件
*/
export class Operater extends Component{
  // 设置面板的展示&收起
  toggleSettingPanel(e){
    let nextStatus = !this.props.stateData[this.props.index].status.showSettingPanel ? true : false;
    this.props.toggleSettingPanel(nextStatus,this.props.index);
  }
  // 背景色input的显示&隐藏
  toggleBakcolorInput(e){
    if(e.target.tagName === 'INPUT' && e.keyCode !== 13){
      return;
    }
    let nextStatus = !this.props.stateData[this.props.index].status.showBakcolorInput ? true : false;
    this.props.toggleBakcolorInput(nextStatus,this.props.index);
  }
  // 设置背景颜色
  setBakcolor(e){
    let color = '';
    color = e.target.value;
    this.props.setBakcolor(color,this.props.index);
  }
  // 隐藏所有设置面板
  hideAllPanels(e){
    this.props.toggleSettingPanel(false,this.props.index);
    this.props.toggleBakcolorInput(false,this.props.index);
  }
  addModule(e){
    let _date = new Date();
    let _moduleId = 'module_'+_date.getTime();
    let _pageIndex = this.props.index;
    this.props.addModule(_moduleId,'textarea',_pageIndex);
  }
  render(){
    const className = 'doto_h5page_operater' + (this.props.className || '');
    return(
      <div className={className} style={{
        backgroundColor: this.props.stateData[this.props.index].styles.backgroundColor
      }}
      onMouseLeave = {(e)=>this.hideAllPanels(e)}>
        <div className='operater_cover'></div>
        <div className='operater_setting' onClick = {(e)=>this.toggleSettingPanel(e)}><i className='doto_h5page_icon doto_h5page_icon_setting'></i></div>
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
            <li className='operater_item operater_item_bakimg' onClick={(e)=>this.addModule(e)}>
              <span>添加模块</span>
            </li>
          </ul>
        </div>
        <span>页面 {this.props.index+1}</span>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

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
