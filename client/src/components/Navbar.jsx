import logo from '../../images/logo2.png';
import React from 'react';

const Navbar = () => {

    const NavbarItem = ({title}) => {
        return (
            <a href={`#${title}`}>
            <li className="mx-4 nav-element py-2 px-7 mx-2  cursor-pointer font-semibold text-xl" >
                {title}
            </li>
            </a>
        );
    }

    return (
        
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-centre items-center">
                <img src = {logo}  alt="logo" className="w-50 cursor-pointer nav-element"/>
            </div>

            <ul className="text-white md:flex hidden list-noneflex-row justify-between items-center flex-initial">
                {["About Us", "Transfer","Transactions", "Contact Us"].map((item) => (
                    <NavbarItem title={item}/>
                ))}
            </ul>

        </nav>
    );
}

export default Navbar;