import { useState } from 'react';
import './App.css'
import ContactForm from './components/ContactForm.jsx';
import ContactList from './components/ContactList.jsx';
import SearchBar from './components/SearchBar.jsx';

const contactsData = [];

function App() {
  const [contacts, setContacts] = useState(contactsData);

  const addContactHandler = (contactData)=>{
    setContacts(prevContact=>{
      return [contactData, ...prevContact];
    })
  }

  return (
    <>
      <SearchBar />
      <ContactList items={contacts} />
      <ContactForm onAddContact={addContactHandler}/>
    </>
  );
}

export default App
