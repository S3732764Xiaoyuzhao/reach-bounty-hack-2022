import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="Login">    
      <h2>
          We rely on donations to reach the people who need it the most
        </h2>     
        <p>
        Reaching financially excluded people around the world requires things like performing due diligence in over
80 countries. training hundreds of volunteer translators, and maintaining the infrastructure to facilitate over
$1B in loans.
        </p>
        <Container>
          <Row>
            <Col>
            <div>
            <Card style={{ width: '18rem' }}>           
            <Card.Body>
              <Card.Text>
              Cover the cost to facilitate this loan
              </Card.Text>
              <Card.Text>
              $3.75
              </Card.Text>
              <Button variant="primary">Select</Button>
             </Card.Body>
             </Card>
            </div>
            </Col>
            <Col><div>
            <Card style={{ width: '18rem' }}>           
            <Card.Body>
            <Card.Text>
            Reach more people around the world!
              </Card.Text>
              <Card.Text>
              $5.00
              </Card.Text>
              <Button variant="primary">Select</Button>
             </Card.Body>
             </Card>
            </div></Col>
            <Col><div>
            <Card style={{ width: '18rem' }}>           
            <Card.Body>
            <Card.Text>
            You decide - enter custom amount
              </Card.Text>
              <Card.Text>
              <form>
              <input type="number" name="name" />
        
              </form>
              </Card.Text>
              <Button a href="/Signup.js" variant="primary">Select</Button>
             </Card.Body>
             </Card>
            </div></Col>
          </Row>
        </Container>      

    </div>
  );
  
}

export default App;
