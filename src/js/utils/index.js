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
          return(
            <div className='doto_module_operater'>
              <Textarea.UI.Operater
              toggleSettingPanel = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.toggleSettingPanel(nextStatus,pageIndex,moduleId,moduleIndex))}
              toggleFontcolorInput = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.toggleFontcolorInput(nextStatus,pageIndex,moduleId,moduleIndex))}
              setFontsize = {(fontsize,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.setFontsize(fontsize,pageIndex,moduleId,moduleIndex))}
              setFontcolor = {(color,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.setFontcolor(color,pageIndex,moduleId,moduleIndex))}
              destory = {(pageIndex,moduleId,moduleIndex) => dispatch(Textarea.Actions.destory(pageIndex,moduleId,moduleIndex))}
              pageIndex = {pageIndex}
              moduleId = {module.id}
              moduleIndex = {moduleIndex}
              stateStatus = { pageState[pageIndex].modules[moduleIndex].props.status }
              styles = {pageState[pageIndex].modules[moduleIndex].props.styles}/>
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
          return(
            <div>
              <Textarea.UI.Showcase
              pageIndex = {pageIndex}
              moduleId = {module.id}
              moduleIndex = {moduleIndex}
              stateStatus = { pageState[pageIndex].modules[moduleIndex].props.status }
              styles = {pageState[pageIndex].modules[moduleIndex].props.styles}
              text = { pageState[pageIndex].modules[moduleIndex].props.text }
              coordinate = { pageState[pageIndex].modules[moduleIndex].props.coordinate }
              setCoordinate = {(coordinate,pageIndex,moduleId,moduleIndex)=>dispatch(Textarea.Actions.setCoordinate(coordinate,pageIndex,moduleId,moduleIndex))}
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
