import React, { Component } from 'react';
import { Segment, Container, Header, Button, Icon, Dropdown } from 'semantic-ui-react';
import { SemanticToastContainer } from 'react-semantic-toasts';
// assets
import images from './assets/images';
import cidades from './assets/cidades.json';
import './assets/css/AppHeader.css';

class AppHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: undefined
        }
    }

    select = (e, {value}) => {
        this.setState({ selected: value })
    }

    click = () => {
        this.props.onSelect(this.state.selected)
    }

    render() {
        const welcomeMsg = Math.floor(Math.random()*3) === 1 ? 'chover' : Math.floor(Math.random()*3) === 2 ? 'esfriar' : 'esquentar'
        const SelectButton = () => {
            return this.state.selected === undefined ? (
                <Button disabled size='huge' onClick={this.click}>
                    Previsão <Icon name='right arrow' />
                </Button>
            ) : (
                <Button primary size='huge' onClick={this.click}>
                    Previsão <Icon name='right arrow' />
                </Button>
            )
        }

        return (
            <Container text className='app-header-container'>
                <SemanticToastContainer position="top-right" />
                <Header
                    as='h1'
                    content='Previsão do Tempo'
                    image={images.appLogo}
                    inverted
                    className='app-header'
                />
                <Header
                    as='h2'
                    content={'Escolha uma cidade para saber se vai ' + welcomeMsg }
                    inverted
                    className='app-subheader'
                />
                <Segment inverted>
                <Dropdown 
                    placeholder='Cidades disponíveis' 
                    options={cidades}
                    search
                    selection
                    onChange={this.select} />
                </Segment>
                <SelectButton />
            </Container>
        );
    }
}

export default AppHeader;
