import './App.css'
import ContactForm from './components/ContactForm.jsx';
import ContactList from './components/ContactList.jsx';
import SearchBar from './components/SearchBar.jsx';

const contactData = [];

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
