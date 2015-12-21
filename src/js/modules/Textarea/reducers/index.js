import * as types from '../constants';
/**
* @desc reducer汇总函数，负责根据action.type进行行为分发
* @param {Object}-state
* @param {Object}-action
* @return {Object}-state
*/
export function setState(state,action){
  switch (action.type) {
    case types.SET_TEXT:
    case types.SET_FONTSIZE:
    case types.SET_FONTCOLOR:
      return setContent(state,action);
    case types.TOGGLE_TEXT_INPUT:
    case types.TOGGLE_SETTING_PANEL:
    case types.TOGGLE_FONTCOLOR_INPUT:
      return setStatus(state,action);
    case types.SET_COORDINATE:
      return setOutStyles(state,action);
    case types.DOA_DEL:
      return destory(state,action);
    default:
      return state;
  }
}
/**
* @desc 更新state工厂函数
* @param {Object}-state 初始state
* @param {Object}-action action
* @param {Object}-opts 配置参数
* @return {Object}-state 更新后的state
*/
function updateState(state, action, opts) {
  let sublevel = opts.sublevel;
  let inherntance = opts.inherntance || null;
  let _module = state[action.pageIndex].modules[action.moduleIndex];
  let _props = {
    ..._module.props,
    [sublevel]:!inherntance ? action.nextStatus :
      Object.assign({}, _module.props[sublevel], {
        [inherntance]: action.nextStatus
      })
  }
  _module = Object.assign({}, _module, {
    props: _props
  });
  let _modules = [
    ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
    _module,
    ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
  ]
  let _state = Object.assign({}, state[action.pageIndex], {
    modules: _modules
  });
  return [
    ...state.slice(0, action.pageIndex),
    Object.assign({}, _state),
    ...state.slice(action.pageIndex + 1)
  ];
}
/**
* @desc 分发函数 - 删除
* @param {Object}-state
* @param {Object}-action
* @return {Object}-state
*/
function destory(state,action){
    let _modules = [
      ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
      ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
    ]
    let _state = Object.assign({},state[action.pageIndex],{
      modules: _modules
    });
    return [
      ...state.slice(0,action.pageIndex),
      Object.assign({},_state),
      ...state.slice(action.pageIndex+1)
    ];
}
/**
* @desc 分发函数 - 设置内部展示属性，比如文案、字体等
* @param {Object}-state
* @param {Object}-action
* @return {Object}-state
*/
function setContent(state,action){
  let _module,_modules;
  let _state;
  switch (action.type) {
    case types.SET_TEXT:
      return updateState(state,action,{
        sublevel: 'text',
        inherntance: null
      });
    case types.SET_FONTSIZE:
      return updateState(state,action,{
        sublevel: 'styles',
        inherntance: 'fontsize'
      });
    case types.SET_FONTCOLOR:
      return updateState(state,action,{
        sublevel: 'styles',
        inherntance: 'fontcolor'
      });
    default:
      return state;
  }
}
/**
* @desc 分发函数 - 设置控件status，比如面板的展开与收起等
* @param {Object}-state
* @param {Object}-action
* @return {Object}-state
*/
function setStatus(state,action){
  let _module,_modules;
  let _state;
  switch(action.type){
    case types.TOGGLE_TEXT_INPUT:
      return updateState(state,action,{
        sublevel: 'status',
        inherntance: 'showTextInput'
      });
    case types.TOGGLE_FONTCOLOR_INPUT:
      return updateState(state,action,{
        sublevel: 'status',
        inherntance: 'showFontcolorInput'
      });
    case types.TOGGLE_SETTING_PANEL:
      return updateState(state,action,{
        sublevel: 'status',
        inherntance: 'showSettingPanel'
      });
    default:
      return state;
  }
}
/**
* @desc 分发函数 - 修改控件外围属性，比如坐标
* @param {Object}-state
* @param {Object}-action
* @return {Object}-state
*/
function setOutStyles(state,action){
  let _module,_modules;
  let _state;
  switch(action.type){
    case types.SET_COORDINATE:
      return updateState(state,action,{
        sublevel: 'coordinate',
        inherntance: null
      });
  }
}
