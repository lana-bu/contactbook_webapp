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
            <IoMdContact />
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
            <span>{props.birthdate}</span>
            <button className="btn delete-btn" onClick={deleteButtonHandler}><FaTrashAlt /></button>
        </div>
    );
}

export default ContactItem;