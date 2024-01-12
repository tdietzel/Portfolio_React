import { Container, Card, Button, Col, ButtonGroup } from 'react-bootstrap'
import image from "../assets/myPicture.png"
import discord from "../assets/discord.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import gitHub from "../assets/github.png"

function Header() {
  return (
    <>
      <Container className="main-header">
        {/* Profile Picture */}
        <Card className="profile-pic-container">
          <div className="profile-pic">
            <Card.Img src={image} alt="A picture of me fishing." className="profile-picture"/>
          </div>
          <h1 className='title-font'>Hey, I'm Trent
            <br />
            {/* Animated Web Developer */}
            <span id="title">
              <span style={{ "--index": 1, paddingLeft: "62px" }}>W</span>
              <span style={{ "--index": 2 }}>e</span>
              <span style={{ "--index": 3 }}>b</span>
              <span style={{ "--index": 4, paddingRight: '30px' }}></span>
              <span style={{ "--index": 5 }}>D</span>
              <span style={{ "--index": 6 }}>e</span>
              <span style={{ "--index": 7 }}>v</span>
              <span style={{ "--index": 8 }}>e</span>
              <span style={{ "--index": 9 }}>l</span>
              <span style={{ "--index": 10 }}>o</span>
              <span style={{ "--index": 11 }}>p</span>
              <span style={{ "--index": 12 }}>e</span>
              <span style={{ "--index": 12 }}>r</span>
            </span>
          </h1>
        </Card>
      </Container>
      <Col md={6}>
        {/* Button Sections */}
        <ButtonGroup style={{marginLeft: '440px'}} className="button-group">
          <div className="button-style">
              <Button variant="outline-light">All Projects</Button>{' '}
              <Button variant="outline-light">Interests</Button>{' '}
              <Button variant="outline-light">Resume</Button>{' '}
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

export default Header;