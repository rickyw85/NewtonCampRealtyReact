import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { NEWTON } from '../shared/newton';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    newton: NEWTON
};

export const Reducer = (state = initialState, action) => {
    return state;
};