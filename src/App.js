import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import './components/Header.css';
import './components/Formulario.css';
import Formulario from './components/Formulario'
import Clima from './components/Clima';
import './components/Clima.css';
import Error from './components/Error'



function App() {
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });
    const [consultar, guardarConsultar]= useState(false);
    const [resultado, guardarResultado] = useState({});
    const [error, guardarError] = useState(false);

    const {ciudad, pais} = busqueda;

    useEffect(() => {
        const consultarAPI = async () =>{

         
            if (consultar){
                const appId = 'dacc0418e9bd5e0a0a2f3f3bbb35b92f';
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    
                const respuesta = await fetch (url);
                const resultado = await respuesta.json();
    
                guardarResultado(resultado);
                guardarConsultar(false);

                //ver si hay resultados correctos en la consulta
                if(resultado.cod === "404"){
                    guardarError(true);
                }else {
                    guardarError(false);
                }
            }
        }
        consultarAPI();
        //eslint-disable-next-line
    },[consultar]);

    let componente;

    if(error){
        componente=  <Error mensaje="No hay resultados"/>
            // <Alert variant="danger" onClose={() => error(false)} dismissible>
            //   <Alert.Heading>Error!</Alert.Heading>
            //   <p>No hay resultados para su busqueda. Por favor controle que los datos ingresados sean correctos</p>
            // </Alert>
    }else{
        componente =  <Clima  resultado={resultado}/>
    }
   

   return(
       <Fragment>
           <Header/>
           <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} guardarConsultar={guardarConsultar}/>
          {componente}
       </Fragment>
   );
 }

export default App;
