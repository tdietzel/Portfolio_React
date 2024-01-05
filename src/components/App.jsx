function App() {
  return (
    <>
      <div class="header">
        <h1>Trent Dietzel's <span id="title">Portfolio</span></h1>
      </div>
      <div class="body">
        <img src="../assets/myPicture.png" alt="A picture of me fishing." />
        <div class="current-projects">
            <h1 class="yellow"><em>Current Projects!</em></h1>
            <li><a href="https://github.com/tdietzel22/resort-website">Resort Website</a></li>
            <p class="cp-describe">This repository practices creating a resort website called Shady Pines with HTML and CSS.</p>
            <li><a href="https://github.com/tdietzel22/wikipedia-rebuild">Wikipedia Rebuild</a></li>
            <p class="cp-describe">This repository is a practice trying to rebuild the homepage of Wikipedia using CSS and HTML.</p>
            <li><a href="https://github.com/tdietzel22/practice-html">Pizza Parlor</a></li>
            <p class="cp-describe">This repository is a practice Pizza Parlor Website using HTML and CSS.</p>
            <li><a href="https://github.com/tdietzel22/cupcake-shop">Cupcake Shop</a></li>
            <p class="cp-describe">This repository is a practice Cupcake Shop using HTML and CSS</p>
            <li><a href="https://github.com/tdietzel22/band-website">Cold Play Website</a></li>
            <p class="cp-describe">This website practice using HTML and CSS to recreate tour dates for Cold Play.</p>
        </div>
        <div class="about-me">
            <h1 class="blue"><em>About me!</em></h1>
            <h3 class="red">Interests / Pass Times</h3>
            <ul>
                <li>Music</li>
                <li>Cooking</li>
                <li>Exploring</li>
            </ul>
            <h3 class="red">Hobbies</h3>
            <li>Working Out</li>
            <p class="sub-text">Working out is a great way to keep my mind and body focused.</p>
            <li>Fishing</li>
            <p class="sub-text">I love fishing for the adventure and occasionally even to keep and eat!</p>
            <li>Boxing</li>
            <p class="sub-text">I've always been into contact sports and have done everything from wrestling & jui-jitsu, to the most recent boxing.</p>
            <hr />
            <h3 class="red">Skills</h3>
            <ol>
              <li>Teamwork</li>
              <li>Work Ethic</li>
              <li>Organization</li>
            </ol>
        </div>
        <div class="my-background">
            <h1 class="blue"><em>My background!</em></h1>
            <h3 class="red">Previous Education</h3>
            <ol>
              <li>High-School Diploma</li>
              <li>2 Years of EASA in Highschool</li>
            </ol>
            <p class="sub-text">( Engineering & Aerospace Science Academy )</p>
            <h3 class="red">Job Experience</h3>
            <li>Farm Equipment Operator</li>
            <p class="sub-text">June 2023 - Sep 2023 · 4 mos</p>
            <li>Package Handler</li>
            <p class="sub-text">Nov 2022 - Jan 2023 · 3 mos</p>
            <li>Farm Equipment Operator</li>
            <p class="sub-text">Nov 2021 - Sep 2022 · 12 mos</p>
            <hr />
            <h3 class="red">Why Im Enrolled In Epicodus</h3>
            <p id="enroll-pg">I first heard about <em>Epicodus</em> in the summer of 2022 as a way for me to expand my learning and dive deeper into coding. During that time I was working peak season on a farm, <strong>90/100</strong> hour weeks, so there wasn't much room for school. Now that I have lots of free time going into winter I decided it would be the perfect time for a career change.</p>
        </div>
    </div>
    </>
  )
}

export default App;