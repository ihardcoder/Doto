import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import * as Textarea from '../modules/Textarea/App';

function select(state){
  return {
    pageState: state.pageConf
  };
}

export function createOperaterModule(module,pageIndex,moduleIndex){
  switch(module.type){
    case 'textarea':
      class Operater_textarea extends Component{
        render(){
          const {dispatch,pageState} = this.props;
          const _module = pageState[pageIndex].modules[moduleIndex];
          return(
            <div className='doto_module_operater'>
              <Textarea.UI.Operater
              toggleSettingPanel = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.toggleSettingPanel(nextStatus,pageIndex,moduleId,moduleIndex))}
              toggleFontcolorInput = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.toggleFontcolorInput(nextStatus,pageIndex,moduleId,moduleIndex))}
              setFontsize = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.setFontsize(nextStatus,pageIndex,moduleId,moduleIndex))}
              setFontcolor = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.setFontcolor(nextStatus,pageIndex,moduleId,moduleIndex))}
              destory = {(pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.destory(pageIndex,moduleId,moduleIndex))}
              pageIndex = {pageIndex}
              moduleId = {module.id}
              moduleIndex = {moduleIndex}
              stateStatus = { _module.props.status }
              styles = {_module.props.styles}/>
            </div>
          )
        }
      }
      let Result = connect(select)(Operater_textarea);
      return <Result key={'operater_' + module.id}/>
  }
}

export function createShowcaseModule(module,pageIndex,moduleIndex){
  switch(module.type){
    case 'textarea':
      class Showcase_textarea extends Component{
        render(){
          const {dispatch,pageState} = this.props;
          const _module = pageState[pageIndex].modules[moduleIndex];
          return(
            <div>
              <Textarea.UI.Showcase
              pageIndex = {pageIndex}
              moduleId = {module.id}
              moduleIndex = {moduleIndex}
              stateStatus = { _module.props.status }
              styles = {_module.props.styles}
              text = { _module.props.text }
              coordinate = { _module.props.coordinate }
              setCoordinate = {(nextStatus,pageIndex,moduleId,moduleIndex)=>dispatch(Textarea.Actions.setCoordinate(nextStatus,pageIndex,moduleId,moduleIndex))}
              toggleTextinput = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.toggleTextinput(nextStatus,pageIndex,moduleId,moduleIndex))}
              setText = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.setText(nextStatus,pageIndex,moduleId,moduleIndex))}
              />
            </div>
          )
        }
      }
      let Result = connect(select)(Showcase_textarea);
      return <Result key={'showcase_' + module.id}/>
  }
}
