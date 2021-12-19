import { Mongo } from 'meteor/mongo'
import React, { useState } from 'react';
import { StreetForm } from './Street/StreetForm';



export const AddressForm = () => {
    
    const [home, setHome] = useState("");
    const [apartment, setApartment] = useState("")

    const onAddSumbit = e => {
        e.preventDefault()

        if (!home) return;
        if (!apartment) return;

        Street_Collection.insert({
            // idAdrees: {_id: new Mongo.ObjectID(StreetForm)}, 
            home: home.trim(),
            apartment: apartment.trim()
        })
    }
    
    return (
        <form className="address-form" onSubmit={onAddSumbit}>
            {/* сюда нужно добавить выпадающий список с имеющими улицами */}
            <input 
                type={"number"}
                placeholder='home'
                value={home}
                onChange={(e) => setHome(e.target.value)}
                />
            <input
                type={"number"}
                placeholder='apartment'
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                />

            <button type="submit">Add stret</button>
        </form>
    )

};