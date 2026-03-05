// controlled inputs for Name/Email/Phone; submits to add

import { useState } from 'react';

const ContactForm = function(props) {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredBirthdate, setEnteredBirthdate] = useState('');

    const nameChangedHandler = (event)=>{
        setEnteredName(event.target.value);
    }

    const emailChangedHandler = (event)=>{
        setEnteredEmail(event.target.value);
    }

    const phoneChangedHandler = (event)=>{
        setEnteredPhone(event.target.value);
    }

    const birthdateChangedHandler = (event)=>{
        setEnteredBirthdate(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const contactData = {
            id: Date.now().toString(),
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            birthdate: enteredBirthdate
        };
        console.log(contactData)
        props.onAddContact(contactData);
    }
    
    return (
        <form action="" class="form" onSubmit={submitHandler}>
            <fieldset>
                <legend>Contact Information</legend>
                <div class="form-input-group">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" name="name" id="name" required="required" class="form-input" value={enteredName} onChange={nameChangedHandler} />
                </div>
                <div class="form-input-group">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" name="email" id="email" required="required" class="form-input" value={enteredEmail} onChange={emailChangedHandler} />                        
                </div>
                <div class="form-input-group">
                    <label for="phone" class="form-label">Phone number:</label>
                    <input type="tel" name="phone" id="phone" class="form-input" value={enteredPhone} onChange={phoneChangedHandler} />
                </div>
                <div class="form-input-group">
                    <label for="birthdate" class="form-label">Birthdate:</label>
                    <input type="date" name="birthdate" id="birthdate" class="form-input" value={enteredBirthdate} onChange={birthdateChangedHandler} />                        
                </div>
            </fieldset>
            <button type="submit" class="btn">Add Contact</button>
        </form>
    );
}

export default ContactForm;