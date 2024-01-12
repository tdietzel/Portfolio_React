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
              <Button variant="outline-light">All Projects</Button>{' '}
            </Link>
            <Link to='/App'>
              <Button variant="outline-light">Interests</Button>{' '}
            </Link>
            <Link to='/Resume'>
              <Button variant="outline-light">Resume</Button>{' '} 
            </Link>
          </div>
          {/* Social Media */}
          <Card className='social-media-card'>
            <Card.Img src={linkedin} alt="LinkedIn" className="social-media"/>
            <Card.Img src={gitHub} alt="GitHub" className="social-media border-white"/>
            <Card.Img src={discord} alt="Discord" className="social-media"/>
            <Card.Img src={twitter} alt="Twitter" className="social-media border-white"/>
          </Card>
        </ButtonGroup>
      </Col>
    </>
  )
}