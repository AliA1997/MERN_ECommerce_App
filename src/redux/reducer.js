//Define your initialState that will be used for the reducer. 
const initialState = {
    user: null
}

//Define your action types. 
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";


//When doing a default export with a reducer which is essentially a function with a state and action argument, with the state default set to initialState.
export default (state=initialState, action) => {
    //Do a switch statement on the action.type, and set the state base on the action's type 
    switch(action.type) {
        //Have the login action type that will set the initialState user property to the action's payload.
        case LOGIN:
        //Use the spread to pass in the values of the initialState, and set the new property user.
        return {...state, user: action.payload};
        //Have the logout action type that will set the initialState user property to null when user's logs out.
        case LOGOUT: 
        //Use the spread to pass in the values of the initialState, and set the new property user to it's default value(null).        
        return {...state, user: null};
        default:
        //if there is not action type return the state by default.
        return state;
    }
}

//Export the function that will login the user to it's initialState.
export const login = (userInfo) => {
    return {
        type: LOGIN,
        payload: userInfo
    }
}

//Export the function that will logs the user out from state.
export const logout = () => {
    return {
        type: LOGOUT
    }
}

