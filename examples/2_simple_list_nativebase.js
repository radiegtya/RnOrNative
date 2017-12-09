import React, {Component} from 'react';
import {Container, Content, Header, Left, Body, Right, List, ListItem, Text, Thumbnail, Icon} from 'native-base';

export default class App extends Component {

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
            <ListItem avatar style={{padding: 10}}>
              <Left>
                <Thumbnail
                  source={{uri: 'http://bit.ly/rn-hero1'}}
                />
              </Left>
              <Body>
                <Text>Karina</Text>
                <Text note>Assassin</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
