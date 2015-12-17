import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import * as Textarea from '../modules/Textarea/App';

export function createOperaterModule(module,pageIndex,moduleIndex){
  switch(module.type){
    case 'textarea':
      class Module extends Component{
        render(){
          const {dispatch,pageState} = this.props;
          return(
            <div className='doto_module_operater'>
              <Textarea.UI.Operater
              setText={(text,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.actions.setText(text,pageIndex,moduleId,moduleIndex))}
              toggleSettingPanel = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.actions.toggleSettingPanel(nextStatus,pageIndex,moduleId,moduleIndex))}
              setFontsize = {(fontsize,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.actions.setFontsize(fontsize,pageIndex,moduleId,moduleIndex))}
              pageIndex = {pageIndex}
              moduleId = {module.id}
              moduleIndex = {moduleIndex}
              stateStatus = { pageState[pageIndex].modules[moduleIndex].props.status }
              styles = {pageState[pageIndex].modules[moduleIndex].props.styles}/>
            </div>
          )
        }
      }
      function select(state){
        return {
          pageState: state.pageConf
        };
      }
      let Result = connect(select)(Module);
      return <Result key={'operater_'+module.id}/>
  }
}

export function createShowcaseModule(module,pageIndex,moduleIndex){
  switch(module.type){
    case 'textarea':
      class Module extends Component{
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
              setCoordinate = {(coordinate,pageIndex,moduleId,moduleIndex)=>dispatch(Textarea.actions.setCoordinate(coordinate,pageIndex,moduleId,moduleIndex))}
              toggleTextinput = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.actions.toggleTextinput(nextStatus,pageIndex,moduleId,moduleIndex))}
              setText = {(nextStatus,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.actions.setText(nextStatus,pageIndex,moduleId,moduleIndex))}
              />
            </div>
          )
        }
      }
      function select(state){
        return {
          pageState: state.pageConf
        };
      }
      let Result = connect(select)(Module);
      return <Result key={'showcase_'+module.id}/>
  }
}
