import '../styles/main.scss';
import React , { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux';

import { setBakColor,setStatus,toggleBakcolorInput,addPage } from './actions';
import * as H5Page from './components/H5Page';
import AppReducers from './reducers';

let store = createStore(AppReducers);

let rootElement = document.getElementById('doto_appbox');


// 组件操作区
class Backstage extends Component{
  render(){
    const className = 'doto_app_backstage';
    const { dispatch,pageState } = this.props;
    let operaters = [];
    let sum = pageState.length;
    for(let i = 0;i<sum;i++){
      operaters.push(<H5Page.Operater
        setBakcolor={(color,index) => dispatch(setBakColor(color,index))}
        setStatus = {(isshown,index) => dispatch(setStatus(isshown,index))}
        toggleBakcolorInput = {(isshown,index) => dispatch(toggleBakcolorInput(isshown,index))}
        stateData={pageState}
        index={i}
        key={i}/>)
    }
    return(
      <div className={className}>
        <div className='doto_app_backstage_actions'>
          <button className='action_add_H5Page' onClick={(e)=>dispatch(addPage(e))}>添加页面</button>
        </div>
        <div className = 'doto_app_backstage_modules'>
          { operaters }
        </div>
      </div>
    )
  }
}
// Backstage.propTypes = {
//   pages: PropTypes.array.isRequired
// }

// 组件展示区
class Stage extends Component{
  render(){
    const { dispatch,pageState } = this.props;
    const className = 'doto_app_stage';
    let showcases = [];
    let sum = pageState.length;
    for(let i = 0;i<sum;i++){
      showcases.push(<H5Page.Showcase stateData={pageState} index={i} key={i}/>)
    }
    return(
      <div className={className}>
        { showcases }
      </div>
    );
  }
}

function select(state) {
  return {
    pageState: state.pageConf
  };
}

const AppBackstage = connect(select)(Backstage);
const AppStage = connect(select)(Stage);

// 容器
class App extends Component{
  render(){
    const className = 'doto_app';
    return(
      <div className={className}>
        <AppBackstage />
        <AppStage />
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
