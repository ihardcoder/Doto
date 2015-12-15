import * as types from '../constants';

export function setContent(state,action){
  switch (action.type) {
    case types.SET_MODUEL_TEXTAREA_TEXT:
      let _module = state[action.pageIndex].modules[action.moduleIndex];
      _module = Object.assign({},_module,{
        props: {
          ..._module.props,
          text: action.text
        }
      });
      // _module.props.text = action.text;
      let _modules = [
        ...state[action.pageIndex].modules.slice(0,action.moduleIndex),
        _module,
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
    default:
      return state;
  }
}

export function setLocation(state,action){
  
}
