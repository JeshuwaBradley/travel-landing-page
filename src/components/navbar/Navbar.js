import React from 'react'
import './navbar.css'
import { FiMenu, FiX } from 'react-icons/fi';


 
const Navbar = ({navbarLinks}) => {
    return (
        <nav className='navbar'>
            <span className='navbarLogo'>Travel</span>
            <ul className='navbarList'>
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
