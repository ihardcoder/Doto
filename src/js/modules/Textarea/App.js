// export react组件
export * as UI from './components';

// export actions
export * as Actions from './actions';

// export reducers
export * as Reducers from './reducers';

// export react组件初始状态
export const initState = {
  styles:{
    fontsize: '1.34rem',
    fontcolor: '#f5da55'
  },
  text: 'hello world',
  status:{
    showTextInput: false,
    showSettingPanel: false,
    showFontcolorInput: false
  },
  coordinate:null
}
