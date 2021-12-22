import React from 'react';

export const ListAddress = ({phonebook}) => {
    return <li>{phonebook.street} {phonebook.home} {phonebook.apartment}</li>
}