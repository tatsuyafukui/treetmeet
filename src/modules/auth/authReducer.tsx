import actionTypes from '../actionTypes';

const initialState = {
    uid: null,
    displayName: null,
    email: null,
    error: null,
    loading: false,
};

const authReducer = ( state = initialState, action: any ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START:
            return state;
        default:
            return state;
    }
};

export default authReducer;