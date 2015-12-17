import * as TYPES from '../constants';
import { combineReducers } from 'redux';

import * as Textarea from '../modules/Textarea/App';
// import {setContent} from '../modules/Textarea/reducers';

// page初始样式
const initStyles = {
  backgroundColor: '#323330',
  backgroundImage: ''
};
// page初始status - 设置面板关闭；背景色input隐藏
const initStatus = {
  showSettingPanel: false,
  showBakcolorInput: false
};
// @todo page初始动画选型
const initAnimate = {
  enter: 'normal',
  out: 'normal'
};
// page初始state
const pageState = [{
    styles: initStyles,
    status: initStatus,
    animation: initAnimate,
    modules:[]
}];
/**
* @desc page的操作reducers，目前将删减&样式&状态&动画的修改暂时汇总为一个函数
* @param state
* @param action
*/
function pageConf(state = pageState, action) {
  switch (action.type) {
    case TYPES.DOA.ADD_PAGE:
      return [...state, {
        styles: initStyles,
        status: initStatus,
        animation: initAnimate,
        modules:{}
      }];
    case TYPES.DOA.DEL_PAGE:
      return [
        ...state.slice(0,action.pageIndex),
        ...state.slice(action.pageIndex+1)
      ];
    case TYPES.MODULES.ADD:
      return addModule(state,action);
    case TYPES.SET_STYLES.SET_BAK_COLOR:
      return setBackgroundColor(state, action);
    case TYPES.SET_STATUS.TOGGLE_SETTING_PANEL:
      return toggleSettingPanel(state, action);
    case TYPES.SET_STATUS.TOGGLE_BAKCOLOR_INPUT:
      return toggleBakcolorInput(state, action);
    case Textarea.types.SET_TEXT:
    case Textarea.types.SET_FONTSIZE:
      return Textarea.reducers.setContent(state,action);
    case Textarea.types.TOGGLE_TEXT_INPUT:
    case Textarea.types.TOGGLE_SETTING_PANEL:
      return Textarea.reducers.setStatus(state,action);
    case Textarea.types.SET_COORDINATE:
      return Textarea.reducers.setCoordinate(state,action);
    default:
      return state;
  }
}
/**
* @desc 分发函数 - 添加module
*/
function addModule(state,action){
  let _state = state[action.pageIndex];
  let _modules = [
    ..._state.modules,
    {
      id: action.moduleId,
      type: action.moduleType,
      props: Textarea.initState
    }
  ];

  return [
    ...state.slice(0,action.pageIndex),
    Object.assign({},_state,{
      modules: _modules
    }),
    ...state.slice(action.pageIndex+1)
  ];
}
/**
* @desc 分发函数 - 设置背景色
*/
function setBackgroundColor(state,action){
    let _styles = state[action.index].styles;
    _styles = Object.assign({},_styles,{
      backgroundColor:action.color
    });
    return [
      ...state.slice(0,action.index),
      Object.assign({},state[action.index],{
        styles: _styles
      }),
      ...state.slice(action.index+1)
    ]
}
/**
* @desc 分发函数 - 设置设置面板的展开与隐藏
*/
function toggleSettingPanel(state,action){
  let _status = state[action.index].status;
  _status = Object.assign({},_status,{
    showSettingPanel: action.nextStatus
  });
  return [
    ...state.slice(0,action.index),
    Object.assign({},state[action.index],{
      status: _status
    }),
    ...state.slice(action.index+1)
  ];
}
/**
* @desc 分发函数 - 设置背景色input的显示与隐藏
*/
function toggleBakcolorInput(state,action){
  let _status = state[action.index].status;
  _status = Object.assign({},_status,{
    showBakcolorInput: action.nextStatus
  });
  return [
    ...state.slice(0,action.index),
    Object.assign({},state[action.index],{
      status: _status
    }),
    ...state.slice(action.index+1)
  ];
}

export default combineReducers({
  pageConf
});
