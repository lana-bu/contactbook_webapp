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

    const closePopup = (close) => {
        setEnteredName('');
        setEnteredEmail('');
        setEnteredPhone('');
        setEnteredBirthdate('');
        close();
    }

    const submitHandler = (event, close) => { // close is passed so that submit can close the popup
        event.preventDefault(); // prevent page refresh
        if (!event.target.checkValidity()) return; // prevent submit if inputs are invalid
        const contactData = {
            id: Date.now().toString(),
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            birthdate: enteredBirthdate
        };
        console.log(contactData)
        props.onAddContact(contactData);
        closePopup(close);
    }
    
    return (
        <Popup className='form-popup' trigger = {<button className="btn popup-trigger-btn">Add Contact</button>} modal nested>
            {
                close => ( 
                    <div>
                        <button className='btn close-btn' onClick={() => closePopup(close)}><IoClose /></button>
                        <form action="" className="form" noValidate onSubmit={(e) => submitHandler(e, close)}>
                            <fieldset>
                                <legend>Contact Information</legend>
                                <div className="form-input-group">
                                    <label for="name" className="form-label">Name*:</label>
                                    <div className='input-box'>
                                        <input type="text" name="name" id="name" required="required" className="form-input" placeholder="Enter name..." value={enteredName} onChange={nameChangedHandler} />
                                        <span aria-live='polite' className='info-msg invalid-msg'>Please provide a name.</span>
                                    </div>
                                </div>
                                <div className="form-input-group">
                                    <label for="email" className="form-label">Email*:</label>
                                    <div className='input-box'>
                                        <input type="email" name="email" id="email" required="required" className="form-input" placeholder="Enter email..." value={enteredEmail} onChange={emailChangedHandler} />        
                                        <span aria-live='polite' className='info-msg invalid-msg'>Please provide a valid email address.</span>
                                    </div>
                                </div>
                                <div className="form-input-group">
                                    <label for="phone" className="form-label">Phone:</label>
                                    <div className='input-box'>
                                        <input type="tel" name="phone" id="phone" className="form-input" placeholder="Enter phone number..." pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{4}" value={enteredPhone} onChange={phoneChangedHandler} maxLength={14} />
                                        <span aria-live='polite' className='info-msg invalid-msg'>Please provide a valid phone number.</span>
                                    </div>
                                </div>
                                <div className="form-input-group">
                                    <label for="birthdate" className="form-label">Birthdate:</label>
                                    <input type="date" name="birthdate" id="birthdate" className="form-input" value={enteredBirthdate} onChange={birthdateChangedHandler} />                        
                                </div>
                                <span className="info-msg">*Required field</span>
                            </fieldset>
                            <button type="submit" className="btn submit-btn">Create New Contact</button>
                        </form>
                    </div>
                )
            }
        </Popup>
    );
}

export default ContactForm;