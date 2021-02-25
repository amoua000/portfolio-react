import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, } from "react-bootstrap";
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, withRouter } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
// import Resume from "../../pages/Resume/Resume";

function Header(props) {
     const pathName = props?.location?.pathname;


     return (
          <Navbar expand="lg" sticky="top" className="header">
               {/* Home link */}
               <Nav.Link as={NavLink} to="/">
                    <Navbar.Brand className="header_home">
                    <HomeIcon id="home-icon" />
                    </Navbar.Brand> 
               </Nav.Link>

               <Navbar.Toggle/>

               <Navbar.Collapse>
                    <Nav className="header-left">
                    {/* Resume Link */}
                      <Nav.Link as={NavLink} to='/' className={pathName == '/' ? "header_link_active" : "header_link"}>
                      Resume
                      </Nav.Link>   

                      {/* Portfolio Link */}
                      <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? "header_link_active" : "header_link"}>
                      Portfolio
                      </Nav.Link>  

                    {/* Contact Link */}
                      <Nav.Link as={NavLink} to='/contact' className={pathName == '/contact' ? "header_link_active" : "header_link"}>
                      Contact
                      </Nav.Link>  

                    </Nav>

                    <div className="header-right">
                         
                         <Link
                className="social-icons"
                to="https://twitter.com/home?lang=en"
                target="_blank"><TwitterIcon/></Link>
                     <Link
                className="social-icons"
                to="www.linkedin.com/in/aaron-moua"
                target="_blank"><LinkedInIcon/></Link>
                     <Link
                className="social-icons"
                to="https://github.com/amoua000"
                target="_blank"><GitHubIcon/></Link>
                         
                    </div>
               </Navbar.Collapse>
          </Navbar>
     )
}

export default Header
