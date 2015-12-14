import * as TYPES from '../constants';

export function addPage(){
  return {
    type: TYPES.DOA.ADD_PAGE
  }
}
export function setBakColor(color,index) {
  return { type: TYPES.SET_STYLES.SET_BAK_COLOR, color,index };
}
export function setStatus(nextStatus,index) {
  return { type: TYPES.SET_STATUS.TOGGLE_SETTING_PANEL, nextStatus,index };
}

export function toggleBakcolorInput(nextStatus,index) {
  return { type: TYPES.SET_STATUS.TOGGLE_BAKCOLOR_INPUT, nextStatus,index };
}

// export function doa(action,index){
//   return {
//     type: TYPES.DOA,
//     action,
//     index
//   };
// }

// export function setStyles(action,opts,index){
//   return {
//     type: TYPES.SET_STYLES,
//     action,
//     opts,
//     index
//   }
// }
//
// export function setStatus(action,opts,index){
//   return {
//     type: TYPES.SET_STATUS,
//     action,
//     opts,
//     index
//   }
// }
