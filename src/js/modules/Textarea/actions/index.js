import * as types from '../constants';

export function setText(text,pageIndex,moduleId,moduleIndex){
  return {
    type: types.SET_MODUEL_TEXTAREA_TEXT,
    text,
    pageIndex,
    moduleId,
    moduleIndex
  };
}

export function setFontsize(fontsize,pageIndex,moduleId,moduleIndex){
  return {
    type: types.SET_MODUEL_TEXTAREA_STYLE_FONTSIZE,
    fontsize,
    pageIndex,
    moduleId,
    moduleIndex
  };
}
