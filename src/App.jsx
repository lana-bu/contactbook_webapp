import './App.css'
import ContactForm from './components/ContactForm.jsx';
import ContactList from './components/ContactList.jsx';
import SearchBar from './components/SearchBar.jsx';

const contactData = [
  {
    id: Date.now().toString(),
    name: 'Lana Burger',
    email: 'lana.burger@icloud.com',
    phone: '734-272-7809',
    birthdate: '9/22/2005'
  }
];

function App() {

  let contactsDisplay
    if (contactData.length <= 0) {
      contactsDisplay = <span>No contacts yet. Add one below!</span>;
    } else {
      contactsDisplay = <ContactList items={contactData} />;
    }

  return (
    <>
      <SearchBar />
      <div>
        {contactsDisplay}
      </div>
    </>
  );
}

export default App
