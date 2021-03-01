import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PersonIcon from "@material-ui/icons/Person";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer_left">
        <div className="footer_name">

        </div>
      </div> */}
      <div className="footer_right">
        <div className="Footer_copyright">
          Website Porfolio by <a href="/" target="_blank">
            Aaron Moua
          </a>
          <br/>
          
          <br />
          &copy; 2021
        </div>
        <a href="https://twitter.com/AaronMoua6" className="social-footer">
          <TwitterIcon icon={TwitterIcon} />
        </a>
        <a href="https://linkedin.com/in/aaron-moua" className="social-footer">
          <LinkedInIcon icon={LinkedInIcon} />
        </a>
        <a href="https://github.com/amoua000" className="social-footer">
          <GitHubIcon icon={GitHubIcon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
