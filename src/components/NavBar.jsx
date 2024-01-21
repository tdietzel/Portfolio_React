// Located in Header.jsx return
import { Col, ButtonGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

import discord from "../assets/discord.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import gitHub from "../assets/github.png"

export default function NavBar() {
  return (
    <>
      <Col md={6}>
        {/* Button Sections */}
        <ButtonGroup className="button-group">
          <div className="button-style">
            <Link to='/'>
              <Button variant="outline-light">Home</Button>{' '}
            </Link>
            <Link to='/TopProjects'>
              <Button variant="outline-light">All Projects</Button>{' '}
            </Link>
            <Link to='/Resume'>
              <Button variant="outline-light">Resume</Button>{' '} 
            </Link>
          </div>
          {/* Social Media */}
          <Card className='social-media-card'>
            <Card.Img src={linkedin} alt="LinkedIn" className="social-media"
              onClick={() => window.open('https://linkedin.com/in/trentdietzel', '_blank')}
            />
            <Card.Img src={gitHub} alt="GitHub" className="social-media border-white"
              onClick={() => window.open('https://github.com/tdietzel', '_blank')}
            />
            <Card.Img src={discord} alt="Discord" className="social-media"
              onClick={() => window.open('https://discordapp.com/users/trent.dev', '_blank')}
            />
            <Card.Img src={twitter} alt="Twitter" className="social-media border-white"
              onClick={() => window.open('https://twitter.com/trentdietzel', '_blank')}
            />
          </Card>
        </ButtonGroup>
      </Col>
    </>
  )
}