// renders filtered list of contacts

import ContactItem from './ContactItem.jsx';

const ContactList = (props)=>{
    let contactsDisplay;
        if (props.items.length <= 0) {
            contactsDisplay = <span>No contacts yet. Add one below!</span>;
        } else {
            contactsDisplay = props.items.map(item => (
                <ContactItem key={item.id} name={item.name} email={item.email} phone={item.phone} birthdate={item.birthdate} />
            ));
        }
    return (
        <div>
            {contactsDisplay}
        </div>
    );
}

export default ContactList;