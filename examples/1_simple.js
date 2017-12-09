import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello React Native</Text>
        <Text style={styles.subtitle}>by Facebook Developer Circle</Text>
      </View>
    );
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
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF'
  }
})
