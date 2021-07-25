import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from '../ProductDetail/ProductDetail'
import Search from './Search'

const Stack = createStackNavigator()
export default class SearchView extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={Search}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="ProductDetail" component={ProductDetail}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>
        )
    }
}

