import React from 'react';
import { useState } from 'react/cjs/react.development';
import { PhoneBook_Collection } from '../../api/phonebook';
import { Mongo } from 'meteor/mongo';
import { Session } from 'meteor/session';

export const PersonForm = () => {

    let lastName;
    let firstName;
    let fatherName;
    const [buffer, setBuffer] = useState({FIO:"",phone:"",address:""});//Drop
    
    function Insert() {
        let IDcurrent;
        const re = fiopersone.value.split(" ");
        if (re.length != 3 || re[2] === ""){
            console.log("Error!");
            return;
        }         
        lastName = re[0];
        firstName = re[1];
        fatherName = re[2];
        
        IDcurrent = PhoneBook_Collection.insert({
            Lastname: lastName,
            Firstname: firstName,
            Fathername: fatherName
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
        filler();
    }

    function Find(){
        let Tmp_Person;
        var ObjectPerson = new Object();
        // console.log(fiopersone.value);
        const fio_buff = fiopersone.value.split(" ");
        const address_buff = addressa.value.split(" ");
        const phone_buff = phonenumber.value.split(" ");
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

        ObjectPerson.Lastname = fio_buff[0];
        ObjectPerson.Firstname = fio_buff[1];
        ObjectPerson.Fathername = fio_buff[2];
        ObjectPerson.Street = address_buff[0];
        ObjectPerson.Home = address_buff[1];
        ObjectPerson.Appartement = address_buff[2];

        if(phone_buff[0] === "m"){
            ObjectPerson.MobilePhone = phone_buff[1];
            Tmp_Person = PhoneBook_Collection.findOne(ObjectPerson);
        }else if (phone_buff[0] === "w"){
            ObjectPerson.WorkPhone = phone_buff[1];
            Tmp_Person = PhoneBook_Collection.findOne(ObjectPerson);
        }else {
            ObjectPerson.HomePhone = phone_buff[1];
            Tmp_Person = PhoneBook_Collection.findOne(ObjectPerson);
        }
        
        if(Tmp_Person === undefined){
            console.log("undefined");
        }else{
            console.log(Tmp_Person);
            var Person = {
                _id: Tmp_Person._id,
                Lastname: Tmp_Person.Lastname,
                Firstname: Tmp_Person.Firstname,
                Fathername: Tmp_Person.Fathername,
                Home: Tmp_Person.Home,
                Appartement: Tmp_Person.Appartement,
                Street: Tmp_Person.Street,
                MobilePhone: Tmp_Person.MobilePhone,
                WorkPhone: Tmp_Person.WorkPhone,
                HomePhone: Tmp_Person.HomePhone
            }
            console.log(Person);
            Session.set('currentPerson', Person);
            filler();
        }

    }

    const reade = e => {
        e.preventDefault();
        console.log("<reade>");
        var sessionDataToLog = Session.get('currentPerson');
        if(sessionDataToLog === undefined) return;
        
        PhoneBook_Collection.update({"_id":sessionDataToLog._id},
                                            {"$set":{
                                                Lastname:lastn.value.trim(),
                                                Firstname:firstn.value.trim(),
                                                Fathername:fathern.value.trim(),
                                                Street:streetAddress.value.trim(),
                                                Home:homeAddress.value.trim(),
                                                Appartement:apartmentAddress.value.trim(),
                                                MobilePhone:mobileP.value.trim(),
                                                WorkPhone: workP.value.trim(),
                                                HomePhone: homeP.value.trim()
                                            }})
        
        console.log("</reade>");
    }
    const remove = e => {
        e.preventDefault();
        console.log("<remove>");
        var sessionDataToLog = Session.get('currentPerson');
        if(sessionDataToLog === undefined) return;
        
        PhoneBook_Collection.remove(sessionDataToLog._id);
        ClearTextFiler();
        console.log("</remove>");
    }

    function ClearTextFiler(){
        lastn.value = "";
        firstn.value = "";
        fathern.value = ""; 
        streetAddress.value = "";
        homeAddress.value = "";
        apartmentAddress.value = "";
        mobileP.value = ""; 
        workP.value = "";
        homeP.value = "";
    }

    function filler(){
        var lastNOut = "";
        var firsNOut = "";
        var fatherNOut = "";
        var sessionDataToLog = Session.get('currentPerson');
    
        lastn.value = sessionDataToLog.Lastname;
        firstn.value = sessionDataToLog.Firstname;
        fathern.value = sessionDataToLog.Fathername;
        streetAddress.value = sessionDataToLog.Street;
        homeAddress.value = sessionDataToLog.Home;
        apartmentAddress.value = sessionDataToLog.Appartement; 
        mobileP.value = sessionDataToLog.MobilePhone;
        workP.value = sessionDataToLog.WorkPhone;
        homeP.value = sessionDataToLog.HomePhone;

    }

    const ExecuteHandler = e => {
        e.preventDefault();
        if (rad1.checked == false){
            Insert();
        }else{
            Find();
        }
    }

    return (
        <div className="person-insert-form" >
            <div className='person-form'>
                <span className='span1' >
                    <form>
                        <input 
                            type={"text"}
                            placeholder='FIO:'
                            id='fiopersone'
                            />
                
                        <input
                            title='формат ввода [T X(XXX)XXX-XX-XX] T: mobile, work, home'
                            type={"text"}
                            placeholder='PhoneNumber'
                            id='phonenumber'
                            />

                        <input
                            type={"text"}
                            placeholder='Assress:'
                            id='addressa'
                            />
               
                        <input name='radiob' type={"radio"} id='rad1' checked/>
                        <label htmlFor="rad1">find</label>
                        <input name='radiob' type={"radio"} id='rad2'/>
                        <label htmlFor="rad2">create</label>
                
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
                        id='fathern'
                        />

                </div>

                <label>Данные адреса:</label>
                <div>   
                    <input 
                        type={"text"}
                        placeholder='street:'
                        id='streetAddress'
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
                <button onClick={reade} >обновить</button>
                <button onClick={remove} >удалить</button>
            </div>
        </div>
    );
};