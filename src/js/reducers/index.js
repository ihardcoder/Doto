import * as TYPES from '../constants';
import { combineReducers } from 'redux';

const initStyles = {
  backgroundColor: '#555',
  backgroundImage: '',
  showcaseWidth: 450,
  showcaseHeight: 600
};
const initStatus = {
  showSettingPanel: false,
  showBakcolorInput: false
};
const initAnimate = {
  enter: 'normal',
  out: 'normal'
};

const pageState = [{
    styles: initStyles,
    status: initStatus,
    animation: initAnimate
}];

function pageConf(state = pageState, action) {
  switch (action.type) {
    case TYPES.DOA.ADD_PAGE:
      return [...state, {
        styles: initStyles,
        status: initStatus,
        animation: initAnimate
      }];
    case TYPES.SET_STYLES.SET_BAK_COLOR:
      return setBackgroundColor(state, action);
    case TYPES.SET_STATUS.TOGGLE_SETTING_PANEL:
      return toggleSettingPanel(state, action);
    case TYPES.SET_STATUS.TOGGLE_BAKCOLOR_INPUT:
      return toggleBakcolorInput(state, action);
    default:
      return state;
  }
}
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
// function addPage(state=initialState,action){
//   if(action.type === types.ADD_PAGE){
//     let _count = state.pageCount+1;
//     return Object.assign({},state,{
//       pageCount: _count,
//       pages:[...state.pages,{
//         styles: {
//           backgroundColor: '#555',
//           backgroundImage: '',
//           showcaseWidth: 450,
//           showcaseHeight: 600
//         },
//         status: {
//           showpanel: false,
//           showBackcolorInput: false
//         },
//         animation: {
//           enter: 'normal',
//           out: 'normal'
//         }
//       }]
//     });
//   }
//   return state;
// }
// export function setStyles(state = initialState, action) {
//   let _styles = state.pages[action.index].styles;
//   switch (action.type) {
//     case types.SET_BAK_COLOR:
//       Object.assign(_styles,{
//         backgroundColor: action.color
//       });
//       return Object.assign({},state,{
//         pages: [
//           ...state.pages.slice(0,action.index),
//           Object.assign({},state.pages[action.index],{
//             styles: _styles
//           })
//           ...state.pages.slice(action.index + 1)
//         ]
//       });
//     case types.SET_BAK_IMAGE:
//       return [
//         ...state.slice(0, action.index),
//         Object.assign({}, state[action.index], Object.assign({},state[action.index].styles,{
//           backgroundImage: action.image
//         })),
//         ...state.slice(action.index + 1)
//       ];
//     case types.SET_WIDTH:
//       return [
//         ...state.slice(0, action.index),
//         Object.assign({}, state[action.index], Object.assign({},state[action.index].styles,{
//           showcaseWidth: action.width
//         })),
//         ...state.slice(action.index + 1)
//       ];
//     case types.SET_HEIGHT:
//       return [
//         ...state.slice(0, action.index),
//         Object.assign({}, state[action.index], Object.assign({},state[action.index].styles,{
//           showcaseHeight: action.height
//         })),
//         ...state.slice(action.index + 1)
//       ];
//     default:
//       return state;
//   }
// }
// export function setStatus(state=initialState.pages,action){
//   switch(action.type){
//     case types.TOGGLEPANEL:
//       return [
//         ...state.slice(0, action.index),
//         Object.assign({},state[action.index],{
//           status: Object.assign({},state[action.index].status,{
//             showpanel: action.isshown
//           })
//         }),
//         ...state.slice(action.index + 1)
//       ];
//     case types.TOGGLEBAKCOLORINPUT:
//       return [
//         ...state.slice(0, action.index),
//         Object.assign({},state[action.index],{
//           status:Object.assign({},state[action.index].status,{
//             showBackcolorInput: action.isshown
//           })
//         }),
//         ...state.slice(action.index + 1)
//       ];
//     default:
//       return state;
//   }
// }
// export function setAnimate(state = initialState.pages, action) {
//   switch(action.type) {
//     case types.SET_ANIMATE_OUT:
//       return Object.assign({}, state, {
//         out: action.animation
//       });
//     case types.SET_ANIMATE_ENTER:
//       return Object.assign({}, state, {
//         enter: action.animation
//       });
//     default:
//       return state;
//   }
// }
export default combineReducers({
  pageConf
});
