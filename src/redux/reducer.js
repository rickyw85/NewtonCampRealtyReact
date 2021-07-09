import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { NEWTON } from '../shared/newton';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    newton: NEWTON
};

export const Reducer = (state = initialState, action) => {
    return state;
};