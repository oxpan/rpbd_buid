import React from 'react';
import { useState } from 'react/cjs/react.development';
import { PhoneBook_Collection } from '../../api/phonebook';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';

export const PersonForm = () => {

    let lastName;
    let firstName;
    let fatherName;
    const [buffer, setBuffer] = useState({FIO:"",phone:"",address:""});
    



    function Insert() {
        let IDcurrent;

        const re = buffer.FIO.split(" ");
        if (re.length != 3 || re[2] === ""){
            console.log("Error!");
            return;
        }         
        // console.log(re);
        lastName = re[0];
        firstName = re[1];
        fatherName = re[2];
        
        IDcurrent = PhoneBook_Collection.insert({
            lastname: lastName,
            firstname: firstName,
            fathername: fatherName
        });

        console.log(IDcurrent);

        var Person = {
            _id:IDcurrent,
            Lastname: re[0],
            Firstname: re[1],
            Fathername: re[2],
            Home: "",
            Appartement: "",
            Street: "",
            MobilePhone: "",
            WorkPhone:"",
            HomePhone:""
        }
        Session.set('currentPerson', Person);
        // var sessionDataToLog = Session.get('currentPerson');
        // console.log(sessionDataToLog);
    }

    function Find(){
        const fio_buff = buffer.FIO.split(" ");
        const address_buff = buffer.address.split(" ");
        const phone_buff = buffer.phone.split(" ");
        if (fio_buff.length != 3 || fio_buff[2] === ""){
            console.log("FIOError!");
            return;
        }
        if (address_buff.length != 3 || address_buff[2] === ""){
            console.log("addressError!");
            return;
        }
        if (phone_buff.length != 2 || phone_buff[1] === ""){
            console.log("phoneError!");
            return;
        }

        if(phone_buff[0] === "m"){

        }else if (phone_buff[0] === "w"){

        }else {

        }
    }


    function filler(){
        var sessionDataToLog = Session.get('currentPerson');
        // console.log(sessionDataToLog);
    }

    const ExecuteHandler = e => {
        e.preventDefault();
        if (rad1.checked == false){
            Insert();
        }
        
    }

    return (
        
        <div className="person-insert-form" >
            
        <div className='person-form' /*onSubmit={onAddSumbit}*/>
            <span className='span1' >
                {/* <div> */}
                <form>
            <input 
                type={"text"}
                placeholder='FIO:'
                value={buffer.FIO}
                onChange={(e) => setBuffer({FIO:e.target.value})}
                />
                
            <input
                // title='формат ввода [T X(XXX)XXX-XX-XX] T: mobile, work, home'
                type={"text"}
                placeholder='PhoneNumber'
                value={buffer.phone}
                onChange={(e) => setBuffer({phone:e.target.value})}
                />
            
            <input
                type={"text"}
                placeholder='Assress:'
                value={buffer.address}
                onChange={(e) => setBuffer({address:e.target.value})}
                />
                {/* </div> */}
                
                {/* <div> */}
                <input name='radiob' type={"radio"} id='rad1'/>
                <label htmlFor="rad1">find</label>
                <input name='radiob' type={"radio"} id='rad2'/>
                <label htmlFor="rad2">create</label>
                
                {/* </div> */}
                <button type="submit" onClick={ExecuteHandler}>Исполнить</button>
                 </form>
            </span>
           


            <span className='span2'> 
                <div>
                    <button >ФИО список</button>
                </div>
                <div>
                    <button >4 цифры</button>
                </div>
            </span>
        </div>
        <div>
        <label>ФИО:</label>
        <div>
            <input type="text"
            placeholder='lastname'
            id='lastn'
            />
            <input type="text"
            placeholder='firstname'
            id='firstn'
            />
            <input type="text"
            placeholder='fathername'
            id='father'
            />

        </div>

        <label>Данные адреса:</label>
            <div>
                
            <input 
                    type={"text"}
                    placeholder='street:'
                    id='street'
                    
                    />
                <input 
                    type={"number"}
                    placeholder='home:'
                    id='homeAddress'
                    />
                <input 
                    type={"number"}
                    placeholder='apartment:'
                    id='apartmentAddress'
                    />
            </div>
            <label>Номера:</label>
            <div>
            <input 
                type={"text"}
                placeholder='mobilePhone:'
                id='mobileP'
                />
            </div>
            <div>
            <input 
                type={"text"}
                placeholder='workPhone:'
                id='workP'
                />
            </div>
            <div>
            <input 
                type={"text"}
                placeholder='homePhone:'
                id='homeP'
                />
            </div>
            
        </div>

        <div>
        <button  >обновить</button>
        <button  >удалить</button>
        </div>
        <div>
            <p>tut vivod</p>
        </div>
</div>
    );
    
};