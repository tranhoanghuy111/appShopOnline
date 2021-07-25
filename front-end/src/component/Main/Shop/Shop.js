import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import SearchView from './Search/SearchView';
import Contact from './Contact/Contact';
import Global from '../../Global'


const Tab = createBottomTabNavigator();


export default class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numCart: 0,
    }
    Global.setNumCart = this.setNumCart
  }

  setNumCart = (numCart) => {

    this.setState({
      numCart: numCart
    })
    console.log("numCart", this.state.numCart)
  }


  render() {
    console.log(this.setNumCartPay)

    return (
      <View style={{ flex: 1 }}>

        <Tab.Navigator

          tabBarOptions={{
            labelStyle: {
              fontSize: 15,
            },
            activeTintColor: 'red',
            inactiveTintColor: 'black',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="home" size={25} color={color} />


              ),


            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="cart-plus" size={25} color={color} />
              ),
              tabBarBadge: this.state.numCart || null
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchView}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="search" size={25} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="user" size={25} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}
