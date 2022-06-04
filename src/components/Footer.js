import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
      <a href="https://www.linkedin.com/in/james-hughes-24006713b/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:jhughes1790@gmail.com?subject=Hello Jamie!">
            <EmailIcon />
          </a>
              
          
          <a href="https://github.com/jhughes1790" target="_blank" rel="noreferrer">
              <GithubIcon />
          </a>
      </div>
      <p> </p>
    </div>
  );
}

export default Footer;
