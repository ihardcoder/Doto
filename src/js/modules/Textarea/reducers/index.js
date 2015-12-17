import * as types from '../constants';

export function setContent(state,action){
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
    default:
      return state;
  }
}

export function setStatus(state,action){
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

export function setCoordinate(state,action){
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
