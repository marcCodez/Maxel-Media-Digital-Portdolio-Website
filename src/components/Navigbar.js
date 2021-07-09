import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';



function Navigbar() {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
           {/* <header id='header-home'>
               <nav id='navbar' className="effect">

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
               </nav>
            </header> 
            <div class="nav-wrapper nav-wrapper-4">
      <nav class="effect">
       
      </nav>
	</div> */}

<Navbar className="effect   nav-container" expand="lg" id="navbar" role="presentation">
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
