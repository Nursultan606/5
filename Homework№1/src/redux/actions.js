import { types } from './types';

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
export const increment10 = () => ({ type: types.INCREMENT_10 });
export const decrement10 = () => ({ type: types.DECREMENT_10 });
export const reset = () => ({ type: types.RESET });
