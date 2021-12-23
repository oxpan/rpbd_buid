import React from 'react';
import { useState } from 'react/cjs/react.development';

export const PersonFind = () => {


  
    const [buffer,setBuffer] = useState("");

    const onFindSumbit = e => {
        e.preventDefault();


        
    }
    return (
        <form className="person-find" onSubmit={onFindSumbit}>
            <input 
                type={"text"}
                placeholder='text find:'
                value={buffer}
                onChange={(e) => setBuffer(e.target.value)}
                />
            <button type="submit">Find</button>
        </form>
    );

};