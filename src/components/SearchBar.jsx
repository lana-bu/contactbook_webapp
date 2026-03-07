// controlled input for filter text

import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = (props)=>{
    const [searchEntry, setSearchEntry] = useState('');

    const  searchChangedHandler = (event)=>{
        setSearchEntry(event.target.value); // need to set so that value in input will update
        props.onSearchChange(event.target.value); // can't use search value or else it will be a keystroke behind
    }

    return (
        <div class='search'>
            <IoSearch />
            <input type="text" class="search-input" placeholder='Search for contacts...' value={searchEntry} onChange={searchChangedHandler} />                        
        </div>
    )
}

export default SearchBar;