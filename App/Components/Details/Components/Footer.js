import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Input, Icon } from 'react-native-elements'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uri: null,
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 0.15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ff9e67',
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 0.3 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Icon name="user" type="simple-line-icon" size={35} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.3 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoard')}>
            <Icon name="home" type="simple-line-icon" size={35} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.3 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Icon name="login" type="simple-line-icon" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
