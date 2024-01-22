// Located in main.jsx
import resumeBKG from '../assets/resume.png';
import pdf from '../assets/pdf.png';
import '../styles/Resume.css';

export default function Resume() {
  return (
    <>
      <div>
        <div style={{ position: 'relative' }}>
          <img src={resumeBKG} alt="Resume Background" className="resume-background" />

          {/* Resume Header */}
          <div className='resume-header'>
            <img
              src={pdf}
              alt="PDF Icon"
              className='pdf-img'
              onClick={() => window.open('https://www.dropbox.com/scl/fi/pfk47wfwir3v9dbjvb2to/Resume-1.pdf?rlkey=iovgl9486qn384n4wdyxxoeel&dl=0', '_blank')}
            />
            <h2 className='resume-header-title'>Trent Dietzel</h2>
            <h4 className='resume-header-subtitle'>Junior Web Developer</h4>
            <p className='resume-header-text'>
              <span style={{ fontStyle:'italic' }}>dietzelbiz@outlook.com </span> 
              • <a href='https://www.linkedin.com/in/trentdietzel/'>linkedin.com/in/trentdietzel </a> 
              • <a href='https://github.com/tdietzel'>github.com/tdietzel </a>• Oregon
            </p>
            <hr />
          </div>

          {/* About me on Resume */}
          <div className='resume-about-me'>
            <p className='resume-about-me-title'>About Me</p>
            <p className='resume-about-me-text'>With a lifelong passion for gaming and web development, I pursued a non-traditional path, acquiring valuable teamwork and problem-solving skills operating farm equipment. Eager to leverage these skills in a career transition to my early passion for technology.</p>

            {/* Projects on Resume*/}
            <div className='projects-education-header'>
              <p className='projects-title'>Projects</p>
              <p className='education-title'>Education</p>
            </div>
            <div style={{display:'flex'}}>
              <div className='resume-projects-div'>
                <div className='resume-project'
                  onClick={() => window.open('https://github.com/tdietzel/Coffee_Shop_Redux', '_blank')}>
                  <p className='resume-project-link'>Coffee Inventory</p>
                </div>
                <div className='resume-project'
                  onClick={() => window.open('https://github.com/tdietzel/Pizza_Parlor', '_blank')}>
                  <p className='resume-project-link'>Pizza Parlor</p>
                </div>
                <div className='resume-project'
                  onClick={() => window.open('https://github.com/tdietzel/Pierres_Bakery', '_blank')}>
                  <p className='resume-project-link'>Pierres Bakery</p>
                </div>
                <div className='resume-project'
                  onClick={() => window.open('https://github.com/tdietzel/Currency_Exchanger', '_blank')}>
                  <p className='resume-project-link'>Currency_Exchange</p>
                </div>
              </div>
              <div style={{width:'150px'}}>
                <p className='resume-project-tech'>JavaScript, React/Redux, TDD</p>
                <p style={{marginTop:'25px'}} className='resume-project-tech'>JavaScript, React/Redux, TDD</p>
                <p style={{marginTop:'25px'}} className='resume-project-tech'>C#, TDD</p>
                <p style={{marginTop:'25px'}} className='resume-project-tech'>JavaScript, React/Redux, TDD</p>
              </div>

              {/* School on Resume */}
              <p className='resume-school-card'>
                <span style={{ marginLeft:'90px', fontWeight:'bold' }}>Epicodus • 2023</span>
                <br />
                <span style={{ fontSize:'17px', fontStyle: 'italic' }}>Certificate in Web & Mobile Development</span>
                <br />
                • Completed 27 week full time program
                <br />
                • Pair Programming
                <br />
                • Built 80+ projects using C#, JavaScript, React, HTML, CSS
              </p>
            </div>

            {/* Experience on Resume */}
            <div>
              <p className='resume-experience-title'>Experience</p>
              <p style={{margin:'0px'}}>
                <span className='resume-experience-years'>2023</span>
                <span className='resume-experience-job'>Creekside Valley Farms</span>
                <span className='resume-experience-position'>Equipment Operator</span>
              </p>
              <p className='resume-experience-job-card'>
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
              </p>
              <p id='margin-zero'>
                <span className='resume-experience-years'>2022</span>
                <span className='resume-experience-job'>Creekside Valley Farms</span>
                <span className='resume-experience-position'>Shop Helper to Equipment Operator</span>
              </p>
              <p className='resume-experience-job-card'>
                • <span id="resume-bold">Determined optimal tools</span> and equipment requirements on the farm, showcasing
                  expertise in <span id="resume-bold">selecting the right resources</span> to enhance operational <span id="resume-bold">efficiency</span>
                <br />
                • Operated and maintained a wide range of farm equipment, showcasing <span id="resume-bold">adaptability</span> and a
                <span id="resume-bold"> quick learning curve</span>.
              </p>
            </div>

            {/* Skills on Resume */}
            <div className='resume-skills-div'>
              <div>
                <p className='resume-skills-title'>Skills</p>
                <div style={{fontSize: '.8rem'}}>
                  <p id='margin-zero'>HTML / CSS</p>
                  <p id='margin-zero'>Git Version Control</p>
                  <p id='margin-zero'>API Calls</p>
                  <p id='margin-zero'>Pair Programming</p>
                </div>
              </div>
              <div className='resume-skills-section'>
                <p id='margin-zero'>Javascript</p>
                <p id='margin-zero'>Webpack</p>
                <p id='margin-zero'>mySQL/SQLite</p>
                <p id='margin-zero'>BDD / TDD</p>
              </div>
              <div className='resume-skills-section'>
                <p id='margin-zero'>TypeScript</p>
                <p id='margin-zero'>Node.js</p>
                <p id='margin-zero'>jQuery</p>
                <p id='margin-zero'>DRY Code</p>
              </div>
              <div className='resume-skills-section'>
                <p id='margin-zero'>React.js / Redux</p>
                <p id='margin-zero'>Firebase</p>
                <p id='margin-zero'>C#/.NET</p>
                <p id='margin-zero'>QA & Testing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
