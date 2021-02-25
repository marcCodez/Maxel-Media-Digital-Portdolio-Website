import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



function Navbar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
           <header id='header-home'>
               <div id='navbar'>

               <NavLink 
                        exact to="/" 
                        className="navbar-logo mobile" 
                        activeClassName='nav-active'
                        onClick={closeMobileMenu}>
                                <img src="/images/max-new-logo.png" id="logo" />
                        </NavLink>
            
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <NavLink 
                       exact to='/' 
                       className='nav-links'  
                       activeClassName='nav-active'
                       onClick={closeMobileMenu}>
                          Home 
                       </NavLink>
                   </li>
                   <li className='nav-item'>
                       <NavLink 
                       exact to='/about' 
                       className='nav-links' 
                       activeClassName='nav-active'
                       onClick={closeMobileMenu}>
                           About
                       </NavLink>
                   </li>
              
                        <NavLink 
                        exact to="/" 
                        className="navbar-logo desktop" 
                        activeClassName='nav-active'
                        onClick={closeMobileMenu}>
                                <img src="/images/max-new-logo.png" id="logo" />
                        </NavLink>

    
                   <li className='nav-item'>
                       <NavLink 
                       exact to='/projects' 
                       className='nav-links' 
                       activeClassName='nav-active'
                       onClick={closeMobileMenu} >
                           Projects
                       </NavLink>
                   </li>
                   <li className='nav-item'>
                       <NavLink 
                       exact to='/contact' 
                       className='nav-links' 
                       activeClassName='nav-active'
                       onClick={closeMobileMenu} >
                           Contact
                       </NavLink>
                   </li>
               </ul>
               </div>
            </header> 
        </>
    )
}

export default Navbar
