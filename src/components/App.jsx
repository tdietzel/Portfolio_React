// Located in main.jsx
import '../styles/App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import ReactIMG from '../assets/react.png';
import JavaScriptIMG from '../assets/js.png';
import CSSIMG from '../assets/css.png';
import BootstrapIMG from '../assets/bootstrap.png';
import NodeJsIMG from '../assets/node-js.png';
import FirebaseIMG from '../assets/firebase.png';
import CSharpIMG from '../assets/c-sharp.png';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: 'black',
  height: 60,
  lineHeight: '60px',
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '1rem',
  backgroundColor: theme.palette.primary.main,
}));

export default function App() {
  return (
    <>
      <div style={{fontSize: '3rem', marginBottom: '2rem', color: 'black', fontFamily: 'Comic Sans MS'}}>Skills</div>
      <Grid container spacing={2}>
        <Item elevation={12} style={{ height: '15rem'}}>
          <div>
            <div style={{ float: 'left', marginLeft: '30rem', marginTop:'4rem' }}>
              <img src={ReactIMG} alt="React JS" style={{ width: '5rem', height: '5rem', marginRight: 'auto', marginLeft: 'auto' }} />
              <p style={{ margin: '0rem' }}>React JS</p>
            </div>
            <div style={{ float: 'left', marginLeft: '10rem', marginTop:'4rem' }}>
              <img src={JavaScriptIMG} alt="JavaScript" style={{ width: '5rem', height: '5rem', marginRight: 'auto', marginLeft: 'auto' }} />
              <p style={{ margin: '0rem' }}>JavaScript</p>
            </div>
            <div style={{ float: 'left', marginLeft: '10rem', marginTop:'4rem' }}>
              <img src={CSSIMG} alt="CSS" style={{ width: '5rem', height: '5rem', marginRight: 'auto', marginLeft: 'auto' }} />
              <p style={{ margin: '0rem' }}>CSS</p>
            </div>
            <div style={{ float: 'left', marginLeft: '10rem', marginTop:'4rem' }}>
              <img src={BootstrapIMG} alt="Bootstrap" style={{ width: '5rem', height: '5rem', marginRight: 'auto', marginLeft: 'auto' }} />
              <p style={{ margin: '0rem' }}>Bootstrap</p>
            </div>
          </div>
        </Item>
        <Item elevation={12} style={{ height: '15rem' }}>
          <div>
            <div style={{ float: 'left', marginLeft: '38rem', marginTop:'4rem' }}>
              <img src={CSharpIMG} alt="C#" style={{ width: '5rem', height: '5rem', marginRight: 'auto', marginLeft: 'auto' }} />
              <p style={{ margin: '0rem' }}>C#</p>
            </div>
            <div style={{ float: 'left', marginLeft: '10rem', marginTop:'4rem' }}>
              <img src={FirebaseIMG} alt="Firebase" style={{ width: '5rem', height: '5rem', marginRight: 'auto', marginLeft: 'auto' }} />
              <p style={{ margin: '0rem' }}>Firebase</p>
            </div>
            <div style={{ float: 'left', marginLeft: '10rem', marginTop:'4rem' }}>
              <img src={NodeJsIMG} alt="NodeJS" style={{ width: '5rem', height: '5rem', marginRight: 'auto', marginLeft: 'auto' }} />
              <p style={{ margin: '0rem' }}>NodeJS</p>
            </div>
          </div>
        </Item>
      </Grid>
    </>
  );
}