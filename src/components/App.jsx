// Located in main.jsx
import { Card, CardTitle, CardImg, Container, CardSubtitle } from 'react-bootstrap'
import '../styles/App.css'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import ReactIMG from '../assets/react.png'
import JavaScriptIMG from '../assets/js.png'
import CSSIMG from '../assets/css.png'
import BootstrapIMG from '../assets/bootstrap.png'
import NodeJsIMG from '../assets/node-js.png'
import FirebaseIMG from '../assets/firebase.png'
import CSharpIMG from '../assets/c-sharp.png'

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  color:'black',
  height: 60,
  lineHeight: '60px',
}));

export default function App() { 
  return (
    <>
      <Container style={{ marginTop: '10rem', paddingBottom: '10rem' }}>
        <Card style={{ paddingBottom: '5rem' }}>
          <CardTitle style={{fontSize: '3rem', marginBottom: '2rem', color: 'black', fontFamily: 'Comic Sans MS'}}>Skills</CardTitle>
          <Grid container spacing={2}>
            <Item elevation={12} style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', height: '15rem', color: 'white', marginBottom: '1rem'}}>
              <CardSubtitle style={{fontStyle: 'bold', fontSize: '2rem'}}>Front End</CardSubtitle>
              <div style={{float: 'left', marginLeft: '30rem'}}>
                <CardImg src={ReactIMG} width='70rem' height='70rem' style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Text style={{margin: '0rem'}}>React JS</Card.Text>
              </div>
              <div style={{float: 'left', marginLeft: '10rem'}}>
                <CardImg src={JavaScriptIMG} width='70rem' height='70rem' style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Text style={{margin: '0rem'}}>JavaScript</Card.Text>
              </div>
              <div style={{float: 'left', marginLeft: '10rem'}}>
                <CardImg src={CSSIMG} width='70rem' height='70rem' style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Text style={{margin: '0rem'}}>CSS</Card.Text>
              </div>
              <div style={{float: 'left', marginLeft: '10rem'}}>
                <CardImg src={BootstrapIMG} width='70rem' height='70rem' style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Text style={{margin: '0rem'}}>Bootstrap</Card.Text>
              </div>
              </Item>
            <Item elevation={12} style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', height: '15rem', color: 'white'}}>
              <CardSubtitle style={{fontStyle: 'bold', fontSize: '2rem'}}>Back End</CardSubtitle>
              <div style={{float: 'left', marginLeft: '38rem'}}>
                <CardImg src={CSharpIMG} width='70rem' height='70rem' style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Text style={{margin: '0rem'}}>C#</Card.Text>
              </div>
              <div style={{float: 'left', marginLeft: '10rem'}}>
                <CardImg src={FirebaseIMG} width='70rem' height='70rem' style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Text style={{margin: '0rem'}}>Firebase</Card.Text>
              </div>
              <div style={{float: 'left', marginLeft: '10rem'}}>
                <CardImg src={NodeJsIMG} width='70rem' height='70rem' style={{marginRight: 'auto', marginLeft: 'auto'}}/>
                <Card.Text style={{margin: '0rem'}}>NodeJS</Card.Text>
              </div>
            </Item>
          </Grid>
        </Card>
      </Container>
    </>
  )
}