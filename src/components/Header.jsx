import { BiSolidContact } from "react-icons/bi";

function Header() {
    return (
        <div className='header'>
            <BiSolidContact className='header-icon' />
            <span className='site-title'>MyContacts</span>
        </div>
    );
}

export default Header;