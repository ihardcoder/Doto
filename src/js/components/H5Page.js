import './style.scss';
import React, { Component } from 'react';
/**
* @desc page操作区组件
*/
export class Operater extends Component{
  componentDidUpdate(prevProps){
    this.drawTree();
  }
  drawTree(){
    let _canvasDom = this.refs.operater_canvas;
    let _modulesDom = this.refs.operater_modules;
    let _nodes = _modulesDom.children;
    _canvasDom.width = 50;
    _canvasDom.height = 1000;
    let _offset = {
      top: _modulesDom.offsetTop,
      left: _modulesDom.offsetLeft
    };
    let _ctx = _canvasDom.getContext('2d');
    _ctx.strokeStyle = '#f5da55';
    _ctx.clearRect(0,0,50,1000);
    if(!_nodes || _nodes.length === 0){
      return;
    }
    _ctx.beginPath();
    _ctx.moveTo(0,_offset.top);
    for(let i=0,len=_nodes.length;i<len;i++){
      _ctx.lineTo(0,_nodes[i].offsetTop+16);
      _ctx.lineTo(_offset.left,_nodes[i].offsetTop+16);
      _ctx.moveTo(0,_nodes[i].offsetTop+16);
    }
    _ctx.stroke();
  }
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
  delPage(e){
    this.props.delPage(this.props.index);
  }
  render(){
    const className = 'doto_h5page_operater' + (this.props.stateData[this.props.index].status.showSettingPanel ? ' doto_h5page_operater-open':'');
    return(
      <div className={className} >
        <canvas className='operater_canvas' ref='operater_canvas'></canvas>
        <div className='operater_handler'>
          <div className='operater_setting' onClick = {(e)=>this.toggleSettingPanel(e)}><i className='doto_h5page_icon doto_h5page_icon_setting'></i></div>
          页面 {this.props.index+1}
        </div>
        <div className='operater_panel' >
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
                <input className='item_input'
                  value = {this.props.stateData[this.props.index].styles.backgroundColor}
                  onChange={(e)=>this.setBakcolor(e)}
                  onKeyDown={(e)=>this.toggleBakcolorInput(e)}/>
              </div>
            </li>
            <li className='operater_item operater_item_bakimg'>
              <span>背景图片</span>
              <div className='bakcolor_sign' style={{
                backgroundImage: this.props.stateData[this.props.index].styles.backgroundImage
              }}></div>
            </li>
            <li className='operater_item operater_item_withact' onClick={(e)=>this.addModule(e)}>
              <span>添加模块</span>
            </li>
            <li className='operater_item operater_item_withact' onClick={(e)=>this.delPage(e)}>
              <span>删除此页</span>
            </li>
          </ul>
        </div>
        <div className='operater_modules' ref='operater_modules'>{this.props.children}</div>
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
