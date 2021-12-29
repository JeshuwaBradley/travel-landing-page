import React, {useState } from 'react'
import './navbar.css'
import { FiMenu, FiX } from 'react-icons/fi';


 
const Navbar = ({navbarLinks}) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };
    return (
        <nav className='navbar'>
            <span className='navbarLogo'>Travel</span>
            {menuClicked ? (
                <FiX size={25} className={"navbarMenu"} onClick={toggleMenuClick} />
            ) : (
                <FiMenu
                size={25}
                className={"navbarMenu"}
                onClick={toggleMenuClick}
                />
            )}
            <ul className={
                    menuClicked ? "navbarList navbarList--active" : "navbarList"
                }
            >
                {navbarLinks.map((item) => (
                    <li className='navbarItem'>
                        <a className='navbarLink' href={item.url}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
