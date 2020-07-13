import * as constants from './../constants/constant'

var initState = constants.WELCOME;


const message = (state = initState, action) => {
    switch (action.type) {
        case constants.CHANGE_MSG:
            return action.message;
        default: return [...state]
    }
}

export default message;