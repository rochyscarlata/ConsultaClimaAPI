import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
const Error = ({mensaje}) =>{
    
    return(
        <Row  className="justify-content-md-center">
         <Col xs={6}>
         
          <Alert variant="danger"  dismissible>
        <Alert.Heading>Error!</Alert.Heading>
        <p>
        No hay resultados a la busqueda. Por favor revise que los datos ingresados sean correctos.
        </p>
      </Alert>
          </Col>
          </Row>
       
    );
}

export default Error