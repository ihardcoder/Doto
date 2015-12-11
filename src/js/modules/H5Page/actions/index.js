import * as types from '../constants';

export function setBakColor(color) {
  return { type: types.SET_BAK_COLOR, color };
}
export function setStatus(isshown) {
  return { type: types.TOGGLEPANEL, isshown };
}

export function toggleBakcolorInput(isshown) {
  return { type: types.TOGGLEBAKCOLORINPUT, isshown };
}
