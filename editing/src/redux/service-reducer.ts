import {EDIT, SET_USER_VALUE, CLEAN_VALUE} from "../actions/actions";
import {Action, State} from "../types/data.types";

const initialState: State = {
    name: '',
    sum: 0
}

export const serviceReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_USER_VALUE:
            return {...state, [action.payload.name]: action.payload.sum}
        case EDIT:
            return {name: action.payload.name, sum: action.payload.sum};
        case CLEAN_VALUE:
            return {name: '', sum: 0}
        default:
            return state
    }
}

export const setUserValue = (payload: State) => {
    return {
        type: SET_USER_VALUE,
        payload
    }
}

export const editValue = (payload: State) => {
    return {
        type: EDIT,
        payload
    }
}

export const cleanValue = () => {
    return {
        type: CLEAN_VALUE
    }
}