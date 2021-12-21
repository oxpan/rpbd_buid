import React from 'react';
import { useState } from 'react/cjs/react.development';
import { PhoneBook_Collection } from '../../api/phonebook';


export const PersonForm = () => {

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [fatherName, setFatherName] = useState("");



    const onAddSumbit = e => {
        e.preventDefault();

        if (!lastName) return;
        if (!firstName) return;
        if (!fatherName) return;

        PhoneBook_Collection.insert({
            lastname: lastName.trim(),
            firstname: firstName.trim(),
            fathername: fatherName.trim()
        })

    }
    return (
        
        <form className="person-insert-form" onSubmit={onAddSumbit}>
            <input 
                type={"text"}
                placeholder='lastName:'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            <input
                type={"text"}
                placeholder='ferstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            <input
                type={"text"}
                placeholder='fatherName'
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                />
            <button type="submit">Add person</button>
        </form>
    );
    
};