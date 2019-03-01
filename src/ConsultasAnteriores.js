import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Icon, Card, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
//components
import WeatherCard from './WeatherCard';
// assets
import './assets/css/App.css';

class ConsultasAnteriores extends Component {
    render() {
        return (
            <Container text className='app-grid'>
                {
                    this.props.consultas.length > 0 ? (
                        <Container text>
                            <Header
                                as='h2'
                                content='Consultas Recentes'
                                inverted
                                textAlign='center'
                            />
                            <Card.Group className='card-grid'>
                                {
                                    this.props.consultas.map( (consulta,key) => {
                                        return (
                                            <WeatherCard
                                                key={key}
                                                cidade={consulta.cidade}
                                                temperatura={consulta.temperatura}
                                                temperatura_max={consulta.temperatura_max}
                                                temperatura_min={consulta.temperatura_min}
                                                icon={consulta.icon}
                                            />
                                        )
                                    })
                                }
                            </Card.Group>
                        </Container>
                    ) : (
                        <Header
                            as='h3'
                            content='Você ainda não realizou nenhuma consulta!'
                            inverted
                            textAlign='center'
                        />
                    )
                }
                <Link to="/">
                    <Button size='small' floated='right' color='green' className='anteriores-btn'>
                        Fazer Nova Consulta <Icon name='right arrow' />
                    </Button>
                </Link>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        consultas: state.default,
    }
}

export default connect(mapStateToProps)(ConsultasAnteriores);
