import React, { Component } from 'react';
import ColorPicker from 'react-color';

export default class Operater extends Component{
  toggleSettingPanel(e){
    let nextStatus = !this.props.stateStatus.showSettingPanel;
    this.props.toggleSettingPanel(nextStatus,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
  }
  enLargeFontsize(){
    let prevSize = parseFloat(this.props.styles.fontsize.split('rem')[0]);
    let nextSize = (prevSize+0.05).toFixed(2)+'rem';
    this.props.setFontsize(nextSize,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
  }
  minusFontsize(){
    let prevSize = parseFloat(this.props.styles.fontsize.split('rem')[0]);
    let nextSize = (prevSize-0.05).toFixed(2)+'rem';
    this.props.setFontsize(nextSize,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
  }
  toggleFontcolorInput(){
    let nextStatus = !this.props.stateStatus.showFontcolorInput;
    this.props.toggleFontcolorInput(nextStatus,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
  }
  setFontcolor(color){
    this.props.setFontcolor('#'+color.hex,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
  }
  destory(){
    this.props.destory(this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
  }
  render(){
    return(
      <div className='doto_module_textarea_operater' ref='operater'>
        <div className='module_operater_index'>{this.props.moduleIndex}</div>
        <div className='module_operater_type'>文本框</div>
        <div className='module_operater_setting_hanlder' onClick={(e)=>this.toggleSettingPanel(e)}>设置</div>
        <div className='module_operater_setting_panel' ref='module_operater_setting_panel'style={{
          display: this.props.stateStatus.showSettingPanel? 'block':'none'
        }}>
          <ul className='setting_list'>
            <li className='setting_item setting_item_fontsize'>
              <span>字体大小</span>
              <div className='fontsize_controller'>
                <span className='controller_item controller_item_plus' onClick={()=>this.enLargeFontsize()}>+</span>
                <span className='controller_item controller_item_minus' onClick={()=>this.minusFontsize()}>-</span>
              </div>
            </li>
            <li className='setting_item setting_item_fontcolor'>
              <span>字体颜色</span>
              <div className='sign' style={{
                backgroundColor: this.props.styles.fontcolor,
              }}
              onClick = {(e)=>this.toggleFontcolorInput(e)}>
              </div>
              <div className='input_box' style={{
                display:this.props.stateStatus.showFontcolorInput? 'block':'none'
              }}>
                <ColorPicker type = 'chrome' width='100%'
                color={this.props.styles.fontcolor}
                onChange = {(color)=>this.setFontcolor(color)}/>
              </div>
            </li>
            <li className='setting_item setting_item_del' onClick={()=>this.destory()}>
              <span>删除</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
