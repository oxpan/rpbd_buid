import React from 'react';
import { useState } from 'react/cjs/react.development';
import { PhoneBook_Collection } from '../../api/phonebook';


export const PersonForm = () => {

    let lastName;
    let firstName;
    let fatherName;
    const [buffer, setBuffer] = useState("");
    



    const onAddSumbit = e => {
        e.preventDefault();

        const re = buffer.split(" ");
        if (re.length != 3 || re[2] === ""){
            console.log("NOOOOOOOOOOOO!");
            return;
        }         
        // console.log(re);
        lastName = re[0];
        firstName = re[1];
        fatherName = re[2];
        
        PhoneBook_Collection.insert({
            lastname: lastName,
            firstname: firstName,
            fathername: fatherName
        })

    }
    return (
        
        <form className="person-insert-form" onSubmit={onAddSumbit}>
            <input 
                type={"text"}
                placeholder='FIO:'
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
            <button type="submit">Add person</button>
        </form>
    );
    
};