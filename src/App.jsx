import { useState } from 'react';
import './App.css'
import ContactForm from './components/ContactForm.jsx';
import ContactList from './components/ContactList.jsx';
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx';

const contactsData = [];

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [searchTerm, setSearchTerm] = useState('');

  const addContactHandler = (contactData) => { // update contact list when contact is added
    setContacts(prevContact => {
      return [contactData, ...prevContact];
    })
  }

  const searchChangeHandler = (value) => {
    setSearchTerm(value);
  }

  const filteredContacts = contacts.filter(contact => {
    const term = searchTerm.toLowerCase();
    return contact.name.toLowerCase().includes(term) || contact.email.toLowerCase().includes(term);
  });

  const deleteContactHandler = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Header />
      <SearchBar onSearchChange={searchChangeHandler} />
      <ContactList allItems={contacts} items={filteredContacts} search={searchTerm} contactToDelete={deleteContactHandler} />
      <ContactForm onAddContact={addContactHandler}/>
    </>
  );
}

export default App
