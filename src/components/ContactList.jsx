// renders filtered list of contacts

import ContactItem from './ContactItem.jsx';

const ContactList = (props)=>{
    let contactsDisplay;
        if (props.allItems.length <= 0) { // no contacts added yet
            contactsDisplay = <span>No contacts yet. Add one below!</span>;
        } else if (props.items.length <= 0) { // contacts exist, but none match search
            contactsDisplay = <span>No matches found for '{props.search}'.</span>;
        } else { // display matching contacts
            contactsDisplay = props.items.map(item => (
                <ContactItem key={item.id} name={item.name} email={item.email} phone={item.phone} birthdate={item.birthdate} />
            ));
        }

    return (
        <div class='list'>
            {contactsDisplay}
        </div>
    );
}

export default ContactList;