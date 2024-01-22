// Located in main.jsx
// NavBar.jsx is in Return
import CursorFollower from './CursorFollower';
import NavBar from './NavBar';
import image from "../assets/myPicture.png";
import '../styles/Header.css';

function Header() {
  return (
    <>
      {/* Moving Fish Cursor */}
      <div className="App">
        <CursorFollower />
      </div>

      <div className="main-header">
        {/* Profile Picture */}
        <div className="profile-pic-container">
          <div className="profile-pic">
            <img src={image} alt="A picture of me fishing." className="profile-picture" />
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
              <span style={{ "--index": 13 }}>r</span>
            </span>
          </h1>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default Header;
