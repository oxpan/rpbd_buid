import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { StreetForm } from './address/Street/StreetForm.jsx';
import { AddressForm } from './address/AddressForm.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    {/* <Hello/> */}
    {/* <StreetForm/> */}

    <AddressForm/>
    {/* <Info/> */}

    
  </div>
);
