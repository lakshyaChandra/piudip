import React from 'react'
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from 'App/Components/Register/Components/FormInput.js'
import FormButton from 'App/Components/Register/Components/FormButton.js'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorName: false,
    errorPass: false,
  }

  handleEmailChange = (email) => {
    this.setState({ email })

    if (email.length > 0) {
      this.setState({
        errorName: false,
      })
    }
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
    if (password.length > 0) {
      this.setState({
        errorPass: false,
      })
    }
  }

  onLogin = async () => {
    const { email, password } = this.state
    try {
      if (
        email.length > 0 &&
        password.length > 0 &&
        this.state.errorName === false &&
        this.state.errorPass === false
      ) {
        this.props.navigation.navigate('DashBoard')
      } else {
        this.setState({
          errorName: true,
          errorPass: true,
        })
      }
    } catch (error) {}
  }

  //goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const { email, password } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={require('App/Assets/Images/pp.jpeg')} />
        </View>
        <FormInput
          name="email"
          placeholder="Enter UserName"
          autoCapitalize="none"
          onChangeText={this.handleEmailChange}
          iconName="ios-mail"
          iconColor="#2C384A"
        />

        {this.state.errorName === true && <Text>Not A Valid Email</Text>}
        <FormInput
          name="password"
          placeholder="Enter password"
          secureTextEntry
          onChangeText={this.handlePasswordChange}
          iconName="ios-lock"
          iconColor="#2C384A"
        />
        {this.state.errorPass === true && <Text>Not A Valid Password</Text>}
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType="outline"
            onPress={this.onLogin}
            title="LOGIN"
            buttonColor="#039BE5"
          />
        </View>
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('Register')}
          titleStyle={{
            color: '#F57C00',
          }}
          type="clear"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    margin: 25,
  },
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
})

// import React, { Component } from 'react'
// import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Switch } from 'react-native'

// export default class Profile extends Component {
//   constructor() {
//     super()
//     this.state = { Id: '', passWord: '', showPassword: true }
//   }

//   IdChange = (text) => {
//     this.setState({
//       Id: text,
//     })
//   }
//   toggleSwitch = () => {
//     this.setState({ showPassword: !this.state.showPassword })
//   }

//   passWordChanged = (text) => {
//     this.setState({
//       passWord: text,
//     })
//   }

//   goToDashboard = () => {
//     this.props.navigation.navigate('DashBoard')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Image style={styles.avatar} source={require('App/Assets/Images/pp.jpeg')} />
//         </View>
//         <View style={styles.body}>
//           <View style={styles.bodyContent}>
//             <TextInput
//               style={styles.buttonContainer}
//               placeholder="Username"
//               maxLength={20}
//               onChangeText={(text) => this.IdChange(text)}
//             />
//             <View style={{ flexDirection: 'row' }}>
//               <TextInput
//                 style={styles.buttonContainerPass}
//                 placeholder="PassWord"
//                 maxLength={15}
//                 onChangeText={(text) => this.passWordChanged(text)}
//                 secureTextEntry={this.state.showPassword}
//               />
//               <Switch onValueChange={this.toggleSwitch} value={!this.state.showPassword} />
//             </View>
//             <View style={{ flexDirection: 'row' }}>
//               <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Not A User?</Text>
//               <TouchableOpacity
//                 style={{ paddingLeft: 5 }}
//                 onPress={() => this.props.navigation.navigate('Register')}
//               >
//                 <Text style={{ fontSize: 16, color: 'blue' }}>Register</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity
//               style={styles.buttonContainerSave}
//               onPress={() => this.goToDashboard()}
//             >
//               <Text style={{ color: 'dimgrey' }}>Save</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   header: {
//     //backgroundColor: '#FF7F50',
//     height: 200,
//     borderBottomRightRadius: 70,
//   },
//   avatar: {
//     width: 400,
//     height: 170,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: 'white',
//     marginBottom: 10,
//     alignSelf: 'center',
//     position: 'absolute',
//     marginTop: 20,
//   },
//   heading: {
//     alignSelf: 'center',
//     marginTop: 40,
//     fontSize: 34,
//     color: 'dimgrey',
//   },
//   name: {
//     fontSize: 22,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   body: {
//     marginTop: 40,
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 30,
//   },
//   name: {
//     fontSize: 28,
//     color: '#FF7F50',
//     fontWeight: '600',
//   },
//   info: {
//     fontSize: 16,
//     color: '#FF7F50',
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: '#696969',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: 250,
//     borderWidth: 1,
//     borderRadius: 20,
//   },
//   buttonContainerPass: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: 250,
//     borderWidth: 1,
//     borderRadius: 20,
//     marginLeft: 50,
//   },
//   buttonContainerSave: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: 160,
//     backgroundColor: '#FF7F50',
//     borderRadius: 20,
//   },
// })
