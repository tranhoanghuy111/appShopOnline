import React, { useState } from "react";
import { Component } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import GetImage from '../../../images/GetImage'
const { width, height } = Dimensions.get('window');


class Item extends Component {
    render() {
        const { id, image, title, price, rootprice, describe } = this.props.item
        return (

            <TouchableOpacity key={this.props.item.id} onPress={() => {
                this.props.navigation.push('ProductDetail', { id, image, title, price, rootprice, describe })
            }}
                activeOpacity={0.75}
                style={styles.wrapper1}>
                <View>
                    <Image source={GetImage(this.props.item.image)} resizeMode='contain' style={styles.image} />
                </View>
                <View >
                    <Text style={styles.text}>{this.props.item.title}</Text>
                </View>
                <View >
                    <Text style={{ fontSize: 11 }}>{this.props.item.price}đ</Text>
                    <Text style={{ fontSize: 11, textDecorationLine: 'line-through' }} >{this.props.item.rootprice}đ</Text>
                </View>
            </TouchableOpacity>


        )
    }
}



class FlatlistProduct1 extends Component {
    renderItem = ({ item }) => {
        return (
            <Item
                navigation={this.props.navigation}
                item={item}
            />
        );
    };
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    wrapper1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 105,
        height: 150,
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 5,
    },
    image: {
        height: 90,
        width: 100
    },
    text: {
        fontSize: 9,
        fontWeight: 'bold',
    }

});

export default FlatlistProduct1;