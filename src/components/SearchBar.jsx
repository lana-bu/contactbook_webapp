// controlled input for filter text

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = (props)=>{
    const [searchEntry, setSearchEntry] = useState('');

    const  searchChangedHandler = (event)=>{
        setSearchEntry(event.target.value);
        props.onSearchChange(event.target.value);
    }

    return (
        <div class='search'>
            <BsSearch />
            <input type="text" class="search-input" placeholder='Search for contacts...' value={searchEntry} onChange={searchChangedHandler} />                        
        </div>
    )
}

export default SearchBar;