import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Text } from 'react-native'
import ProfileScreen from 'App/Components/Profile/Components/Profile.js'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <ProfileScreen {...this.props} />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
