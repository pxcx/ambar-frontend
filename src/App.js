import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Segment } from 'semantic-ui-react';
// assets
import './assets/css/App.css';
//components
import Consulta from './Consulta'
import ConsultasAnteriores from './ConsultasAnteriores'


class App extends Component {

    render() {
    
        return (
            <Segment inverted vertical textAlign='center' className='app-container'>
                <Route path="/" exact component={Consulta} />
                <Route path="/consultas-anteriores" component={ConsultasAnteriores} />
            </Segment>
        );
    }
}

export default App;
