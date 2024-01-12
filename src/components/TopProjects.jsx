import { Container, Card, CardText } from 'react-bootstrap'

export default function TopProjects() {
  return (
    <>
      <Container style={{border:'2px solid darkGrey', marginRight:'60px', marginLeft:'60px'}}>
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