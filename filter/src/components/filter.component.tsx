import React from "react";
import {filterValue} from "../redux/filter-reducer";
import {useAppDispatch} from "../hooks/redux";

export const Filter: React.FC = () => {

    const dispatch = useAppDispatch()

    const handleFilter = (e: any) => {
        dispatch(filterValue({filter: e.target.value}))
    }
    return (
        <input type="text" onChange={handleFilter} placeholder='Фильтр'/>
    )
}