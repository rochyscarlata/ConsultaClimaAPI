import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Clima = ({resultado}) =>{
    const {name, main} = resultado;
    if (!name) return null;

    const kelvin = 273.15;

    return(
        <Container fluid>
        <Row className="justify-content-md-center">
             <Col xs={6}>
      <Form.Group>
  <Card border="info" style={{ width: '20rem'}}>
  <Card.Body>
    <Card.Title>El clima de {name} es: <p className="temperatura"> {parseFloat (main.temp - kelvin, 10 ).toFixed(2)}<span>&#x2103;</span></p> </Card.Title>
    <Card.Text>
    <p className="estilosp">Temperatura maxima: <p className="noestilo">{parseFloat (main.temp_max - kelvin, 10 ).toFixed(2)}<span>&#x2103;</span></p></p>
    <p className="estilosp">Temperatura minima: <p className="noestilo">{parseFloat (main.temp_min - kelvin, 10 ).toFixed(2)}<span>&#x2103;</span></p></p>
    </Card.Text>
  </Card.Body>
</Card>
</Form.Group>
</Col>
</Row>
</Container>
    );
}


export default Clima ;