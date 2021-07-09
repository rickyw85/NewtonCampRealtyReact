import { CAMPSITES } from '../shared/campsites';
import { DESCRIPTIONS } from '../shared/descriptions';
import { NEWTON } from '../shared/newton';

export const initialState = {
    campsites: CAMPSITES,
    descriptions: DESCRIPTIONS,
    newton: NEWTON
};

export const Reducer = (state = initialState, action) => {
    return state;
};