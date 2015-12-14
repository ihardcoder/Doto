import '../styles/main.scss';
import React , { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux';

import { setBakColor,toggleSettingPanel,toggleBakcolorInput,addPage } from './actions';
import * as H5Page from './components/H5Page';
import AppReducers from './reducers';

let store = createStore(AppReducers);

let rootElement = document.getElementById('doto_appbox');

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
  render(){
    const className = 'doto_app_backstage';
    const { dispatch,pageState } = this.props;
    let operaters = [];
    let sum = pageState.length;
    for(let i = 0;i<sum;i++){
      operaters.push(<H5Page.Operater
        setBakcolor={(color,index) => dispatch(setBakColor(color,index))}
        toggleSettingPanel = {(isshown,index) => dispatch(toggleSettingPanel(isshown,index))}
        toggleBakcolorInput = {(isshown,index) => dispatch(toggleBakcolorInput(isshown,index))}
        stateData={pageState}
        index={i}
        key={i}/>)
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
Backstage.propTypes = {
  pageState: PropTypes.array.isRequired
}

// 组件展示区
class Stage extends Component{
  constructor(){
    super()
    this.state = {
        cur_view: 'iphone'
    };
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
      showcases.push(<H5Page.Showcase stateData={pageState} index={i} key={i}/>)
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

Stage.propTypes = {
  pageState: PropTypes.array.isRequired
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
