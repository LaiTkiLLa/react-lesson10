import React from "react";
import {State} from "../types/data.types";
import {deleteValue} from "../redux/list-reducer";
import {useAppDispatch} from "../hooks/redux";
import {editValue} from "../redux/service-reducer";

export const Item: React.FC<{item: State}> = ({item}) => {

    const dispatch = useAppDispatch()

    const handleDelete = (name: string) => {
        dispatch(deleteValue({name}))
    }

    const handleEdit = (e: any) => {
        const {name, value} = e.target
        dispatch(editValue({name, sum: value}))
    }

    return (
        <>
            <div style={{marginRight: 30}}> {item.name} {item.sum}</div>
            <button name={item.name} value={item.sum} style={{marginRight: 10}} onClick={handleEdit}>Edit
            </button>
            <button onClick={() => handleDelete(item.name)}>Delete</button>
        </>
    )
}