// Located in main.jsx
import { Container, Card, CardText } from 'react-bootstrap'

import '../styles/TopProjects.css'

export default function TopProjects() {
  return (
    <>
      <Container className='top-projects-container'>
        <Card className='top-projects'>
          <CardText>Resort Website</CardText>
        </Card>
        <Card className='top-projects'>
          <CardText>Wikipedia Rebuild</CardText>
        </Card>
        <Card className='top-projects'>
          <CardText>Pizza Parlor</CardText>
        </Card>
        <Card className='top-projects'>
          <CardText>Cupcake Shop</CardText>
        </Card>
        <Card className='top-projects'>
          <CardText>Cold Play Website</CardText>
        </Card>
      </Container>
    </>
  )
}