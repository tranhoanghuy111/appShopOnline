import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Shop from './Shop/Shop';

import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OderHistory/OderHistory';
import SplashScreen from '../Login/SplashScreen'
import SignUp from '../Login/SignUp'
import Login from '../Login/LogIn';
import LogOut from '../Login/LogOut';
import CustomDrawerList from '../CustomDrawerList'
const Drawer = createDrawerNavigator();
const Root = createStackNavigator();
export default class Main extends Component {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <CustomDrawerList {...props} />
              <LogOut
                navigation={this.props.navigation}
              />
            </DrawerContentScrollView>
          )
        }}>

        <Drawer.Screen name="Shop" component={Shop} />
        <Drawer.Screen name="ChangeInfo" component={ChangeInfo} options={{
          title: "Change Information"
        }}
        />
        <Drawer.Screen name="OrderHistory" component={OrderHistory} options={{
          title: "Oder History"
        }}
        />

      </Drawer.Navigator>
    );
  }
}
