import { Mongo } from 'meteor/mongo'
import React, { useState } from 'react';
import { Address_Collection, Street_Collection } from '../../api/phonebook';
import {findBuff} from '../../api/secondaryFunctions';

import { useTracker } from 'meteor/react-meteor-data';
import { StreetForm } from './Street/StreetForm';
import { Street } from './Street/Street';



export const AddressForm = () => {
    
    const [home, setHome] = useState("");
    const [apartment, setApartment] = useState("");
    const [stre, setStre] = useState("")
    const StreetBuff = useTracker(() => Street_Collection.find({}).fetch());
    // console.log('grim' === StreetBuff.some(treet=><li key={treet._id}>{treet.name}</li>));

    console.log(StreetBuff[2].name);
    console.log("gog")
    console.log(StreetBuff[2]._id);

    // console.log(findBuff(StreetBuff,"gog"));

    

    const onAddSumbit = e => {
        e.preventDefault();

        if (!home) return;
        if (!apartment) return;
        if (!stre) return;

        let idStreet;
        for(let i = 0; i < StreetBuff.length;i++){
            if (stre === StreetBuff[i].name){
                idStreet = StreetBuff[i]._id;
            }
        }
        // if (stre === StreetBuff.name) 
        
        Address_Collection.insert({
            idStreet: idStreet,
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
            <input
                type={"text"}
                placeholder='street'
                list='st'
                value={stre}
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
            
           

            <button type="submit">Add street</button>

            {/* <ui>
                {StreetBuff.map(street => <Street key={street._id} street={street} />)}
            </ui> */}
        </form>
        
    )

};