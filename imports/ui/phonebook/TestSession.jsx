import React from 'react';
import { useState } from 'react/cjs/react.development';
import { PhoneBook_Collection } from '../../api/phonebook';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session'




export const TestSession = () => {
    let lastName;
    let firstName;
    let fatherName;
    const [buffer, setBuffer] = useState("");
    
    var myData = {
            key1: "value1",
            key2: "value2"
         }

        Session.set('mySession', myData);
        var sessionDataToLog = Session.get('mySession');
        console.log(sessionDataToLog);
    
    
    const onAddSumbit = e => {
        e.preventDefault();
    
        const re = buffer.split(" ");
        if (re.length != 3 || re[2] === ""){
            console.log("Error!");
            return;
        }         
        // console.log(re);
        lastName = re[0];
        firstName = re[1];
        fatherName = re[2];


        // 
        
        PhoneBook_Collection.insert({
            lastname: lastName,
            firstname: firstName,
            fathername: fatherName
        })
        // PhoneBook_Collection.addShard({
        //     lastname: lastName,
        //     firstname: firstName,
        //     fathername: fatherName
        // })
    }
    return(
        <form className="person-insert-form" onSubmit={onAddSumbit}>
        <input 
            type={"text"}
            placeholder='FIO:'
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
            />
        <button type="submit">Add person</button>
    </form>
    )
}