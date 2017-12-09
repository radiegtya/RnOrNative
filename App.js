import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import {Button, Text, Icon, Header, Left, Body, Title, Right} from 'native-base';

export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async handleShowCamera() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleHideCamera(){
    this.setState({ hasCameraPermission: null })
  }

  _renderCamera(){
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Left>
            <Icon name="arrow-back" onPress={()=> this.handleHideCamera()}/>
          </Left>
          <Body>
            <Title>Camera</Title>
          </Body>
          <Right/>
        </Header>
        <Camera style={{ flex: 1 }} type={this.state.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
          </View>
        </Camera>
      </View>
    );
  }

  render() {
    const self = this;
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return (
        <View style={styles.container}>
          <Button full primary onPress={()=> this.handleShowCamera()}>
            <Text>Show Camera</Text>
            <Icon name="camera"/>
          </Button>
        </View>
      );
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return self._renderCamera();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC463E'
  },
  title: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold'
  }
})
