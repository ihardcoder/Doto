import * as types from '../constants';

export function setBakColor(color) {
  return { type: types.SET_BAK_COLOR, color };
}
