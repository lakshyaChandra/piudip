/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react'
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'
//import all the components we will need

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: {},
    }
  }
  componentDidMount() {
    var that = this
    let items = Array.apply(null, Array(30)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) }
    })
    that.setState({
      dataSource: items,
    })
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>Your Images</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  text: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
