import React from 'react';
import { useState } from 'react/cjs/react.development';

export const PersonFind = () => {


    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [fatherName, setFatherName] = useState("");

    const onFindSumbit = e => {
        e.preventDefault();

        if (!lastName) return;
        if (!firstName) return;
        if (!fatherName) return;

        
    }
    return (
        <form className="person-find" onSubmit={onFindSumbit}>
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
            <button type="submit">Find person</button>
        </form>
    );

};