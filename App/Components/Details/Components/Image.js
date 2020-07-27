import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import Description from './description'

export default class UploadImage extends React.Component {
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
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 10,
          marginLeft: 10,
        }}
      >
        <Image
          source={require('App/Assets/Images/TOM.png')}
          style={{
            width: 130,
            height: 120,
            borderRadius: 80,
            borderWidth: 1,
            borderColor: 'black',
          }}
        />
        <View
          style={{
            flexDirection: 'column',
          }}
        >
          <Text
            style={{
              alignSelf: 'flex-start',
              fontSize: 18,
              fontWeight: 'bold',
              padding: 10,
            }}
          >
            Lakshya Chandra
          </Text>
          <Description />
        </View>
      </View>
    )
  }
}
