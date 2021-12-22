import React from 'react';
import { useState } from 'react/cjs/react.development';

export const PersonFind = () => {


    // const [lastName, setLastName] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [fatherName, setFatherName] = useState("");
    const [buffer,setBuffer] = useState("");

    const onFindSumbit = e => {
        e.preventDefault();

        // if (!lastName) return;
        // if (!firstName) return;
        // if (!fatherName) return;

        
    }
    return (
        <form className="person-find" onSubmit={onFindSumbit}>
            <input 
                type={"text"}
                placeholder='text find:'
                value={buffer}
                onChange={(e) => setBuffer(e.target.value)}
                />
            {/* <input
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
                /> */}
            <button type="submit">Find</button>
        </form>
    );

};