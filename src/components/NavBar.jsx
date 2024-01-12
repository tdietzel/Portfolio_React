import { Col, ButtonGroup, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import discord from "../assets/discord.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import gitHub from "../assets/github.png"

export default function NavBar() {
  return (
    <>
      <Col md={6}>
        {/* Button Sections */}
        <ButtonGroup style={{marginLeft: '440px'}} className="button-group">
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
          <Card style={{marginLeft: '80px'}}>
            <Card.Img src={linkedin} alt="LinkedIn" style={{marginRight: '10px'}} className="social-media"/>
            <Card.Img src={gitHub} alt="GitHub" style={{marginRight: '10px', borderColor: 'white'}} className="social-media"/>
            <Card.Img src={discord} alt="Discord" style={{marginRight: '10px'}} className="social-media"/>
            <Card.Img src={twitter} alt="Twitter" style={{borderColor: 'white'}} className="social-media"/>
          </Card>
        </ButtonGroup>
      </Col>
    </>
  )
}