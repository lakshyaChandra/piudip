import React from 'react'
import { StyleSheet, SafeAreaView, View, Image, Text, Switch } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from 'App/Components/Register/Components/FormInput.js'
import FormButton from 'App/Components/Register/Components/FormButton.js'

import { Input, Icon } from 'react-native-elements'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      isEmailValid: true,
      PassWord: '',
      isPassWordValid: true,
      showPassword: true,
    }
  }

  validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(email)
  }
  validatePassWord = (PassWord) => {
    if (PassWord.length > 1) {
      return true
    } else {
      return false
    }
  }
  handleSubmit = async () => {
    const {
      email,

      PassWord,
    } = this.state
    let userInfo = {}

    userInfo.email = email
    userInfo.PassWord = PassWord
    let emailValidate = await this.validateEmail(email)
    let PhoneValidate = await this.validatePassWord(PassWord)
    this.setState({
      isEmailValid: emailValidate,
      isPassWordValid: PhoneValidate,
    })
    if (emailValidate && PhoneValidate) {
      this.props.navigation.navigate('DashBoard')
    }
  }

  toggleSwitch = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  //goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const {
      isEmailValid,
      email,

      PassWord,

      isPassWordValid,
    } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={require('App/Assets/Images/pp.jpeg')} />
        </View>

        <Input
          label={'Email Address'}
          labelStyle={styles.labelStyles}
          containerStyle={{ width: 350 }}
          leftIcon={<Icon name="envelope-o" type="font-awesome" color="#000" size={20} />}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          inputStyle={{ marginLeft: 10, fontSize: 16 }}
          placeholder={'Enter your email'}
          // containerStyle={{
          //   borderBottomColor: "#000",
          //   fontSize: Fonts.medium
          // }}
          ref={(input) => (this.emailInput = input)}
          onChangeText={(email) => this.setState({ email })}
          errorMessage={isEmailValid ? null : 'Please enter a valid email address'}
        />
        <View style={{ flexDirection: 'row' }}>
          <Input
            label={'PassWord'}
            containerStyle={{ width: 350 }}
            labelStyle={styles.labelStyles}
            leftIcon={<Icon name="lock" type="MaterialIcons" size={20} />}
            value={PassWord}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            inputStyle={{ marginLeft: 10, fontSize: 16 }}
            placeholder={'Enter your PassWord'}
            // containerStyle={{
            //   borderBottomColor: "#000"
            // }}
            ref={(input) => (this.emailInput = input)}
            secureTextEntry={this.state.showPassword}
            onChangeText={(PassWord) => this.setState({ PassWord })}
            errorMessage={isPassWordValid ? null : 'Please enter a valid PassWord'}
          />
          <Switch onValueChange={this.toggleSwitch} value={!this.state.showPassword} />
        </View>
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType="outline"
            onPress={this.handleSubmit}
            title="LOGIN"
            buttonColor="#ff9e67"
          />
        </View>
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('Register')}
          titleStyle={{
            color: '#ff9e67',
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
  labelStyles: {
    marginLeft: 15,
    padding: 10,
  },
})
