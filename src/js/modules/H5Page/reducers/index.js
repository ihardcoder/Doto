import * as types from '../constants';

const initialState = {
  styles: {
      backgroundColor: '#555',
      backgroundImage:'',
      showcaseWidth:450,
      showcaseHeight:600
  },
  status:{
    showpanel: false,
    showBackcolorInput: false
  },
  animation:{
    enter: 'normal',
    out: 'normal'
  }
};

export function setStyles(state = initialState.styles, action) {
  switch (action.type) {
    case types.SET_BAK_COLOR:
      return Object.assign({}, state, {
        backgroundColor: action.color
      });
    case types.SET_BAK_IMAGE:
      return Object.assign({}, state, {
        backgroundImage: action.image
      });
    case types.SET_WIDTH:
      return Object.assign({}, state, {
        showcaseWidth: action.width
      });
    case types.SET_HEIGHT:
      return Object.assign({}, state, {
        showcaseHeight: action.height
      });
    default:
      return state;
  }
}
export function setStatus(state=initialState.status,action){
  switch(action.type){
    case types.TOGGLEPANEL:
      return Object.assign({},state,{
        showpanel: action.isshown
      });
    case types.TOGGLEBAKCOLORINPUT:
      return Object.assign({},state,{
        showBackcolorInput: action.isshown
      });
    default:
      return state;
  }
}
export function setAnimate(state = initialState.animation, action) {
  switch(action.type) {
    case types.SET_ANIMATE_OUT:
      return Object.assign({}, state, {
        out: action.animation
      });
    case types.SET_ANIMATE_ENTER:
      return Object.assign({}, state, {
        enter: action.animation
      });
    default:
      return state;
  }
}
