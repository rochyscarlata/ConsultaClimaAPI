import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) =>{

    // const [busqueda, guardarBusqueda] = useState({
    //     ciudad: '',
    //     pais: ''
    // })

    const [error, guardarError] = useState(false);


    // traigo ciudad y pais
    const {ciudad, pais} = busqueda;
//funcion que pone los elementos en el state
    const handleChange = e =>{
        //actualizamos state
       guardarBusqueda({
           ...busqueda,
           [e.target.name] : e.target.value
       }); 
    }

        const handleSubmit =e =>{
            e.preventDefault ();

            if (ciudad.trim() === '' || pais.trim() === ''){
                guardarError(true);
                return;
            }
            
            guardarError(false);

            guardarConsultar(true);
        }

    return(
        <Container fluid>
        <Form   onSubmit={handleSubmit}> 
       

        <Row  className="justify-content-md-center">
         <Col xs={6}>

           <Form.Group controlId="formGridCity">
          <Form.Label className="label label-info">Ciudad</Form.Label>
          <Form.Control onChange={handleChange} value={ciudad} type="text" name="ciudad"   placeholder="Ingrese la ciudad"/>
         </Form.Group>
         </Col>
         </Row>
         <Row  className="justify-content-md-center">
         <Col xs={6}>
           <Form.Group controlId="exampleForm.SelectCustom">
         <Form.Label>Pais</Form.Label>
                <Form.Control as="select" onChange={handleChange} value={pais} placeholder="Seleccione el pais" name="pais" custom>
                     <option value="">--Seleccione un pais--</option>
                     <option value="AR">Argentina</option>
                     <option value="CO">Colombia</option>
                     <option value="CR">Costa Rica</option>
                     <option value="ES">España</option>
                     <option value="US">Estados Unidos</option>
                     <option value="MX">Mexico</option>
                     <option value="PE">Peru</option>        
            </Form.Control>
            <br></br>
            
  </Form.Group>
  </Col>
  </Row>
  <Row  className="justify-content-md-center">
      <Col xs={6}>
      <Form.Group>
          <Button variant="outline-info" type="submit" value="Buscar clima" size="lg" block>Buscar Clima</Button>{' '}
          </Form.Group>
      </Col>
      
  </Row>
  <Row className="justify-content-md-center">
  <Col xs={6}>
  {error ?  <Alert variant="danger" ><p>Todos los campos son obligatorios</p></Alert> : null}
</Col>
  </Row>

</Form>
</Container>
    );

}




export default Formulario;