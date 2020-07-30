import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, SafeAreaView } from 'react-native'
import DetailsPage from 'App/Components/Details/Components/details.js'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DetailsPage {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
