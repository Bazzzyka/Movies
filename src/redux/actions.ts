import { HIDE, SHOW } from './constants';

export const hide = (id: number) => ({ type: HIDE, id });
export const show = (id: number) => ({ type: SHOW, id });