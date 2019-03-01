import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
// assets
import './assets/css/WeatherCard.css';

class WeatherCard extends Component {
    render() {
        const { icon } = this.props
        const { cidade } = this.props
        const { temperatura } = this.props
        const { temperatura_max } = this.props
        const { temperatura_min } = this.props

        return (
            <Card centered>
                <Card.Content>
                    <Image floated='left' size='tiny' src={'http://openweathermap.org/img/w/'+icon+'.png'} />
                    <Card.Header className='title'>{ cidade }</Card.Header>
                    <Card.Description>
                    <p className='temp'>Temperatura <span className='atual'>{ temperatura }&deg; C</span></p>
                    <p className='temp-max'>Máxima <span className='max'>{ temperatura_max }&deg; C</span></p>
                    <p className='temp-min'>Mínima <span className='min'>{ temperatura_min }&deg; C</span></p>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default WeatherCard;
