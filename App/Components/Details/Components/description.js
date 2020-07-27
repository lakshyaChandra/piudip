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

export default class details extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginLeft: 10 }}>About:hi my name is lakshya</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
