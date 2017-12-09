import React, {Component} from 'react';
import {Container, Content, Header, Left, Body, Right, List, ListItem, Text, Thumbnail, Icon} from 'native-base';

import axios from 'axios';

export default class App extends Component {

  state = {
    heroes: []
  }

  async componentDidMount(){
    const heroes = await axios.get(`http://rest.learncode.academy/api/dumbways/heroes`);
    this.setState({heroes: heroes.data})
  }

  renderRow(hero){
    return (
      <ListItem key={hero.id} avatar style={{padding: 10}}>
        <Left>
          <Thumbnail
            source={{uri: hero.image}}
          />
        </Left>
        <Body>
          <Text>{hero.name}</Text>
          <Text note>{hero.role}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward"/>
        </Right>
      </ListItem>
    )
  }

  render(){
    return (
      <Container>
        <Header>
          <Body>
            <Text>Heroes</Text>
          </Body>
        </Header>
        <Content>
          <List>
            {this.state.heroes.map(hero=> this.renderRow(hero))}
          </List>
        </Content>
      </Container>
    )
  }
}
