// export react组件
export * as UI from './components';

// export actions
export * as Actions from './actions';

// export reducers
export * as Reducers from './reducers';

// export react组件初始状态
export const initState = {
  styles:{
    fontsize: '2rem',
    fontcolor: '#fff'
  },
  text: 'Hello Doto',
  status:{
    showTextInput: false,
    showSettingPanel: false,
    showFontcolorInput: false
  },
  coordinate:null
}
