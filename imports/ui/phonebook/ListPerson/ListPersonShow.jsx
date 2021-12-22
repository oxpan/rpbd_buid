import React from 'react';
import { PhoneBook_Collection } from '../../../api/phonebook';
import { useTracker } from 'meteor/react-meteor-data';
import { ListPerson } from './ListPerson';
import { ListAddressShow } from '../ListAddress/ListAddressShow';

const deletePerson = ({_id}) => PhoneBook_Collection.remove(_id);
// const viewPersonAtributes = ({_id}) => {
//     <div>
//         <ul>
//             <ListAddressShow/>
//         </ul>
//     </div>
// }
export const ListPersonShow = () => {

    const Collection = useTracker(() => PhoneBook_Collection.find().fetch());

    return (
        <div>
            <ol>
                {Collection.map(phonebook => <ListPerson
                key={phonebook._id} 
                phonebook={phonebook}
                onDeleteClick={deletePerson}
                // onViewClick={viewPersonAtributes}
                />)}
                
                {/* <ListAddressShow/> */}

            </ol>
        </div>
    )
}