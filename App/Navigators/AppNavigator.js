import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Components/Details/Container/detailsContainer.js'
import Profile from 'App/Components/Profile/Container/ProfileContainer.js'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    ProfileScreen: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#FF7F50',
        },
        headerTintColor: 'dimgrey',
        headerTitleStyle: {
          flexGrow: 1,
          fontWeight: 'bold',
          alignSelf: 'center',
          textAlign: 'center',
          marginRight: 30,
        },
      },
    },
    DashBoard: {
      screen: ExampleScreen,
      navigationOptions: {
        title: 'Dashboard',
        headerStyle: {
          backgroundColor: '#FF7F50',
        },
        headerTintColor: 'dimgrey',
        headerTitleStyle: {
          flexGrow: 1,
          fontWeight: 'bold',
          alignSelf: 'center',
          textAlign: 'center',
          marginRight: 30,
        },
      },
    },
  },
  {
    initialRouteName: 'ProfileScreen',
  }
)

export default createAppContainer(StackNavigator)
