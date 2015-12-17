import './style.scss';
import React, { Component } from 'react';
import $ from 'jquery';

export class Operater extends Component{
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
          </ul>
        </div>
      </div>
    )
  }
}

export class Showcase extends Component{
  onDragBegin(e){
    // 编辑状态不可移动
    if(this.props.stateStatus.showTextInput){
      return;
    }
    let _this = this;
    let $main = $(this.refs.main);
    let $viewport = $main.parents('.doto_h5page_showcase');
    let mainLocation = {};
    let dragTimer = setTimeout(function(){
      let mainSize = {
        height: $main.height(),
        width: $main.width()
      };
      $viewport.bind('mousemove',function(e){
        let viewportOffset = $viewport.offset();

        mainLocation = {
          top: e.pageY-mainSize.height/2-viewportOffset.top,
          left: e.pageX-mainSize.width/2-viewportOffset.left
        };
        $main.css({
          position: 'absolute',
          top: mainLocation.top,
          left: mainLocation.left
        });
      });
    },300);
    $viewport.bind('mouseup',function(e){
        $viewport.unbind('mousemove').unbind('mouseup');
        clearTimeout(dragTimer);
        _this.onDragEnd.call(_this,mainLocation);
    });
  }
  onDragEnd(coordinate){
    // 坐标不为空时触发props的写入
    if(!!coordinate.top || !!coordinate.left){
        this.props.setCoordinate(coordinate,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
    }
  }
  showTextinput(e){
    if(this.props.stateStatus.showTextInput){
      return;
    }
    this.props.toggleTextinput(true,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
  }
  finishInput(e){
    if(e.target.tagName === 'TEXTAREA' && e.keyCode === 13){
      let text = e.target.value;
      this.props.setText(text,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
      this.props.toggleTextinput(false,this.props.pageIndex,this.props.moduleId,this.props.moduleIndex);
    }
  }
  render(){
    const _className = 'doto_module_showcase doto_module_textarea_showcase ' + (this.props.stateStatus.showTextInput ? 'doto_module_textarea_showcase-edit': '');
    return(
      <div className={_className} ref='main' style={{
        fontSize: this.props.styles.fontsize,
        color: this.props.styles.color,
        position: this.props.coordinate?'absolute':'relative',
        top:this.props.coordinate? this.props.coordinate.top:0,
        left:this.props.coordinate? this.props.coordinate.left:0
      }}
      onMouseDown = {(e)=>this.onDragBegin(e)}
      onDoubleClick = {(e)=>this.showTextinput(e)}>
        <div className='content'>
          <span>{this.props.text}</span>
          <textarea className='text_input' defaultValue={this.props.text} style={{
            fontSize: this.props.styles.fontsize
          }}
          onKeyDown = {(e)=>this.finishInput(e)}></textarea>
        </div>
      </div>
    )
  }
}
