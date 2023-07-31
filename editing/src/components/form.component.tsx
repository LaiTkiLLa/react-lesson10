import React, {ChangeEvent, FormEvent} from "react";
import uuid from "react-uuid";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {cleanValue, editValue, setUserValue} from "../redux/service-reducer";
import {deleteValue, saveValue} from "../redux/list-reducer";

export const Form: React.FC = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector((state) => state.list)
    const {name, sum} = useAppSelector((state) => state.service)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(saveValue({name, sum, id: uuid()}))
        dispatch(cleanValue())

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        dispatch(setUserValue({name, sum: Number(value)}))
    }

    const handleEdit = (e: any) => {
        const {name, value} = e.target
        dispatch(editValue({name, sum: Number(value)}))
    }

    const handleDelete = (name: string) => {
        dispatch(deleteValue({name}))
    }

    const handleReset = () => {
        dispatch(cleanValue())
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} onChange={handleChange}/>
                <input type="number" name='sum' value={sum} onChange={handleChange}/>
                <button>Save</button>
                <button type='button' onClick={handleReset}>Cancel</button>
            </form>
            {state.map((item) => (
                <div key={uuid()} style={{display: 'flex'}}>
                    <div style={{marginRight: 30}}> {item.name} {item.sum}</div>
                    <button name={item.name} value={item.sum} style={{marginRight: 10}} onClick={handleEdit}>Edit</button>
                    <button onClick={() => handleDelete(item.name)}>Delete</button>
                </div>
            ))}

        </>

    )
}