import '../styles/main.scss';
import React , { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider,connect } from 'react-redux';
import { setBakColor,toggleSettingPanel,toggleBakcolorInput,addPage,delPage,addModule } from './actions';
import * as H5Page from './components/H5Page';
import AppReducers from './reducers';

import {createOperaterModule,createShowcaseModule} from './utils';
import {crashReporter} from './middlewares';

let createStoreWithMiddleware = applyMiddleware(crashReporter)(createStore);
let store = createStoreWithMiddleware(AppReducers);

let rootElement = document.getElementById('doto_appbox');

// 添加页面
class AddAction extends Component{
  render(){
    return(
      <div className='action_add_Page'>
        <div className='cover'></div>
        <div className='action_add' onClick={(e)=>this.props.addPage(e)}>
          <div className='action_text'>添加页面</div>
        </div>
      </div>
    );
  }
}

// 组件操作区
class Backstage extends Component{
  static propTypes = {
    pageState: PropTypes.array.isRequired
  }
  render(){
    const className = 'doto_app_backstage';
    const { dispatch,pageState } = this.props;
    let operaters = [];
    let sum = pageState.length;
    for(let i = 0;i<sum;i++){
      let modules = [];
      for(let j = 0,len = pageState[i].modules.length; j<len;j++ ){
        let _module = createOperaterModule(pageState[i].modules[j],i,j);
        modules.push(_module);
      }
      operaters.push(<H5Page.Operater
        setBakcolor={(color,index) => dispatch(setBakColor(color,index))}
        toggleSettingPanel = {(isshown,index) => dispatch(toggleSettingPanel(isshown,index))}
        toggleBakcolorInput = {(isshown,index) => dispatch(toggleBakcolorInput(isshown,index))}
        addModule = {(moduleId,moduleType,pageIndex) => dispatch(addModule(moduleId,moduleType,pageIndex))}
        delPage = {(pageIndex) => dispatch(delPage(pageIndex))}
        stateData={pageState}
        index={i}
        key={i}>
        {modules}
      </H5Page.Operater>)
    }
    return(
      <div className={className}>
        <div className = 'doto_app_backstage_modules'>
          { operaters }
        </div>
        <div className='doto_app_backstage_actions'>
          <AddAction addPage={()=>dispatch(addPage())}/>
        </div>
      </div>
    )
  }
}

// 组件展示区
class Stage extends Component{
  state = {
      cur_view: 'iphone'
  }
  static propTypes = {
    pageState: PropTypes.array.isRequired
  }
  changeView(e){
    let nextView = e.target.innerHTML;
    if(this.state.cur_view === nextView){
      return;
    }
    this.setState({
      cur_view: nextView
    });
  }
  render(){
    const { dispatch,pageState } = this.props;
    let showcases = [];
    let sum = pageState.length;
    for(let i = 0;i<sum;i++){
      let modules = [];
      for(let j = 0,len = pageState[i].modules.length; j<len;j++ ){
        let _module = createShowcaseModule(pageState[i].modules[j],i,j);
        modules.push(_module);
      }
      showcases.push(<H5Page.Showcase stateData={pageState} index={i} key={i}>
        {modules}
      </H5Page.Showcase>)
    }
    let className = 'doto_app_stage doto_app_stage_' + this.state.cur_view;
    return(
      <div className= {className}>
        <div className='stage_nav'>
          <span className='stage_nav_item' onClick={(e)=>this.changeView(e)}>iphone</span>
          <span className='stage_nav_item' onClick={(e)=>this.changeView(e)}>ipad</span>
        </div>
        <div className='doto_app_stage_iphone'>
          <div className='overflowbox'>
            <div className='contents'>{ showcases }</div>
          </div>
        </div>
        <div className='doto_app_stage_ipad'>
          <div className='overflowbox'>
            <div className='contents'>{ showcases }</div>
          </div>
        </div>
      </div>
    );
  }
}
// 简单的select函数
// @todo 后期可修改为reselect
function select(state) {
  return {
    pageState: state.pageConf
  };
}
// react-redux连接react组件与redux
const AppBackstage = connect(select)(Backstage);
const AppStage = connect(select)(Stage);

// App容器
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
