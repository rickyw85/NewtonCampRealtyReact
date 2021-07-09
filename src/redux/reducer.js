import { HOUSES } from '../shared/houses';
import { DESCRIPTIONS } from '../shared/descriptions';
import { NEWTON } from '../shared/newton';

export const initialState = {
    houses: HOUSES,
    descriptions: DESCRIPTIONS,
    newton: NEWTON
};

export const Reducer = (state = initialState, action) => {
    return state;
};