import React from 'react';

export const ListPhoneNumber = ({phonebook}) =>{
    return <li>{phonebook.mobile} 
    {phonebook.work} 
    {phonebook.home}</li>
}