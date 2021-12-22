import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { ListPersonShow } from './phonebook/ListPerson/ListPersonShow.jsx';
import { PersonFind } from './phonebook/PersonFind.jsx';
import { PersonForm } from './phonebook/PersonForm.jsx';
import { menuInterface } from './ViewContrModel/menuInterface.jsx';

export const App = () => (
  <div>
    <h1>PhoneBook:</h1>

    {/* здесь будет поиск */}
    {/* <Hello/> */}
  
    {/* <PersonFind/> */}
    {/* <ListPersonShow/> */}

    {/* <menuInterface/>
     */}
     {/* <menuInterface /> */}
    <PersonForm/>


    {/* <Info/> */}
  </div>
);
