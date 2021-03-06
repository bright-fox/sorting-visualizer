import { SIZE, SORT, SPEED, START, STOP } from "../actions"

const optionsReducer = (state, action) => {
    switch(action.type) {
        case SIZE:
            return {...state, size: action.payload, start: false}
        case SPEED:
            return {...state, speed: action.payload}
        case SORT:
            return {...state, sortAlgo: action.payload, start: false}
        case START:
            return {...state, start: true}
        case STOP:
            return {...state, start: false}
        default:
            return state
    }
}

export default optionsReducer