import { Container, Card, CardText, CardImg, CardTitle, CardSubtitle } from 'react-bootstrap'

import resumeBKG from '../assets/resume.png'
import pdf from '../assets/pdf.png'

export default function Resume() {
  return (
    <>
      <Container >
        <Card>
          <div style={{ position: 'relative' }}>
            <CardImg src={resumeBKG}/>
            <div style={{ position: 'absolute', top: '13%', left: '39%', color: 'black', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0px', marginBottom: '0px', float:'right' }}>
                <CardImg src={pdf} height='50px' width='50px'/>
              </div>
              {/* Header on Resume */}
              <CardTitle style={{ fontWeight:'bold', fontSize:'4rem', fontFamily:'Courier New', marginLeft:'35px' }}>Trent Dietzel</CardTitle>
              <CardSubtitle style={{ fontWeight:'bold', fontSize:'2rem', fontFamily:'Lexend' }}>Junior Web Developer</CardSubtitle>
              <Card.Text style={{margin:'0px', fontFamily:'Arial'}}><span style={{fontStyle:'italic'}}>dietzelbiz@outlook.com</span> • <a href='https://www.linkedin.com/in/trentdietzel/'>linkedin.com/in/trentdietzel</a> • <a href='https://github.com/tdietzel'>github.com/tdietzel</a> • Oregon</Card.Text>
              <hr />
            </div>
            {/* About me on Resume */}
            <div style={{ position: 'absolute', top: '23%', left: '39%', color: 'black', textAlign: 'left' }}>
              <Card.Text style={{ fontSize: '1.3rem', fontWeight:'bold', fontFamily:'Courier New', marginBottom:'0px' }}>About Me</Card.Text>
              <Card.Text style={{ width:'600px', marginBottom:'0px', fontFamily:'Calibri', marginTop:'0px' }}>With a lifelong passion for gaming and web development, I pursued a non-traditional path, acquiring valuable teamwork and problem-solving skills operating farm equipment. Eager to leverage these skills in a career transition to my early passion for technology.</Card.Text>

              {/* Projects on Resume */}
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px', marginTop: '0px', marginBottom: '0px', height:'3rem' }}>
                <Card.Text style={{ textAlign: 'left', width: '200px', fontSize: '1.3rem', fontWeight:'bold', fontFamily:'Courier New' }}>Projects</Card.Text>
                <Card.Text style={{ textAlign: 'left', width: '200px', fontSize: '1.3rem', fontWeight:'bold', fontFamily:'Courier New', marginBottom:'0px' }}>Education</Card.Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '600px', marginTop: '0px', marginBottom: '0px' }}>
                <Container style={{ marginTop:'0px'}}>
                  <Card className='resume-projects'>
                    <CardText style={{ margin:'0px', color:'blue' }}>Coffee Inventory</CardText>
                  </Card>
                  <Card className='resume-projects'>
                    <CardText style={{ margin:'0px', color:'blue' }}>Pizza Parlor</CardText>
                  </Card>
                  <Card className='resume-projects'>
                    <CardText style={{ margin:'0px', color:'blue' }}>Account Login</CardText>
                  </Card>
                  <Card className='resume-projects'>
                    <CardText style={{ margin:'0px', color:'blue' }}>Currency_Exchange</CardText>
                  </Card>
                </Container>
                <div>
                  <CardText style={{marginTop:'10px', marginBottom:'0px', marginRight:'25px', fontSize:'9px', height: '1rem'}}>JavaScript, React/Redux, TDD</CardText>
                  <CardText style={{marginTop:'11px', marginBottom:'0px', marginRight:'25px', fontSize:'9px', height: '1rem'}}>JavaScript, React/Redux, TDD</CardText>
                  <CardText style={{marginTop:'11px', marginBottom:'0px', marginRight:'25px', fontSize:'9px', height: '1rem'}}>JavaScript, React/Redux, TDD</CardText>
                  <CardText style={{marginTop:'11px', marginBottom:'0px', marginRight:'25px', fontSize:'9px', height: '1rem'}}>JavaScript, React/Redux, TDD</CardText>
                </div>

                {/* School on Resume */}
                <Card.Text style={{ marginRight:'0px', marginTop:'0px', width:'300px', fontFamily:'Helvetica Neue'}}>
                  <span style={{ marginLeft:'90px', fontWeight:'bold' }}>Epicodus • 2023</span>
                  <br />
                  <span style={{ fontFamily:'Garamond', fontSize:'17px' }}>Certificate in Web & Mobile Development</span>
                  <br />
                  • Completed 27 week full time program
                  <br />
                  • Pair Programming
                  <br />
                  • Built 80+ projects using C#, JavaScript, React, HTML, CSS
                </Card.Text>
              </div>

              {/* Experience on Resume */}
              <div>
                <Card.Text style={{fontSize: '1.3rem', fontWeight:'bold', marginTop:'0px', fontFamily:'Courier New'}}>Experience</Card.Text>
                <Card.Text style={{margin:'0px'}}>
                  <span style={{fontFamily:'Comic Sans MS', fontSize:'15px'}}>2023</span>
                  <span style={{fontFamily:'Garamond', fontSize:'19px', fontWeight:'bold', marginLeft:'30px'}}>Creekside Valley Farms</span>
                  <span style={{fontFamily:'Comic Sans MS', fontSize:'15px', fontStyle:'italic', marginLeft:'30px'}}>Equipment Operator</span>
                </Card.Text>
                <Card.Text style={{width:'600px', marginTop:'3px', marginLeft:'60px', fontFamily:'Roboto'}}>
                  • <span id="resume-bold">Led the group</span> as the first combine in the convoy during the grain harvest, demonstrating
                  <span id="resume-bold"> leadership</span> and <span id="resume-bold">effective coordination</span>.
                  <br />
                  • Worked on over <span id="resume-bold">100 different fields/orchards</span> within a 3-month span, <span id="resume-bold">adapting to</span> various
                  <span id="resume-bold"> environments</span> and <span id="resume-bold">tasks</span>.
                  <br />
                  • Collaborated with <span id="resume-bold">diverse teams</span> for mowing, flailing, combining, and dragging operations,
                  displaying <span id="resume-bold">strong teamwork</span> and <span id="resume-bold">communication skills</span>.
                  <br />
                  • <span id="resume-bold">Communicated daily</span> progress, showcasing a commitment to <span id="resume-bold">documentation</span> and <span id="resume-bold">reporting,</span> a
                  skill transferable to code and process documentation.
                </Card.Text>
                <Card.Text style={{margin:'0px'}}>
                  <span style={{fontFamily:'Comic Sans MS', fontSize:'15px'}}>2022</span>
                  <span style={{fontFamily:'Garamond', fontSize:'19px', fontWeight:'bold', marginLeft:'30px'}}>Creekside Valley Farms</span>
                  <span style={{fontFamily:'Comic Sans MS', fontSize:'15px', fontStyle:'italic', marginLeft:'30px'}}>Shop Helper to Equipment Operator</span>
                </Card.Text>
                <Card.Text style={{width:'600px', marginTop:'3px', marginLeft:'60px', fontFamily:'Roboto'}}>
                  • <span id="resume-bold">Determined optimal tools</span> and equipment requirements on the farm, showcasing
                    expertise in <span id="resume-bold">selecting the right resources</span> to enhance operational <span id="resume-bold">efficiency</span>
                  <br />
                  • Operated and maintained a wide range of farm equipment, showcasing <span id="resume-bold">adaptability</span> and a
                  <span id="resume-bold"> quick learning curve</span>.
                </Card.Text>
              </div>
              {/* Skills on Resume */}
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '650px', marginTop: '0px', marginBottom: '0px', fontFamily:'Arial' }}>
                <div>
                  <Card.Text style={{fontSize: '1.3rem', fontWeight:'bold', margin:'0px', fontFamily:'Courier New'}}>Skills</Card.Text>
                  <Card.Text style={{margin:'0px'}}>HTML / CSS</Card.Text>
                  <Card.Text style={{margin:'0px'}}>Git Version Control</Card.Text>
                  <Card.Text style={{margin:'0px'}}>API Calls</Card.Text>
                  <Card.Text style={{margin:'0px'}}>Pair Programming</Card.Text>
                </div>
                <div style={{marginTop:'20px'}}>
                  <Card.Text style={{margin:'0px'}}>Javascript</Card.Text>
                  <Card.Text style={{margin:'0px'}}>Webpack</Card.Text>
                  <Card.Text style={{margin:'0px'}}>mySQL/SQLite</Card.Text>
                  <Card.Text style={{margin:'0px'}}>BDD / TDD</Card.Text>
                </div>
                <div style={{marginTop:'20px'}}>
                  <Card.Text style={{margin:'0px'}}>TypeScript</Card.Text>
                  <Card.Text style={{margin:'0px'}}>Node.js</Card.Text>
                  <Card.Text style={{margin:'0px'}}>jQuery</Card.Text>
                  <Card.Text style={{margin:'0px'}}>DRY Code</Card.Text>
                </div>
                <div style={{marginTop:'20px'}}>
                  <Card.Text style={{margin:'0px'}}>React.js / Redux</Card.Text>
                  <Card.Text style={{margin:'0px'}}>Firebase</Card.Text>
                  <Card.Text style={{margin:'0px'}}>C#/.NET</Card.Text>
                  <Card.Text style={{margin:'0px'}}>QA & Testing</Card.Text>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </>
  )
}