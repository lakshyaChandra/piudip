import React, { Component } from 'react'
import {
  Modal,
  AppRegistry,
  View,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
} from 'react-native'
import Discover from './discover'
// import Description from './description'
import Image from './Image'

export default class details extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Image />
        <View style={{ width: 300, alignSelf: 'center', marginTop: 10 }}>
          <Button title="Edit Profile" color="#FF7F50" />
        </View>
        <Discover />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  separator: {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
  },

  text: {
    fontSize: 25,
    color: 'black',
    padding: 15,
  },
  texts: {
    fontSize: 20,
    color: 'black',
    padding: 15,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    marginTop: 4,
    position: 'absolute',
    fontWeight: 'bold',
  },
  button: {
    height: 35,
    width: 70,
    textAlign: 'center',
    borderRadius: 10,
    textAlignVertical: 'center',
    backgroundColor: '#DC143C',
    marginLeft: 50,
    marginRight: 20,
    marginTop: -50,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#F92660',
    width: 150,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 15,
    padding: 5,
  },
  pbutton: {
    height: 35,
    width: 40,
    textAlign: 'center',
    borderRadius: 10,
    textAlignVertical: 'center',
    backgroundColor: 'red',
    marginLeft: 50,
    marginRight: 10,
    marginTop: -50,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: 'white',
  },
  sbutton: {
    height: 35,
    width: 40,
    textAlign: 'center',
    borderRadius: 10,
    textAlignVertical: 'center',
    backgroundColor: 'red',
    marginLeft: 50,
    marginRight: 80,
    marginTop: -43,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: 'white',
  },
  counts: {
    fontSize: 14,
    color: 'black',
    padding: 15,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    marginTop: -40,
    position: 'relative',
    marginRight: 47,
  },
  dropdown: {
    maxWidth: 100,
    marginBottom: -70,
    marginLeft: 110,
    bottom: 65,
  },
})

AppRegistry.registerComponent('details', () => details)
