import React from 'react';

export const ListPerson = ({phonebook}) => {
    return <li>{phonebook.lastname} {phonebook.firstname} {phonebook.fathername}</li>
}