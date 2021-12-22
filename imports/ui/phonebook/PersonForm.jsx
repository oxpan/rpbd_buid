import React from 'react';
import { useState } from 'react/cjs/react.development';
import { PhoneBook_Collection } from '../../api/phonebook';
import { Mongo } from 'meteor/mongo';

export const PersonForm = () => {

    let lastName;
    let firstName;
    let fatherName;
    let street;
    let home;
    let apartment;
    let mobilePhone;
    let workPhone;
    let homePhone;
    const [buffer, setBuffer] = useState("");
    const [bufferAddress, setBufferAddress] = useState("")

    



    const onAddSumbit = e => {
        e.preventDefault();

        const re = buffer.split(" ");
        if (re.length != 3 || re[2] === ""){
            console.log("Error!");
            return;
        }         
        // console.log(re);
        lastName = re[0];
        firstName = re[1];
        fatherName = re[2];
        
        // PhoneBook_Collection.insert({
        //     lastname: lastName,
        //     firstname: firstName,
        //     fathername: fatherName
        // })
        
    }
    return (
        
        <form className="person-insert-form" >
            
                <div className='person-form' /*onSubmit={onAddSumbit}*/>
                    <span className='span1'>
                        <div>
                    <input 
                        type={"text"}
                        placeholder='FIO:'
                        value={buffer}
                        onChange={(e) => setBuffer(e.target.value)}
                        />
                    <input
                        type={"text"}
                        placeholder='PhoneNumber'
                        />
                    
                    <input
                        type={"text"}
                        placeholder='Assress:'
                        />
                        </div>
                        
                        <div>
                        <input name='radiob' type={"radio"} id='rad1'/>
                        <label htmlFor="rad1">find</label>
                        <input name='radiob' type={"radio"} id='rad2'/>
                        <label htmlFor="rad2">create</label>
                        <button type="submit">Исполнить</button>
                        </div>
                    </span>
                    <span className='span2'> 
                        <div>
                            <button >ФИО список</button>
                        </div>
                        <div>
                            <button >4 цыфры</button>
                        </div>
                    </span>
                </div>
                <div>
                <label>Данные адреса:</label>
                    <div>
                        
                    <input 
                            type={"text"}
                            placeholder='street:'
                            // value={buffer}
                            // onChange={(e) => setBuffer(e.target.value)}
                            />
                        <input 
                            type={"number"}
                            placeholder='home:'
                            // value={buffer}
                            // onChange={(e) => setBuffer(e.target.value)}
                            />
                        <input 
                            type={"number"}
                            placeholder='apartment:'
                            // value={buffer}
                            // onChange={(e) => setBuffer(e.target.value)}
                            />
                    </div>
                    <label>Номера:</label>
                    <div>
                    <input 
                        type={"text"}
                        placeholder='mobilePhone:'
                        // value={buffer}
                        // onChange={(e) => setBuffer(e.target.value)}
                        />
                    </div>
                    <div>
                    <input 
                        type={"text"}
                        placeholder='workPhone:'
                        // value={buffer}
                        // onChange={(e) => setBuffer(e.target.value)}
                        />
                    </div>
                    <div>
                    <input 
                        type={"text"}
                        placeholder='homePhone:'
                        // value={buffer}
                        // onChange={(e) => setBuffer(e.target.value)}
                        />
                    </div>
                    
                </div>

                <div>
                <button >обновить</button>
                <button >удалить</button>
                </div>
                <div>
                    <p>tut vivod</p>
                </div>
        </form>
    );
    
};