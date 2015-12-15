import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import * as Textarea from '../modules/Textarea/App';
// import {setText} from '../modules/Textarea/actions';

export function createOperaterModule(module,pageIndex,moduleIndex){
  switch(module.type){
    case 'textarea':
      class Module extends Component{
        render(){
          const {dispatch,pageState} = this.props;
          return(
            <div className='doto_module'>
              <Textarea.UI.Operater
              setText={(text,pageIndex,moduleId,moduleIndex) => dispatch(Textarea.actions.setText(text,pageIndex,moduleId,moduleIndex))}
              pageIndex = {pageIndex}
              moduleId = {module.id}
              moduleIndex = {moduleIndex}
              {...module.props}/>
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
      return <Result key={moduleIndex}/>
  }
}

export function createShowcaseModule(module,pageIndex,moduleIndex){}
