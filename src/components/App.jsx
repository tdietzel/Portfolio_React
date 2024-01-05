import { Card, ListGroup, Container, ListGroupItem, CardText, CardTitle } from 'react-bootstrap'
import image from "../assets/myPicture.png"

function App() {
  return (
    <>
      <Container className="body">
        <Card className="profile-pic-container">
          <div className="profile-pic">
            <Card.Img src={image} alt="A picture of me fishing." />
          </div>
          <h1>Trent Dietzel's
          <br />
          <span id="title">
          <span style={{ "--index": 1, paddingLeft: "62px" }}>P</span>
          <span style={{ "--index": 2 }}>o</span>
          <span style={{ "--index": 3 }}>r</span>
          <span style={{ "--index": 4 }}>t</span>
          <span style={{ "--index": 5 }}>f</span>
          <span style={{ "--index": 6 }}>o</span>
          <span style={{ "--index": 7 }}>l</span>
          <span style={{ "--index": 8 }}>i</span>
          <span style={{ "--index": 9 }}>o</span>
          </span>
        </h1>
        </Card>
      </Container>
      <Container className="current-projects">
        <Card>
          <Card.Title className="white"><em>Current Projects!</em></Card.Title>
          <ListGroup>
            <ListGroupItem><Card.Link><a href="https://github.com/tdietzel22/resort-website">Resort Website</a></Card.Link></ListGroupItem>
            <CardText className="cp-describe">This repository practices creating a resort website called Shady Pines with HTML and CSS.</CardText>
            <ListGroupItem><Card.Link><a href="https://github.com/tdietzel22/wikipedia-rebuild">Wikipedia Rebuild</a></Card.Link></ListGroupItem>
            <CardText className="cp-describe">This repository is a practice trying to rebuild the homepage of Wikipedia using CSS and HTML.</CardText>
            <ListGroupItem><Card.Link><a href="https://github.com/tdietzel22/practice-html">Pizza Parlor</a></Card.Link></ListGroupItem>
            <CardText className="cp-describe">This repository is a practice Pizza Parlor Website using HTML and CSS.</CardText>
            <ListGroupItem><Card.Link><a href="https://github.com/tdietzel22/cupcake-shop">Cupcake Shop</a></Card.Link></ListGroupItem>
            <CardText className="cp-describe">This repository is a practice Cupcake Shop using HTML and CSS</CardText>
            <ListGroupItem><Card.Link><a href="https://github.com/tdietzel22/band-website">Cold Play Website</a></Card.Link></ListGroupItem>
            <CardText className="cp-describe">This website practice using HTML and CSS to recreate tour dates for Cold Play.</CardText>
          </ListGroup>
        </Card>
      </Container>
      <Container className="about-me">
      <Card>
        <CardTitle className="blue"><em>About me!</em></CardTitle>
        <Card.Subtitle className="red">Interests / Pass Times</Card.Subtitle>
        <ListGroup>
          <ListGroupItem>Music</ListGroupItem>
          <ListGroupItem>Cooking</ListGroupItem>
          <ListGroupItem>Exploring</ListGroupItem>
        </ListGroup>
        <br />
        <Card.Subtitle className="red">Hobbies</Card.Subtitle>
        <ListGroup>
          <ListGroupItem>Working Out</ListGroupItem>
          <Card.Text className="sub-text">Working out is a great way to keep my mind and body focused.</Card.Text>
          <ListGroupItem>Fishing</ListGroupItem>
          <Card.Text className="sub-text">I love fishing for the adventure and occasionally even to keep and eat!</Card.Text>
          <ListGroupItem>Boxing</ListGroupItem>
          <Card.Text className="sub-text">I've always been into contact sports and have done everything from wrestling & jui-jitsu, to the most recent boxing.</Card.Text>
        </ListGroup>
        <hr />
        <Card.Subtitle className="red">Skills</Card.Subtitle>
        <ListGroup>
          <ListGroupItem>Teamwork</ListGroupItem>
          <ListGroupItem>Work Ethic</ListGroupItem>
          <ListGroupItem>Organization</ListGroupItem>
        </ListGroup>
      </Card>
      </Container>
      <Container className="my-background">
        <Card.Title className="blue"><em>My background!</em></Card.Title>
        <Card.Subtitle className="red">Previous Education</Card.Subtitle>
        <ListGroup>
          <ListGroupItem>High-School Diploma</ListGroupItem>
          <ListGroupItem>2 Years of EASA in Highschool</ListGroupItem>
          <Card.Text className="sub-text">( Engineering & Aerospace Science Academy )</Card.Text>
        </ListGroup>
        <Card.Subtitle className="red"> Job Experience</Card.Subtitle>
        <ListGroup>
          <ListGroupItem>Farm Equipment Operator</ListGroupItem>
          <Card.Text className="sub-text">June 2023 - Sep 2023 · 4 mos</Card.Text>
          <ListGroupItem>Package Handler</ListGroupItem>
          <Card.Text className="sub-text">Nov 2022 - Jan 2023 · 3 mos</Card.Text>
          <ListGroupItem>Farm Equipment Operator</ListGroupItem>
          <Card.Text className="sub-text">Nov 2021 - Sep 2022 · 12 mos</Card.Text>
        </ListGroup>
        <hr />
        <Card.Subtitle className="red">Why Im Enrolled In Epicodus</Card.Subtitle>
        <Card.Text id="enroll-pg">I first heard about <em>Epicodus</em> in the summer of 2022 as a way for me to expand my learning and dive deeper into coding. During that time I was working peak season on a farm, <strong>90/100</strong> hour weeks, so there wasn't much room for school. Now that I have lots of free time going into winter I decided it would be the perfect time for a career change.</Card.Text>
      </Container>
    </>
  )
}

export default App;