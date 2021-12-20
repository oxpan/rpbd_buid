import { Mongo } from 'meteor/mongo'
import React, { useState } from 'react';
import { Address_Collection, Street_Collection } from '../../api/phonebook';

import { useTracker } from 'meteor/react-meteor-data';
import { StreetForm } from './Street/StreetForm';
import { Street } from './Street/Street';



export const AddressForm = () => {
    
    const [home, setHome] = useState("");
    const [apartment, setApartment] = useState("");
    const [stre, setStre] = useState("")
    const StreetBuff = useTracker(() => Street_Collection.find({}).fetch());

    const onAddSumbit = e => {
        e.preventDefault();

        if (!home) return;
        if (!apartment) return;
        
        Address_Collection.insert({
            idStreet: stre.trim(),
            home: home.trim(),
            apartment: apartment.trim()
        })

        // Street_Collection.insert({
        //     // idAdrees: {_id: new Mongo.ObjectID(StreetForm)}, 
        //     idStreet: stre.trim(),
        //     home: home.trim(),
        //     apartment: apartment.trim()
        // })
    }
    
    return (
        <form className="address-form" onSubmit={onAddSumbit}>
            {/* сюда нужно добавить выпадающий список с имеющими улицами */}
            <input
                type={"text"}
                placeholder='street'
                list='st'
                onChange={(e)=>setStre(e.target.value)}
                />
            <datalist id="st">
                {StreetBuff.map(street => <Street key={street._id} street={street} />)}
            </datalist>
            
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

            {/* <ui>
                {StreetBuff.map(street => <Street key={street._id} street={street} />)}
            </ui> */}
        </form>
        
    )

};