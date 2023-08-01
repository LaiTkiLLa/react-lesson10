import {DELETE, SAVE} from "../actions/actions";
import {Action, State} from "../types/data.types";

const initialState: State[] = [{
    id: "1",
    name: 'Чистка ПК',
    sum: 1000
},
    {
        id: "2",
        name: 'Переустановка Windows',
        sum: 1500
    }]

export const listReducer = (state = initialState, action: Action): State[] => {
    switch (action.type) {
        case SAVE:
            const index = state.findIndex((item) => item.name === action.payload.name)
            if (index !== -1) {
                // state[index].sum = Number(action.payload.sum)
                // return state
                const updatedItem = { ...state[index], sum: Number(action.payload.sum) };
                return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)];
            }
            else {
                return [...state, {name: action.payload.name, sum: action.payload.sum, id: action.payload.id}
                ]
            }
        case DELETE:
            return state.filter((item) => item.name !== action.payload.name)
        default:
            return state
    }
}

export const saveValue = (payload: State) => {
    return {
        type: SAVE,
        payload
    }
}

export const deleteValue = (payload: any) => {
    return {
        type: DELETE,
        payload
    }
}