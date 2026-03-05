import './App.css'
import ContactForm from './components/ContactForm.jsx';
import ContactList from './components/ContactList.jsx';
import SearchBar from './components/SearchBar.jsx';


function App() {
  return (
    <>
      <SearchBar />
      <ContactList />
      <ContactForm />
    </>
  );
}

export default App
