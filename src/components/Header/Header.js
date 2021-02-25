import React, { Component } from "react";
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter} from "react-router-dom";
import "./Header.css";


class Navbar extends Component {

     render() {

          return(

               <nav className="NavbarItems">
                    <h1 className="navbar-logo">Home</h1>
                    <div className="menu-icon">
                         
                    </div>
                    <HomeIcon/> 
               </nav>
          )



     }
}



return (
     <>
       <Nav>
         <NavLink  to="/">
          <HomeIcon/>
         </NavLink>
         <MenuIcon/>
 
         <NavMenu>
           <NavLink  to="/resume" activeStyle>
             Resume
           </NavLink>
           <NavLink  to="/portfolio" activeStyle>
             Portfolio
           </NavLink>
           <NavLink   to="/contact" activeStyle>
             Contact
           </NavLink>
      </NavMenu>
            
 
       </Nav>
     </>
   );
 };