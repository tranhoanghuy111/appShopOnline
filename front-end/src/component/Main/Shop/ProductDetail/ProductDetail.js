import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetImage from '../../../images/GetImage'
import Global from '../../../Global'


const Tab = createBottomTabNavigator()
const { width, height } = Dimensions.get('window')
export default class ProductDetail extends Component {
    addThisToCart(item) {
        Global.addProductToCart(item)
    }

    render() {
        const { id, image, title, price, rootprice, describe } = this.props?.route?.params
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Icon name="arrow-left" size={25} color='#363636' />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25 }}>Chi Tiết Sản Phẩm</Text>
                    <TouchableOpacity onPress={() => this.addThisToCart(this.props?.route?.params)}>
                        <Icon name="shopping-cart" size={25} color='#363636'></Icon>
                    </TouchableOpacity>

                </View>
                <ScrollView style={{ height: height * 0.81 }}>
                    <Image source={GetImage(image)} resizeMode='contain' style={styles.image} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10 }}>
                        {title}
                    </Text>
                    <Text style={{ fontSize: 20 }}>{price} đ</Text>
                    <Text style={{ fontSize: 20, textDecorationLine: 'line-through' }}>{rootprice} đ</Text>

                    <View style={{ backgroundColor: 'pink', borderRadius: 10, margin: 5 }}>

                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 10 }}>
                        Mô Tả Sản Phẩm
                    </Text>
                    <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}>
                        - {describe}
                    </Text>
                </ScrollView>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#66FFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        padding: 5

    },
    bottom: {

        height: 35,
        width: 90,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 5,
    },
    wrapper1: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    image: {
        width: width,
        height: height / 3,

    }

});
