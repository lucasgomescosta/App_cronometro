import React, { Component } from 'react';

import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Image source={require('./src/cronometro.png')} />
          <Text style={styles.time}>0</Text>
            <View style={styles.btnarea}>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.btntexto}> Vai</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.btntexto}>Limpar</Text>
              </TouchableOpacity>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  time: {
    marginTop: -160,
    color: '#FFFF',
    fontSize: 72,
    fontWeight: 'bold',
  },
  btnarea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btntexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }

});