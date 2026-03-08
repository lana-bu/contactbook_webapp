// individual row/card with Delete button
// each contact includes id (Date.now().toString()), name (String, required), email (String, required), phone (String), maybe birthdate

import { IoMdContact } from "react-icons/io";
import {FaTrashAlt} from 'react-icons/fa';

const ContactItem = function(props) {
    const deleteButtonHandler = (event) => {
        props.onDeleteContact(props.id);
    }
    
    return (
        <div className="list-item">
            <div className='contact-title'>
                <IoMdContact className='contact-icon' />
                <span className='contact-name'>{props.name}</span>
            </div>
            <div className='contact-info'>
                <span className='contact-element contact-email'>{props.email}</span>
                <span className='contact-element contact-phone'>{props.phone}</span>
                <span className='contact-element contact-birthdate'>{props.birthdate}</span>
            </div>
            <button className="btn delete-btn" onClick={deleteButtonHandler}><FaTrashAlt /></button>
        </div>
    );
}

export default ContactItem;