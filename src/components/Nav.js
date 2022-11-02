import React, { useEffect, useState } from 'react'
import netflixLogo from './image/netflix-logo.png';
import images from './image/images.jpg';
import "./Nav.css"

export default function Nav() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt="Netflix logo"
                src={netflixLogo}
                className="nav__logo"
                onClick={() => window.location.reload()}
            />
            <img
                alt="User logged"
                src={images}
                className="nav__avatar"
            />
        </nav>
    )
}
