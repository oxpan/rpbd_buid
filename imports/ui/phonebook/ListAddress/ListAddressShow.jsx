import React from 'react';
import { PhoneBook_Collection } from '../../../api/phonebook';
import { ListAddress } from './ListAddress';
import { useTracker } from 'meteor/react-meteor-data';
import { ListPerson } from '../ListPerson/ListPerson';

let currIndex;

const current_index = ({_id}) => {
    currIndex = _id;
}

export const ListAddressShow = () => {

    const cCollection = useTracker(() => PhoneBook_Collection.find().fetch());
    cCollection.map(phonebook => <ListPerson key={phonebook._id} phonebook={phonebook} onMiniList={current_index}/>);
    

    const Collection = useTracker(() => PhoneBook_Collection.find(currIndex).fetch());
    
    console.log("BBBBB");
        return (
             <div>
                <ol>
                {Collection.map(phonebook => <ListAddress
                key={phonebook._id} 
                phonebook={phonebook}
                />)}
                </ol> 
            </div>
        )

}