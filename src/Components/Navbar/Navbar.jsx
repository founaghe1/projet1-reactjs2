import React from "react";
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';
import { useState } from 'react';

const Navbar = () =>{

    const [active, setActive] = useState('navBar')
    // function to toggle the nav
    const showNav = () => {
        setActive('navBar activeNavbar')

    }
    // function to hide the nav
    const closeNav = () => {
        setActive('navBar')

    }


    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <MdOutlineTravelExplore className="icon"/>  Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                            <button className="btn">
                                <a href="#">BOOK NOW</a>
                            </button>
                    </ul>

                    <div onClick={closeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <PiDotsNineBold className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar;