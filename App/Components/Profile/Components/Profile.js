// import React, { Component } from 'react'
// import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native'

// export default class FeedBackPage extends Component {
//   constructor() {
//     super()
//     this.state = { text: '', error: '', success: false }
//   }

//   //   componentDidMount() {
//   //     this.props.setError(null);
//   //   }

//   onSubmit = (route) => {
//     this.onPress()
//     if (this.state.text.length > 1) {
//       this.setState({
//         text: '',
//         success: true,
//       })
//     }
//   }

//   onPress = () => {
//     const { text } = this.state
//     if (text.length < 1) {
//       this.setState({
//         error: I18n.t('Cant leave this field empty'),
//       })
//     }
//   }

//   validate = () => {
//     const { text } = this.state
//     if (text.length >= 0) {
//       this.setState({
//         error: '',
//       })
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           onChangeText={(text) => this.setState({ text })}
//           onChange={(text) => this.validate()}
//           value={this.state.text}
//           placeholder={'Enter Feedback'}
//           multiline={true}
//           numberOfLines={5}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     height: 150,
//     borderWidth: 1,
//     marginTop: 60,
//     marginLeft: 10,
//     marginRight: 10,
//     // fontSize: Fonts.extraLarge,
//     textAlignVertical: 'top',
//   },
//   feedback: {
//     //fontSize: Fonts.large,
//     marginTop: 20,
//     marginLeft: 10,
//     // fontFamily: Fonts.fontBold,
//     // color: Colors.buttonColor,
//   },
//   success: {
//     alignSelf: 'center',
//     marginTop: 30,
//     // color: Colors.buttonColor,
//     // fontFamily: Fonts.fontRegular,
//     // fontSize: Fonts.extraLarge,
//   },
//   error: {
//     marginLeft: 10,
//     fontSize: 16,
//     // color: Colors.validate,
//     // fontFamily: Fonts.fontRegular,
//   },
//   instructions: {
//     fontSize: 16,
//     marginLeft: 10,
//     marginRight: 10,
//     // fontFamily: Fonts.fontRegular,
//   },
// })

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch } from 'react-native'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = { Id: '', passWord: '', showPassword: true }
  }

  IdChange = (text) => {
    this.setState({
      Id: text,
    })
  }
  toggleSwitch = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  passWordChanged = (text) => {
    this.setState({
      passWord: text,
    })
  }

  goToDashboard = () => {
    this.props.navigation.navigate('DashBoard')
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={require('App/Assets/Images/pp.jpeg')} />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <TextInput
              style={styles.buttonContainer}
              placeholder="Username"
              maxLength={20}
              onChangeText={(text) => this.IdChange(text)}
            />
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.buttonContainerPass}
                placeholder="PassWord"
                maxLength={15}
                onChangeText={(text) => this.passWordChanged(text)}
                secureTextEntry={this.state.showPassword}
              />
              <Switch onValueChange={this.toggleSwitch} value={!this.state.showPassword} />
            </View>
            <TouchableOpacity
              style={styles.buttonContainerSave}
              onPress={() => this.goToDashboard()}
            >
              <Text style={{ color: 'dimgrey' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    //backgroundColor: '#FF7F50',
    height: 200,
    borderBottomRightRadius: 70,
  },
  avatar: {
    width: 400,
    height: 170,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 20,
  },
  heading: {
    alignSelf: 'center',
    marginTop: 40,
    fontSize: 34,
    color: 'dimgrey',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#FF7F50',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#FF7F50',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonContainerPass: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 50,
  },
  buttonContainerSave: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 160,
    backgroundColor: '#FF7F50',
    borderRadius: 20,
  },
})
