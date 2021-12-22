import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { ListPersonShow } from './phonebook/ListPerson/ListPersonShow.jsx';
import { PersonFind } from './phonebook/PersonFind.jsx';
import { PersonForm } from './phonebook/PersonForm.jsx';

export const App = () => (
  <div>
    <h1>PhoneBook:</h1>
    {/* <Hello/> */}
    {/* <PersonForm/> */}
    {/* <PersonFind/> */}
    <ListPersonShow/>
    {/* <Info/> */}
  </div>
);
