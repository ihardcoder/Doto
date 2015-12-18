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
      _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          text: action.text
        }
      });
      _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
        ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
      ]
      _state = Object.assign({},state[action.pageIndex],{
        modules: _modules
      });
      return [
        ...state.slice(0,action.pageIndex),
        Object.assign({},_state),
        ...state.slice(action.pageIndex+1)
      ];
    case types.SET_FONTSIZE:
      _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          styles: Object.assign({},_module.props.styles,{
            fontsize: action.fontsize
          })
        }
      });
      _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
        ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
      ]
      _state = Object.assign({},state[action.pageIndex],{
        modules: _modules
      });
      return [
        ...state.slice(0,action.pageIndex),
        Object.assign({},_state),
        ...state.slice(action.pageIndex+1)
      ];
    case types.SET_FONTCOLOR:
      _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          styles: Object.assign({},_module.props.styles,{
            fontcolor: action.color
          })
        }
      });
      _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
        ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
      ]
      _state = Object.assign({},state[action.pageIndex],{
        modules: _modules
      });
      return [
        ...state.slice(0,action.pageIndex),
        Object.assign({},_state),
        ...state.slice(action.pageIndex+1)
      ];
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
      _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          status: Object.assign({},_module.props.status,{
            showTextInput: action.nextStatus
          })
        }
      });
      _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
        ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
      ]
      _state = Object.assign({},state[action.pageIndex],{
        modules: _modules
      });
      return [
        ...state.slice(0,action.pageIndex),
        Object.assign({},_state),
        ...state.slice(action.pageIndex+1)
      ];
    case types.TOGGLE_FONTCOLOR_INPUT:
      _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          status: Object.assign({},_module.props.status,{
            showFontcolorInput: action.nextStatus
          })
        }
      });
      _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
        ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
      ]
      _state = Object.assign({},state[action.pageIndex],{
        modules: _modules
      });
      return [
        ...state.slice(0,action.pageIndex),
        Object.assign({},_state),
        ...state.slice(action.pageIndex+1)
      ];
    case types.TOGGLE_SETTING_PANEL:
      _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          status: Object.assign({},_module.props.status,{
            showSettingPanel: action.nextStatus
          })
        }
      });
      _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
        ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
      ]
      _state = Object.assign({},state[action.pageIndex],{
        modules: _modules
      });
      return [
        ...state.slice(0,action.pageIndex),
        Object.assign({},_state),
        ...state.slice(action.pageIndex+1)
      ];
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
      _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          coordinate: Object.assign({},_module.props.coordinate,action.coordinate)
        }
      });
      _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
        ...state[action.pageIndex].modules.slice(action.moduleIndex+1),
      ]
      _state = Object.assign({},state[action.pageIndex],{
        modules: _modules
      });
      return [
        ...state.slice(0,action.pageIndex),
        Object.assign({},_state),
        ...state.slice(action.pageIndex+1)
      ];
  }
}
