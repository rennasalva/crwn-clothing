const INITAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITAL_STATE,action) =>{
    //console.log('action payload', action.payload);
    switch(action.type){
            case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser : action.payload
            }
            default:
                return state;    
    }
};

export default userReducer;