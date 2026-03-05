// individual row/card with Delete button
// each contact includes id (Date.now().toString()), name (String, required), email (String, required), phone (String), maybe birthdate

const ContactItem = function(props) {
    return (
        <div class="list-item">
            <span>{props.id}</span>
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
            <span>{props.birthdate}</span>
            <button>Delete</button>
        </div>
    );
}

export default ContactItem;