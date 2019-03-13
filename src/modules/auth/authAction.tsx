import actionTypes from "../actionTypes";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token: string, userId: number) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const loginOk = (user: any) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
        }
    }
};

export const logOut = () => {
    return {
        type: actionTypes.AUTH_FAIL
    }
};