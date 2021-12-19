import React, { useState } from 'react';


export const AddressForm = () => {
    
    const [home, setHome] = useState("");
    const [apartment, setApartment] = useState("")

    const onAddSumbit = e => {
        e.preventDefault()

        if (!home) return;
        if (!apartment) return;

        Street_Collection.insert({
            // idAdrees: 
            home: home.trim(),
            apartment: apartment.trim()
        })
    }
    
    

};