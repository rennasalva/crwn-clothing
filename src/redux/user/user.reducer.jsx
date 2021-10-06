import UserActionTypes from './user.types'
const INITAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITAL_STATE,action) =>{
    //console.log('action payload', action.payload);
    switch(action.type){
            case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser : action.payload
            }
            case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
            case UserActionTypes.SIGN_IN_FAILURE:
            case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error : action.payload
            }
            default:
                return state;    
    }
};

export default userReducer;