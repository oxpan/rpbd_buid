import React from 'react';
import { ListAddress } from '../ListAddress/ListAddress';

export const ListPerson = ({phonebook,onViewClick,onReadClick,onDeleteClick}) => {
    return <li>
        

        <span>{phonebook.lastname} {phonebook.firstname} {phonebook.fathername}</span>
        <button onClick={() => onViewClick(phonebook)}>🔻</button>
        <button onClick={() => onReadClick(phonebook)}>🖊</button>
        <button onClick={() => onDeleteClick(phonebook)}>❌</button>

        </li>
}