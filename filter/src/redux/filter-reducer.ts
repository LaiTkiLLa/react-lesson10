import {Action} from "../types/data.types";
import {FILTER} from "../actions/actions";

export const filterReducer = (state = '', action: any ) => {
    switch (action.type) {
        case FILTER:

            return action.payload.filter
            // const {filter} = action.payload
            // console.log(filter)
            // if (filter) {
            //     return state.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
            // }
            // console.log(1)
            // console.log(state)
            // return state
        default:
            return state
    }

}

export const filterValue = (payload: any) => {
    return {
        type: FILTER,
        payload
    }
}