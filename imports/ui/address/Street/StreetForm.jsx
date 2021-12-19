import React, { useState } from 'react';
import { Street_Collection } from '../../../api/phonebook';


export const StreetForm = () => {
    const [name, setName] = useState("");

    const onAddSumbit = e => {
        e.preventDefault()

        if (!name) return;

        Street_Collection.insert({
            name: name.trim()
        })
    }

    return (
        <form className="street-form" onSubmit={onAddSumbit}>
            <input 
                type={"text"}
                placeholder='street add !'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

            <button type="submit">Add stret</button>
        </form>
    )
};