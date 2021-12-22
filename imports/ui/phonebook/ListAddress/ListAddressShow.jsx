import React from 'react';
import { PhoneBook_Collection } from '../../../api/phonebook';

export const ListAddressShow = () => {

    if(PhoneBook_Collection.find({})){
        console.log("BBBBB");
        return (
            <div>
                <p>BBBB</p>
            </div>
        )
    }
    else{
        console.log("AAAAA");
        return (
            <div>
                <p>AAAA</p>
            </div>
        )
    }
}