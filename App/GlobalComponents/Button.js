// import React, { Component } from 'react'
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

// export default class About extends Component {
//   constructor() {
//     super()
//   }

//   goToLink = () => {
//     this.props.handleFunction()
//   }

//   render() {
//     const { title, width, height, backColor, align, disabled } = this.props
//     return (
//       <View style={[styles.container, { backgroundColor: backColor, alignItems: align }]}>
//         <TouchableOpacity
//           hitSlop={{
//             top: 50,
//             bottom: 50,
//             left: 25,
//             right: 25,
//           }}
//           style={[styles.dealbutton, { minHeight: height }, { minWidth: width }]}
//           onPress={() => this.goToLink()}
//           disabled={disabled}
//         >
//           <View>
//             <Text style={styles.title}>{title}</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   dealbutton: {
//     // padding: 4,
//     backgroundColor: '#FF7F50',
//     borderRadius: 5,
//   },
//   title: {
//     padding: 6,
//     color: 'white',
//     fontSize: '18',
//     textAlign: 'center',
//   },
// })
