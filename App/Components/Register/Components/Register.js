import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import FormButton from 'App/Components/Register/Components/FormButton.js'
import UploadImage from 'App/Components/Register/Components/UploadImage.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedType: null,
      firstName: '',
      isFirstNameValid: true,
      lastName: '',
      isLastNameValid: true,
      email: '',
      isLoading: false,
      isEmailValid: true,
      phone: '',
      isPhoneValid: true,
    }
  }

  validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(email)
  }

  validateFirstName = (firstName) => {
    if (firstName.length > 1) {
      return true
    } else {
      return false
    }
  }
  validatePhone = (phone) => {
    if (phone.length > 1 && phone.length > 9) {
      return true
    } else {
      return false
    }
  }

  validateLastName = (lastName) => {
    if (lastName.length > 1) {
      return true
    } else {
      return false
    }
  }

  handleSubmit = async () => {
    const {
      email,
      firstName,
      lastName,
      isEmailValid,
      isFirstNameValid,
      isLastNameValid,
      phone,
      selectedType,
      organizationName,
      donation,
    } = this.state
    let userInfo = {}
    userInfo.firstName = firstName
    userInfo.lastName = lastName
    userInfo.email = email
    userInfo.selectedType = selectedType
    userInfo.phone = phone
    userInfo.donation_amount = this.props.donation
    userInfo.organizationName = organizationName
    let emailValidate = await this.validateEmail(email)
    let firstNameValidate = await this.validateFirstName(firstName)
    let lastNameValidate = await this.validateLastName(lastName)
    let PhoneValidate = await this.validatePhone(phone)
    this.setState({
      isLoading: true,
      isEmailValid: emailValidate,
      isFirstNameValid: firstNameValidate,
      isLastNameValid: lastNameValidate,
      isPhoneValid: PhoneValidate,
    })
    if (emailValidate && firstNameValidate && lastNameValidate && PhoneValidate) {
      this.props.navigation.navigate('DashBoard')
    }
  }

  render() {
    const {
      isLoading,
      firstName,
      lastName,
      isEmailValid,
      email,
      selectedType,
      isFirstNameValid,
      isLastNameValid,
      phone,
      organizationName,
      isPhoneValid,
    } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <UploadImage />
        </View>
        <Input
          label={'First Name'}
          labelStyle={styles.labelStyles}
          leftIcon={<Icon name="user-o" type="font-awesome" size={20} />}
          value={firstName}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          inputStyle={{ marginLeft: 10, fontSize: 16 }}
          placeholder={'Enter your first...'}
          // containerStyle={{
          //   borderBottomColor: "#000"
          // }}
          ref={(input) => (this.emailInput = input)}
          onSubmitEditing={() => this.validateEmail(firstName)}
          onChangeText={(firstName) => this.setState({ firstName })}
          errorMessage={isFirstNameValid ? null : 'Please enter a valid first name'}
        />
        <Input
          label={'Last Name'}
          labelStyle={styles.labelStyles}
          value={lastName}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          inputStyle={{ marginLeft: 10, fontSize: 16 }}
          placeholder={'Enter your last'}
          // containerStyle={{
          //   borderBottomColor: "#000"
          // }}
          ref={(input) => (this.emailInput = input)}
          onChangeText={(lastName) => this.setState({ lastName })}
          errorMessage={isLastNameValid ? null : 'Please enter a valid last name'}
        />

        <Input
          label={'Email Address'}
          labelStyle={styles.labelStyles}
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
        <Input
          label={'Mobile'}
          labelStyle={styles.labelStyles}
          leftIcon={<Icon name="call" type="MaterialIcons" size={20} />}
          value={phone}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          inputStyle={{ marginLeft: 10, fontSize: 16 }}
          placeholder={'Enter your Mobile Number'}
          // containerStyle={{
          //   borderBottomColor: "#000"
          // }}
          ref={(input) => (this.emailInput = input)}
          keyboardType="numeric"
          onChangeText={(phone) => this.setState({ phone })}
          errorMessage={isPhoneValid ? null : 'Please enter a valid 10 digits Phone Number'}
        />
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType="outline"
            onPress={this.handleSubmit}
            title="LOGIN"
            buttonColor="#039BE5"
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  rowSelector: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  loginContainer: {
    flex: 1,
  },
  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 25,
  },
  labelStyles: {
    paddingLeft: 18,
    marginTop: 20,
    color: '#000',
    fontWeight: 'normal',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 10,
    height: 50,
    width: 200,
  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 3,
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: 32,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'white',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular',
  },
  helpContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
