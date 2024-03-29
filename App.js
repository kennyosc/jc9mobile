import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {Icon} from 'native-base'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import AuthScreen from './src/auth/AuthScreen'
import DiaryScreen from './src/app/DiaryScreen'
import ProfileScreen from './src/app/ProfileScreen'


const MainTab = createBottomTabNavigator(
  {
    Diary: {
      screen: DiaryScreen,
      navigationOptions: {
        tabBarIcon: <Icon name='bookmarks'/>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: <Icon name='contact'/>
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'grey'
    }
  }
)

const RootStack = createStackNavigator(
  {
    Auth: AuthScreen,
    Main: MainTab
  },
  {
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render (){
    return (
      <AppContainer/>
    )
  }
}


export default App