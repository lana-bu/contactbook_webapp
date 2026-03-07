// individual row/card with Delete button
// each contact includes id (Date.now().toString()), name (String, required), email (String, required), phone (String), maybe birthdate

import {FaTrashAlt} from 'react-icons/fa';

const ContactItem = function(props) {
    const deleteButtonHandler = (event) => {
        props.onDeleteContact(props.id);
    }
    
    return (
        <div class="list-item">
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
            <span>{props.birthdate}</span>
            <button class="btn delete-btn" onClick={deleteButtonHandler}><FaTrashAlt /></button>
        </div>
    );
}

export default ContactItem;