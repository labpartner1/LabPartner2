import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [path, setPath] = useState("/");


    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname])



    return (
        <>
            <nav className="d-flex navbar">
                <div className="logo"><a href="/">Lab Partner</a></div>

                <ul className={`d-flex menu ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>

                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>

                    <li className="nav-item"><a href={`${path === '/' ? '#labs' : '/'}`} className="nav-link">Labs</a></li>

                    <li className="nav-item"><a href={`${path === '/' ? '#typewriter' : '/'}`} className="nav-link">Auto Typewriter</a></li>

                    <li className="nav-item"><a href={`${path === '/' ? '#contact' : '/'}`} className="nav-link">Feedback</a></li>
                    
                </ul>

                {
                    open ? <div className='hamburger' onClick={() => setOpen(!open)}>&#x2716;</div> :
                        <div className="hamburger" onClick={() => setOpen(!open)}>&#x2630;</div>
                }


            </nav>
        </>
    )
}

export default Navbar


