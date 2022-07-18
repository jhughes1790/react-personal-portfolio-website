import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
*/

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, my name is Jamie.</h2>
        <div className="prompt">
          <p>I am a software developer with a passion for learning and helping others.</p>
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
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM,
             BootStrap, MaterialUI, Yarn, Api's
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              ** Coming Soon! NodeJS, ExpressJS, MongoDB, Python
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
