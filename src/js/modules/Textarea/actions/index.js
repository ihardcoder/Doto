import * as types from '../constants';
const module = 'Textarea';

// 删除
export function destory(pageIndex,moduleId,moduleIndex){
  return {
    type: types.DOA_DEL,
    module,
    pageIndex,
    moduleId,
    moduleIndex
  };
}
// 修改文案
export function setText(text,pageIndex,moduleId,moduleIndex){
  return {
    type: types.SET_TEXT,
    module,
    text,
    pageIndex,
    moduleId,
    moduleIndex
  };
}
// 修改字号
export function setFontsize(fontsize,pageIndex,moduleId,moduleIndex){
  return {
    type: types.SET_FONTSIZE,
    module,
    fontsize,
    pageIndex,
    moduleId,
    moduleIndex
  };
}
// 修改字色
export function setFontcolor(color,pageIndex,moduleId,moduleIndex){
  return {
    type: types.SET_FONTCOLOR,
    module,
    color,
    pageIndex,
    moduleId,
    moduleIndex
  };
}
// 修改字色input的显示&隐藏
export function toggleFontcolorInput(nextStatus,pageIndex,moduleId,moduleIndex){
  return{
    type: types.TOGGLE_FONTCOLOR_INPUT,
    module,
    nextStatus,
    pageIndex,
    moduleId,
    moduleIndex
  }
}
// 修改文案input的显示&隐藏
export function toggleTextinput(nextStatus,pageIndex,moduleId,moduleIndex){
  return{
    type: types.TOGGLE_TEXT_INPUT,
    module,
    nextStatus,
    pageIndex,
    moduleId,
    moduleIndex
  }
}
// operater设置面板的显示&隐藏
export function toggleSettingPanel(nextStatus,pageIndex,moduleId,moduleIndex){
  return{
    type: types.TOGGLE_SETTING_PANEL,
    module,
    nextStatus,
    pageIndex,
    moduleId,
    moduleIndex
  }
}
// 修改坐标
export function setCoordinate(coordinate,pageIndex,moduleId,moduleIndex){
  return{
    type: types.SET_COORDINATE,
    module,
    coordinate,
    pageIndex,
    moduleId,
    moduleIndex
  }
}
