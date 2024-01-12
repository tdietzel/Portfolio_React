import { Container, Card } from 'react-bootstrap'

import NavBar from './NavBar'
import image from "../assets/myPicture.png"

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
      <NavBar />
    </>
  )
}

export default Header;