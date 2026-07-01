import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
import Button from "../Button/Button";

import logo from "../../assets/images/logo.jpeg";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 40) {

                setScroll(true);

            } else {

                setScroll(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => {

        setMenuOpen(false);

    };

    return (

        <header className={`navbar ${scroll ? "navbar--scroll" : ""}`}>

            <div className="container navbar__container">

                <NavLink
                    to="/"
                    className="navbar__logo"
                >

                    <img
                        src={logo}
                        alt="AgroTerra"
                    />

                    <span>AGROTERRA</span>

                </NavLink>

                <nav className={`navbar__menu ${menuOpen ? "active" : ""}`}>

                    <NavLink to="/" onClick={closeMenu}>
                        Home
                    </NavLink>

                    <NavLink to="/about" onClick={closeMenu}>
                        About
                    </NavLink>

                    <NavLink to="/product" onClick={closeMenu}>
                        Product
                    </NavLink>

                    <NavLink to="/benefits" onClick={closeMenu}>
                        Benefits
                    </NavLink>

                    <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                    </NavLink>

                </nav>

                <div className="navbar__action">

                    <Button
                        text="Contact Us"
                        variant="accent"
                        link="/contact"
                    />

                </div>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>

            </div>

        </header>

    );

}

export default Navbar;