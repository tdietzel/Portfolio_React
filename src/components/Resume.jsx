// Located in main.jsx
import { Container, Card, CardText, CardImg, CardTitle, CardSubtitle } from 'react-bootstrap'

import resumeBKG from '../assets/resume.png'
import pdf from '../assets/pdf.png'
import '../styles/Resume.css'

export default function Resume() {
  return (
    <>
      <Container >
        <Card>
          <div style={{ position: 'relative' }}>
            <CardImg src={resumeBKG}/>

            {/* Resume Header */}
            <div className='resume-header'>
              <CardImg src={pdf} className='pdf-img'
                onClick={() => window.open('https://www.dropbox.com/scl/fi/pfk47wfwir3v9dbjvb2to/Resume-1.pdf?rlkey=iovgl9486qn384n4wdyxxoeel&dl=0', '_blank')}
              />
              <CardTitle className='resume-header-title'>Trent Dietzel</CardTitle>
              <CardSubtitle className='resume-header-subtitle'>Junior Web Developer</CardSubtitle>
              <Card.Text className='resume-header-text'>
                <span style={{fontStyle:'italic'}}>dietzelbiz@outlook.com </span> 
                • <a href='https://www.linkedin.com/in/trentdietzel/'>linkedin.com/in/trentdietzel </a> 
                • <a href='https://github.com/tdietzel'>github.com/tdietzel </a>• Oregon
              </Card.Text>
              <hr />
            </div>

            {/* About me on Resume */}
            <div className='resume-about-me'>
              <Card.Text className='resume-about-me-title'>About Me</Card.Text>
              <Card.Text className='resume-about-me-text'>With a lifelong passion for gaming and web development, I pursued a non-traditional path, acquiring valuable teamwork and problem-solving skills operating farm equipment. Eager to leverage these skills in a career transition to my early passion for technology.</Card.Text>

              {/* Projects on Resume*/}
              <div className='projects-education-header'>
                <Card.Text className='projects-title'>Projects</Card.Text>
                <Card.Text className='education-title'>Education</Card.Text>
              </div>
              <div className='resume-projects-div'>
                <Container style={{ marginTop:'0px'}}>
                  <Card className='resume-project'>
                    <CardText className='resume-project-link'>Coffee Inventory</CardText>
                  </Card>
                  <Card className='resume-project'>
                    <CardText className='resume-project-link'>Pizza Parlor</CardText>
                  </Card>
                  <Card className='resume-project'>
                    <CardText className='resume-project-link'>Account Login</CardText>
                  </Card>
                  <Card className='resume-project'>
                    <CardText className='resume-project-link'>Currency_Exchange</CardText>
                  </Card>
                </Container>
                <div>
                  <CardText className='resume-project-tech'>JavaScript, React/Redux, TDD</CardText>
                  <CardText className='resume-project-tech'>JavaScript, React/Redux, TDD</CardText>
                  <CardText className='resume-project-tech'>JavaScript, React/Redux, TDD</CardText>
                  <CardText className='resume-project-tech'>JavaScript, React/Redux, TDD</CardText>
                </div>

                {/* School on Resume */}
                <Card.Text className='resume-school-card'>
                  <span style={{ marginLeft:'90px', fontWeight:'bold' }}>Epicodus • 2023</span>
                  <br />
                  <span style={{ fontSize:'17px', fontStyle: 'italic' }}>Certificate in Web & Mobile Development</span>
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
                <Card.Text className='resume-experience-title'>Experience</Card.Text>
                <Card.Text style={{margin:'0px'}}>
                  <span className='resume-experience-years'>2023</span>
                  <span className='resume-experience-job'>Creekside Valley Farms</span>
                  <span className='resume-experience-position'>Equipment Operator</span>
                </Card.Text>
                <Card.Text className='resume-experience-job-card'>
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
                <Card.Text id='margin-zero'>
                  <span className='resume-experience-years'>2022</span>
                  <span className='resume-experience-job'>Creekside Valley Farms</span>
                  <span className='resume-experience-position'>Shop Helper to Equipment Operator</span>
                </Card.Text>
                <Card.Text className='resume-experience-job-card'>
                  • <span id="resume-bold">Determined optimal tools</span> and equipment requirements on the farm, showcasing
                    expertise in <span id="resume-bold">selecting the right resources</span> to enhance operational <span id="resume-bold">efficiency</span>
                  <br />
                  • Operated and maintained a wide range of farm equipment, showcasing <span id="resume-bold">adaptability</span> and a
                  <span id="resume-bold"> quick learning curve</span>.
                </Card.Text>
              </div>
              {/* Skills on Resume */}
              <div className='resume-skills-div'>
                <div>
                  <Card.Text className='resume-skills-title'>Skills</Card.Text>
                  <div style={{fontSize: '.8rem'}}>
                    <Card.Text id='margin-zero'>HTML / CSS</Card.Text>
                    <Card.Text id='margin-zero'>Git Version Control</Card.Text>
                    <Card.Text id='margin-zero'>API Calls</Card.Text>
                    <Card.Text id='margin-zero'>Pair Programming</Card.Text>
                  </div>
                </div>
                <div className='resume-skills-section'>
                  <Card.Text id='margin-zero'>Javascript</Card.Text>
                  <Card.Text id='margin-zero'>Webpack</Card.Text>
                  <Card.Text id='margin-zero'>mySQL/SQLite</Card.Text>
                  <Card.Text id='margin-zero'>BDD / TDD</Card.Text>
                </div>
                <div className='resume-skills-section'>
                  <Card.Text id='margin-zero'>TypeScript</Card.Text>
                  <Card.Text id='margin-zero'>Node.js</Card.Text>
                  <Card.Text id='margin-zero'>jQuery</Card.Text>
                  <Card.Text id='margin-zero'>DRY Code</Card.Text>
                </div>
                <div className='resume-skills-section'>
                  <Card.Text id='margin-zero'>React.js / Redux</Card.Text>
                  <Card.Text id='margin-zero'>Firebase</Card.Text>
                  <Card.Text id='margin-zero'>C#/.NET</Card.Text>
                  <Card.Text id='margin-zero'>QA & Testing</Card.Text>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </>
  )
}