import React, { useState } from "react";
import { Component } from "react";
import {
    View, Image,
    FlatList, SafeAreaView, StyleSheet, Text,
    TouchableOpacity, Dimensions
} from "react-native";
import GetImage from '../../../images/GetImage'
const { width, height } = Dimensions.get('window');


class Item extends Component {
    render() {
        const { id, image, title, price, rootprice, describe } = this.props?.item
        return (
            <View>
                <TouchableOpacity key={this.props.item.id} onPress={() =>
                    this.props.navigation.push('ProductDetail', { id, image, title, price, rootprice, describe })
                }
                    style={styles.wrapper1}>
                    <Image source={GetImage(this.props.item.image)} style={styles.image} />
                    <View>
                        <Text style={styles.text}>{this.props.item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}



export default class ListProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedId: null

        }
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.id === this.state.selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                navigation={this.props.navigation}
                item={item}
                backgroundColor={{ backgroundColor }}



            />
        );
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList

                    style={{ margin: 5 }}
                    data={this.props.route.params}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={this.state.selectedId}
                    numColumns={3}
                />
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

    },
    title: {
        fontSize: 32,
    },
    wrapper1: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
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
        width: 100,
        height: 90
    },
    text: {
        fontSize: 9,
        fontWeight: 'bold',
        margin: 4
    }

});
