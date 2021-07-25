import React, { Component } from 'react';
import { FlatList, TextInput, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Image, Dimensions } from 'react-native';

import GetImage from '../../../images/GetImage'
import Icon from 'react-native-vector-icons/Ionicons';
import ProductDetail from '../ProductDetail/ProductDetail'

class Item extends Component {
    render() {
        const { id, image, title, price, rootprice, describe } = this.props?.item
        return (

            <View style={{ flexDirection: 'row', borderBottomColor: '#D7D7D7', borderBottomWidth: 1 }}>

                <TouchableOpacity key={this.props.item.id} onPress={() =>
                    this.props.navigation.push('ProductDetail', { id, image, title, price, rootprice, describe })
                }
                    style={styles.wrapper1}>
                    <Image source={GetImage(this.props.item.image)} style={styles.image} />

                </TouchableOpacity>
                <Text style={styles.text}>{this.props.item.title}</Text>
            </View>
        )
    }
}


export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            selectedId: null,
            search: '',
            data2: [],
            data3: []


        }

    }
    componentDidMount() {

        fetch('http://192.168.1.7:3000/product')
            .then(res => res.json())
            .then(resJSON => {
                this.setState({ data: resJSON.data })
                const { data } = this.state
                const data1 = []
                for (let i in data) {
                    data1.push(data[`${i}`])
                }
                for (let i = 8; i < data1.length - 1; i++) {
                    for (let j = 0; j < data1[i].length; j++) {
                        this.state.data2.push(data1[i][j])
                    }
                }
                this.setState({ data2: this.state.data2, data3: this.state.data2 })
            })
            .catch((error) => {
                console.log(error)
            })

    }
    searhFilter(text) {
        const { data2, data3 } = this.state
        if (text) {
            const newData = data3.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()

                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({ data2: newData, search: text })
        }
        else {
            this.setState({ data2: data3, search: text })
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
                <View style={styles.SectionStyle}>
                    <Icon name="search" color="#000" size={20} />
                    <TextInput
                        placeholder="Tìm kiếm sản phẩm ..."
                        underlineColorAndroid="transparent"
                        value={this.state.search}
                        onChangeText={text => this.searhFilter(text)}



                    />
                </View>
                <FlatList
                    style={{ margin: 5 }}
                    data={this.state.data2}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
                    extraData={this.state.selectedId}

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
        width: 235,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 3
    },

});
