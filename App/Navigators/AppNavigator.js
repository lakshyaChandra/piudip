import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Components/Details/Container/detailsContainer.js'
import Profile from 'App/Components/Profile/Container/ProfileContainer.js'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import RegisterScreen from 'App/Components/Register/Container/RegisterContainer.js'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

console.disableYellowBox = true
const StackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#ff9e67',
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
          backgroundColor: '#ff9e67',
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
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Register',
        headerStyle: {
          backgroundColor: '#ff9e67',
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
    initialRouteName: 'MainScreen',
  }
)

export default createAppContainer(StackNavigator)
