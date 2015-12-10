import React , { Component, PropTypes }from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as H5Page from './modules/H5Page/App';


let H5PageReducers = combineReducers(H5Page.reducers);
let store = createStore(H5PageReducers);

let rootElement = document.getElementById('doto_window');

// 组件操作区
class Backstage extends Component{
  render(){
    const className = 'doto_app_backstage';
    return(
      <div className={className}>
        <H5Page.Operater />
      </div>
    )
  }
}
// 组件展示区
class Stage extends Component{
  render(){
    const className = 'doto_app_stage';
    return(
      <div className={className}>
        <H5Page.Showcase />
      </div>
    )
  }
}
// 容器
class App extends Component{
  render(){
    const className = 'doto_app';
    return(
      <div className={className}>
        <Backstage />
        <Stage />
      </div>
    );
  }
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
