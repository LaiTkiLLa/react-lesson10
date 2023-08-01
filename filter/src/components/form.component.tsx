import React, {ChangeEvent, FormEvent} from "react";
import uuid from "react-uuid";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {cleanValue, setUserValue} from "../redux/service-reducer";
import {saveValue} from "../redux/list-reducer";
import {Filter} from "./filter.component";
import {Item} from "./item.component";
import {State} from "../types/data.types";

export const Form: React.FC = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector((state) => state.list)
    const filter = useAppSelector((state) => state.filter)
    const {name, sum} = useAppSelector((state) => state.service)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(saveValue({name, sum, id: uuid()}))
        dispatch(cleanValue())

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        dispatch(setUserValue({name, sum: value}))
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
                <Filter/>
                <div>
                    {!filter
                        ? state.map((item) => (
                            <div key={uuid()} style={{display: 'flex'}}>
                                <Item item={item}/>
                            </div>))
                        : <div>
                            {state.filter((item) => item.name.includes(filter)).map((item: State) => (
                                <div key={uuid()} style={{display: 'flex'}}>
                                    <Item item={item}/>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </form>
        </>

    )
}