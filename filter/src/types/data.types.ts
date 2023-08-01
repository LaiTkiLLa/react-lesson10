import {CLEAN_VALUE, DELETE, EDIT, FILTER, SAVE, SET_USER_VALUE} from "../actions/actions";

export type Action = {
    type: typeof SAVE | typeof DELETE | typeof EDIT | typeof SET_USER_VALUE | typeof CLEAN_VALUE | typeof FILTER
    payload: {
        id: string,
        name: string,
        sum: number
    }

}

export type State = {
    id?: string,
    name: string,
    sum: number | string,
}

export type ListT = {
    state: State[],
    filter: string
}