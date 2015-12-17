// export react组件
export * as UI from './components';
// export 组件所用的常量
export * as types from './constants';
// export actions
export * as actions from './actions';

export * as reducers from './reducers';

// export react组件初始状态
export const initState = {
  styles:{
    fontsize: '1.34rem',
    color: '#f5da55'
  },
  text: 'hello world',
  status:{
    showTextInput: false,
    showSettingPanel: false
  },
  coordinate:null
}
