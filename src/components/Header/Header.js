import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PersonIcon from "@material-ui/icons/Person";
import GetAppIcon from '@material-ui/icons/GetApp';
// import Resume from "../../pages/Resume/Resume";
import CustomButton from "../../components/Button/Button";

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

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header-left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName == "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>

        <div className="header-right">
          <a href="https://twitter.com/AaronMoua6" className="social-icons">
            <TwitterIcon icon={TwitterIcon} />
          </a>
          <a href="https://linkedin.com/in/aaron-moua" className="social-icons">
            <LinkedInIcon icon={LinkedInIcon} />
          </a>
          <a href="https://github.com/amoua000" className="social-icons">
            <GitHubIcon icon={GitHubIcon} />
          </a>

          <a href="https://docs.google.com/document/d/1lR9rg6gIVqY9Ghguj_9o-6Hi5EPBs6xssaSKj2E8dZ8/edit" className="social-button">
            <PersonIcon id="person-icon" icon={PersonIcon} />
            <GetAppIcon id="download-icon" icon={GetAppIcon} />
            <h2>Resume Download</h2>
    
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
