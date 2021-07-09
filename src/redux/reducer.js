import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};