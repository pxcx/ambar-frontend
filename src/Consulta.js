import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Loader, Button, Icon } from 'semantic-ui-react';
import { toast } from 'react-semantic-toasts';
import axios from 'axios';
import { connect } from 'react-redux';
// components
import AppHeader from './AppHeader';
import WeatherCard from './WeatherCard';
// assets
import './assets/css/App.css';

class Consulta extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: false,
            cidadeID:  undefined,
            cidade: undefined,
            temperatura: 0,
            temperatura_max: 0,
            temperatura_min: 0,
            icon: undefined
        }

        this.onSelect = this.onSelect.bind(this)
    }

    // recebe o ID da cidade selecionado pelo usuario e carrega os dados da API
    onSelect = (cityID) => {
        // setando em loading
        this.setState({ loading: true, cidadeID: undefined, cidade: undefined })

        // fazendo a request
        axios.get('https://api.openweathermap.org/data/2.5/weather?id='+cityID+'&units=metric&APPID=ddca1c2d1fc3e2c06b00a39daf22ec1f')
        .then(response => {
            // request com sucesso, salvando state
            const consulta = {
                cidadeID: response.data.id,
                cidade: response.data.name,
                temperatura: response.data.main.temp,
                temperatura_max: response.data.main.temp_max,
                temperatura_min: response.data.main.temp_min,
                icon: response.data.weather[0].icon
            }
            this.setState(Object.assign({}, this.state, consulta))
            // disparando action que salva a consulta no reducer
            this.props.consultDone(consulta)
        })
        .catch(error => {
            // erro na request
            toast({
                type: 'error',
                icon: 'warning sign',
                title: 'Erro ao buscar dados!',
                description: error.message,
                animation: 'bounce',
                time: 5000
            });
        })
        .then(() => {
            // tirando de loading
            this.setState({ loading: false })
        })
    }

    render() {
        const { cidade } = this.state
        const { icon } = this.state
        const { temperatura } = this.state
        const { temperatura_max } = this.state
        const { temperatura_min } = this.state

        const Loading = () => {
            return this.state.loading ? (
                <Loader active inline='centered'>Carregando...</Loader>
            ) : (null)
        }

        return (
            <Container text className='app-grid'>
                <AppHeader onSelect={this.onSelect} />
                <Loading />
                {
                    this.state.cidadeID && this.state.cidade ? (
                        <WeatherCard
                            cidade={cidade}
                            temperatura={temperatura}
                            temperatura_max={temperatura_max}
                            temperatura_min={temperatura_min}
                            icon={icon}
                        />
                    ) : (null)
                }
                <Link to="/consultas-anteriores">
                    <Button size='small' floated='left' color='orange' className='anteriores-btn'>
                        <Icon name='left arrow' />Consultas anteriores
                    </Button>
                </Link>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      consultDone: (consulta) => dispatch({ type: 'CONSULT_DONE', payload: consulta })
    }
}

export default connect(null, mapDispatchToProps)(Consulta);
