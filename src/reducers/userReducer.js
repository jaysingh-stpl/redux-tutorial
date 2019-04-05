/**
 * Created by jay on 5/4/19.
 */
const userReducer = (state = {
    name: 'Jay Singh',
    age: 27
}, action)=> {
    switch (action.type) {
        case "SET_NAME_FULFILLED":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};
export default userReducer; 