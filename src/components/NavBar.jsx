// Located in Header.jsx return
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

import discord from "../assets/discord.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import gitHub from "../assets/github.png";

export default function NavBar() {
  return (
    <>
      <div>
        {/* Button Sections */}
        <div className="button-group">
          <div className="button-style">
            <Link to='/Portfolio_React/'>
              <button className="btn btn-outline-light">Home</button>
            </Link>
            <Link to='/TopProjects'>
              <button className="btn btn-outline-light">All Projects</button>
            </Link>
            <Link to='/Resume'>
              <button className="btn btn-outline-light">Resume</button>
            </Link>
          </div>
          {/* Social Media */}
          <div className='social-media-card'>
            <img
              src={linkedin}
              alt="LinkedIn"
              className="social-media"
              onClick={() => window.open('https://linkedin.com/in/trentdietzel', '_blank')}
            />
            <img
              src={gitHub}
              alt="GitHub"
              className="social-media border-white"
              onClick={() => window.open('https://github.com/tdietzel', '_blank')}
            />
            <img
              src={discord}
              alt="Discord"
              className="social-media"
              onClick={() => window.open('https://discordapp.com/users/trent.dev', '_blank')}
            />
            <img
              src={twitter}
              alt="Twitter"
              className="social-media border-white"
              onClick={() => window.open('https://twitter.com/trentdietzel', '_blank')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
