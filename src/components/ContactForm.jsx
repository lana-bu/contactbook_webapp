// controlled inputs for Name/Email/Phone; submits to add

import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { phoneNumberAutoFormat } from '../utils/index'

const ContactForm = function(props) {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredBirthdate, setEnteredBirthdate] = useState('');

    const nameChangedHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const emailChangedHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const phoneChangedHandler = (event) => {
        const targetValue = phoneNumberAutoFormat(event.target.value);
        setEnteredPhone(targetValue);
    }

    const birthdateChangedHandler = (event) => {
        setEnteredBirthdate(event.target.value);
    }

    const submitHandler = (event, close) => { // close is passed so that submit can close the popup
        event.preventDefault(); // prevent page refresh
        const contactData = {
            id: Date.now().toString(),
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            birthdate: enteredBirthdate
        };
        console.log(contactData)
        props.onAddContact(contactData);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredPhone('');
        setEnteredBirthdate('');
        close();
    }
    
    return (
        <Popup className='form-popup' trigger = {<button className="btn">Add Contact</button>} modal nested>
            {
                close => ( 
                    <div>
                        <button className='btn close-btn' onClick={close}><IoClose /></button>
                        <form action="" className="form" onSubmit={(e) => submitHandler(e, close)}>
                            <fieldset>
                                <legend>Contact Information</legend>
                                <div className="form-input-group">
                                    <label for="name" className="form-label">Name:</label>
                                    <input type="text" name="name" id="name" required="required" className="form-input" value={enteredName} onChange={nameChangedHandler} />
                                </div>
                                <div className="form-input-group">
                                    <label for="email" className="form-label">Email:</label>
                                    <input type="email" name="email" id="email" required="required" className="form-input" value={enteredEmail} onChange={emailChangedHandler} />                        
                                </div>
                                <div className="form-input-group">
                                    <label for="phone" className="form-label">Phone number:</label>
                                    <input type="tel" name="phone" id="phone" className="form-input" pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{4}" value={enteredPhone} onChange={phoneChangedHandler} maxLenght={13} />
                                </div>
                                <div className="form-input-group">
                                    <label for="birthdate" className="form-label">Birthdate:</label>
                                    <input type="date" name="birthdate" id="birthdate" className="form-input" value={enteredBirthdate} onChange={birthdateChangedHandler} />                        
                                </div>
                            </fieldset>
                            <button type="submit" className="btn">Create New Contact</button>
                        </form>
                    </div>
                )
            }
        </Popup>
    );
}

export default ContactForm;