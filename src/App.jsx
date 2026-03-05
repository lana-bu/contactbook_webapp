import { useState } from 'react';
import './App.css'
import ContactForm from './components/ContactForm.jsx';
import ContactList from './components/ContactList.jsx';
import SearchBar from './components/SearchBar.jsx';

const contactsData = [
  {
    id: Date.now().toString(),
    name: 'Lana Burger',
    email: 'lana.burger@icloud.com',
    phone: '734-272-7809',
    birthdate: '9/22/2005'
  }
];

function App() {
  const [contacts,setContacts] = useState(contactsData);

  const addContactHandler = (contactData)=>{
    setContacts(prevContact=>{
      return [contactData, ...prevContact];
    })
  }

  let contactsDisplay
  if (contactsData.length <= 0) {
    contactsDisplay = <span>No contacts yet. Add one below!</span>;
  } else {
    contactsDisplay = <ContactList items={contacts} />;
  }

  return (
    <>
      <SearchBar />
      <div>
        {contactsDisplay}
      </div>
      <ContactForm onAddContact={addContactHandler}/>
    </>
  );
}

export default App
