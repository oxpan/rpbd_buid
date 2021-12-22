import React from 'react';
import { PhoneBook_Collection } from '../../../api/phonebook';
import { useTracker } from 'meteor/react-meteor-data';
import { ListPerson } from './ListPerson';

export const ListPersonShow = () => {

    const Collection = useTracker(() => PhoneBook_Collection.find().fetch());

    return (
        <div>
            <ul>
                {Collection.map(phonebook => <ListPerson key={phonebook._id} phonebook={phonebook}/>)}
            </ul>
        </div>
    )
}