import { SIZE, SPEED } from "../actions"

const optionsReducer = (state, action) => {
    switch(action.type) {
        case SIZE:
            return {...state, size: action.payload}
        case SPEED:
            return {...state, speed: action.payload}
        default:
            return state
    }
}

export default optionsReducer