// controlled input for filter text

import { BsSearch } from 'react-icons/bs';

function SearchBar() {
    return (
        <div class='search'>
            <input type="text" class="search-input" placeholder='Search for contacts...' />                        
            <BsSearch />
        </div>
    )
}

export default SearchBar;