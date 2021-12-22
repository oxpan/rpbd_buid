import React from 'react';
import { ListAddress } from '../ListAddress/ListAddress';
import { ListAddressShow } from '../ListAddress/ListAddressShow';

export const ListPerson = ({phonebook,onViewClick,onReadClick,onDeleteClick,onMiniList}) => {
    return <li>
        
        <details>
            <summary>
                <span>{phonebook.lastname} {phonebook.firstname} {phonebook.fathername}</span>
                {/* <button onClick={() => onViewClick(phonebook)}>🔻</button> */}
                <button onClick={() => onReadClick(phonebook)}>🖊</button>
                <button onClick={() => onDeleteClick(phonebook)}>❌</button>
            </summary>
            {/* <ul>
                <ListAddressShow/>
            </ul> */}
        </details>
            

        </li>
}