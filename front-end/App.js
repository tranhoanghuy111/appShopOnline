import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from './src/component/Main/Main'
import LogIn from './src/component/Login/LogIn'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import SplashScreen from './src/component/Login/SplashScreen'
import SignUp from './src/component/Login/SignUp'
import LogOut from './src/component/Login/LogOut'


const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogIn: false,
    }
  }
  isSignedIn = async () => {

    const isSignedIn = await GoogleSignin.isSignedIn();


    return isSignedIn
  };
  async componentDidMount() {


    this.setState({ isLogIn: await this.isSignedIn() })
  }
  gotoScreen = (load) => {
    this.setState({ isLogIn: load })
  }
  render() {


    if (!this.state.isLogIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
            <Stack.Screen name="SignUp" component={SignUp} />

            <Stack.Screen name="LogIn" children={(navigation) => <LogIn {...navigation} gotoScreen={this.gotoScreen} />}
            />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          </Stack.Navigator>
          {/* <Login gotoScreen={this.gotoScreen} /> */}
        </NavigationContainer>

      )
    } else {

      return (
        <NavigationContainer>
          <Main />
        </NavigationContainer>

      )
    }

  }
}



