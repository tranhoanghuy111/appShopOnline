import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Global from '../Global';


export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { arrOrder: Global.orderHis }

    }
    componentDidMount() {
        this.setState({ arrOrder: Global.orderHis })
    }

    total() {
        let sum = 0
        for (let i = 0; i < this.state.arrOrder.length; i++) {
            sum += this.state.arrOrder[i].price * (this.state.arrOrder[i].quantity * 1)
        }
        return sum
    }

    render() {
        const { text, wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;

        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Shop")}>
                        <Icon name="arrow-left" size={25} />
                    </TouchableOpacity>

                    <Text style={headerTitle}>Lịch sử mua hàng</Text>

                </View>
                <View style={body}>
                    <ScrollView>
                        {this.state.arrOrder.map(e => (
                            <View style={orderRow}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{e.id}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 30, width: 300 }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Title:</Text>
                                    <Text style={{ color: '#C21C70', height: 50 }}>{e.title}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Quantity:</Text>
                                    <Text style={{ color: '#2ABB9C' }}>{e.quantity}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Time:</Text>
                                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{Global.infoUser.time}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{e.price}đ</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', backgroundColor: '#66FFFF' }}>

                    <Text style={{ fontSize: 25 }}> Total: {this.total()} đ</Text>

                </View>
            </View >
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#66FFFF', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingRight: -50 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', fontSize: 25, marginRight: 80, marginLeft: 50 },
    backIconStyle: { width: 30, height: 30, marginRight: 80 },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    },

});
