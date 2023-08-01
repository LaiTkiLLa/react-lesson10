import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {listReducer} from "./list-reducer";
import {serviceReducer} from "./service-reducer";
import {filterReducer} from "./filter-reducer";

const rootReducer = combineReducers({
    list: listReducer,
    service: serviceReducer,
    filter: filterReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']