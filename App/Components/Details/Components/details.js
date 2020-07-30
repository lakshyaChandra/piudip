import React, { Component } from 'react'
import {
  Modal,
  AppRegistry,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import Discover from './discover'
// import Description from './description'
import Image from './Image'
import Profile from 'App/GlobalComponents/Button.js'

export default class details extends Component {
  constructor() {
    super()
    this.state = {}
  }

  goToProfile = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Image />
        <View style={{ width: 300, alignSelf: 'center', marginTop: 10 }}>
          <TouchableOpacity
            hitSlop={{
              top: 50,
              bottom: 50,
              left: 25,
              right: 25,
            }}
            style={styles.profileButton}
            onPress={() => this.goToProfile()}
          >
            <View>
              <Text style={styles.title}>Profile</Text>
            </View>
          </TouchableOpacity>
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
  profileButton: {
    alignSelf: 'center',
    backgroundColor: '#FF7F50',
    width: 300,
    height: 40,
  },
  title: {
    alignSelf: 'center',
    padding: 5,
    fontSize: 18,
    color: 'dimgrey',
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
