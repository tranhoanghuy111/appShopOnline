import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail'
import FlatlistProduct from './FlatlistProduct'
import Collection from './Collection'
import ListProduct from '../ProductDetail/ListProduct';
import ProductDetail1 from '../ProductDetail/ProductDetail1'

const Stack = createStackNavigator()
export default class Home extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="HomeView">
                <Stack.Screen name="HomeView" component={HomeView} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ProductDetail" component={ProductDetail}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Collection" component={Collection} />
                <Stack.Screen name="ListProduct" component={ListProduct} options={{
                    headerTitle: " Danh Sách Sản Phẩm",
                    headerStyle: {
                        backgroundColor: "#66FFFF"
                    }
                }} />
                <Stack.Screen name="ProductDetail1" component={ProductDetail1} options={{
                    headerShown: false
                }} />




            </Stack.Navigator>
        )
    }
}

