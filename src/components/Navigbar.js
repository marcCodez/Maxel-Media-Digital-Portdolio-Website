import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';



function Navigbar() {
    // toggle menu and menu icon
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>

<Navbar className="effect nav-container" expand="lg" role="presentation">
    <NavLink 
        exact to="/" 
        className="navbar-logo mobile" 
        activeClassName='nav-active'
        onClick={closeMobileMenu}>
        <img src="/images/logo-v2.png" id="logo" alt="maxel media logo"/>
        </NavLink>

                        <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
               </div>
            
                  
       
               <Nav  className={click ? 'nav-menu active' : 'nav-menu'}>
            
      <NavLink exact to='/' activeClassName='nav-active'  onClick={closeMobileMenu} className="navbar-link" exact={true}>Home</NavLink>
      <NavLink exact to='/about' activeClassName='nav-active' onClick={closeMobileMenu} className="navbar-link" >About</NavLink>
      <NavLink exact to='/'>
      <Navbar.Brand 
       exact to="/"           
       className="navbar-logo desktop" 
        activeClassName='nav-active'
        onClick={closeMobileMenu}>
             <img src="/images/logo-v2.png" id="logo" />
        </Navbar.Brand>
        </NavLink>
      <NavLink  exact to='/projects' activeClassName='nav-active'  onClick={closeMobileMenu} className="navbar-link" >Projects</NavLink>
      <NavLink  exact to='/contact'  activeClassName='nav-active'  onClick={closeMobileMenu} className="navbar-link" >Contact</NavLink>


      </Nav>
</Navbar>
        </>
    )
}

export default Navigbar
