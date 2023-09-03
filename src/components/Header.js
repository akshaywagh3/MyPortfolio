import React,{useRef} from 'react';
import {NavLink} from 'react-router-dom';
import { FaBars, FaTimes} from "react-icons/fa";
import './Header.css';
const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <header className='header'>
      <h1>Akshay<span style={{'color':'red'}}>.</span></h1>
        <nav className='navbar'ref={navRef}>
            <ul className='list'>
                <NavLink to='/' className={({isActive})=>isActive ? 'active':undefined}>HOME</NavLink>
                <li><NavLink to='/about' className={({isActive})=>isActive ? 'active':undefined}>ABOUT</NavLink></li>
                <li><NavLink to='/project' className={({isActive})=>isActive ? 'active':undefined}>PROJECTS</NavLink></li>
                <li><NavLink to='/contact' className={({isActive})=>isActive ? 'active':undefined}>CONTACT</NavLink></li>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
        
    </header>
    
  )
}

export default Header