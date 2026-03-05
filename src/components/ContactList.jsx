// renders filtered list of contacts

import ContactItem from './ContactItem.jsx';

const ContactList = (props)=>{
    return (
        <div>
            {props.items.map(item => {
                return <ContactItem key={item.id} name={item.name} email={item.email} phone={item.phone} birthdate={item.birthdate} />
            })}
        </div>
    );

}

export default ContactList;