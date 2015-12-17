import * as types from '../constants';

export function setText(text,pageIndex,moduleId,moduleIndex){
  return {
    type: types.SET_TEXT,
    text,
    pageIndex,
    moduleId,
    moduleIndex
  };
}

export function setFontsize(fontsize,pageIndex,moduleId,moduleIndex){
  return {
    type: types.SET_FONTSIZE,
    fontsize,
    pageIndex,
    moduleId,
    moduleIndex
  };
}

export function toggleTextinput(nextStatus,pageIndex,moduleId,moduleIndex){
  return{
    type: types.TOGGLE_TEXT_INPUT,
    nextStatus,
    pageIndex,
    moduleId,
    moduleIndex
  }
}
export function toggleSettingPanel(nextStatus,pageIndex,moduleId,moduleIndex){
  return{
    type: types.TOGGLE_SETTING_PANEL,
    nextStatus,
    pageIndex,
    moduleId,
    moduleIndex
  }
}
export function setCoordinate(coordinate,pageIndex,moduleId,moduleIndex){
  return{
    type: types.SET_COORDINATE,
    coordinate,
    pageIndex,
    moduleId,
    moduleIndex
  }
}
