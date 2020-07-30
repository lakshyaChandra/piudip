import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class UploadImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uri: null,
      key: null,
    }
  }

  componentDidMount() {
    this.setState({
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXsaax1_UN-VhS1ZF-OS7OHsO95rcaTgnz90k6a4uoj0S0K6fY',
    })
  }

  handleChoosePhoto = () => {
    console.log('hello')
    const options = {
      noData: false,
    }
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({ uri: 'file:///' + response.path })
      }
    })
  }

  render() {
    const { uri } = this.state
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
          <Image
            source={{ uri: uri }}
            style={{
              width: 130,
              height: 120,
              borderRadius: 80,
              position: 'relative',
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
