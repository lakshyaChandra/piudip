import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Text } from 'react-native'
import RegisterScreen from 'App/Components/Register/Components/Register.js'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <RegisterScreen {...this.props} />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
