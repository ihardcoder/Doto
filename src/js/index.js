import '../styles/main.scss';
import React , { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Operater as H5PageOperater, Showcase as H5PageShowcase } from './modules/H5Page/App';

import AppReducers from './reducers';

let store = createStore(AppReducers);

let rootElement = document.getElementById('doto_appbox');

// 组件操作区
class Backstage extends Component{
  render(){
    const className = 'doto_app_backstage';
    return(
      <div className={className}>
        <H5PageOperater />
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
        <H5PageShowcase />
      </div>
    );
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
