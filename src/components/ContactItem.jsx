// individual row/card with Delete button
// each contact includes id (Date.now().toString()), name (String, required), email (String, required), phone (String), maybe birthdate

import { IoMdContact } from "react-icons/io";
import {FaTrashAlt} from 'react-icons/fa';
import { format } from "date-fns"

const defaultField = "(none)";

const ContactItem = function(props) {
    const setPhone = () => {
        if (props.phone === '') {
            return defaultField;
        } else {
            return props.phone
        }
    }

    const setBirthdate = () => {
        if (props.birthdate === '') {
            return defaultField;
        } else {
            const [year, month, day] = props.birthdate.split('-');
            return format(new Date(year, month - 1, day), "MMMM dd, yyyy");
        }
    }

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
                <span className='contact-element contact-email'>Email: {props.email}</span>
                <span className='contact-element contact-phone'>Phone: {setPhone()}</span>
                <span className='contact-element contact-birthdate'>Birthdate: {setBirthdate()}</span>
            </div>
            <button className="btn delete-btn" onClick={deleteButtonHandler}><FaTrashAlt /></button>
        </div>
    );
}

export default ContactItem;