import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, Alert
} from 'react-native';
import Global, { arrCart } from '../../../Global';

import GetImage from '../../../images/GetImage'
import Quantity from '../../Shop/Cart/Quantity'

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reload: 0,
            arrCart: Global.arrCart || []

        }
        this.listRefQuantity = {}
        this.sum = 0;

        Global.updateCart = this.updateCart
    }


    reload() {
        this.setState({
            reload: this.state.reload + 1
        }, () => {
            if (Global.updateData) {
                Global.updateData(this.state.arrCart)
            }
        })
    }


    updateCart = (arr) => {
        console.log(arr, "1111111")
        this.setState({
            arrCart: arr
        })
        for (let i in arr) {
            const item = arr[i]
            if (item && item.id && this.listRefQuantity && this.listRefQuantity[item.id + ""]) {
                this.listRefQuantity[item.id + ""].passQuantity(item.quantity)
            }
        }
        this.reload();
    }

    totalPrice(arrCart) {
        if (!arrCart) {
            arrCart = this.state.arrCart
        }
        let sum = 0
        for (let i = 0; i < arrCart.length; i++) {
            const quantity = arrCart[i]?.quantity || 1
            sum += arrCart[i]?.price * quantity || 0
        }
        return sum
    }

    onChangeQuantity = (quantity, item) => {
        item.quantity = quantity;
        console.log("quantity ", quantity)
        this.reload()

    }

    removeItem(item) {
        console.log("arrCart ", JSON.stringify(this.state.arrCart))


        let arr = this.state.arrCart.filter((a) => {
            return a.id != item.id
        })
        console.log("cart ", JSON.stringify(arr))
        this.setState({ arrCart: arr })
        this.reload();

    }

    confimBuy = () => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "/" + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        Global.infoUser.time = time
        for (let i = 0; i < this.state.arrCart.length; i++) {
            fetch("http://192.168.1.7:3000/bill/detail", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: Global.infoUser.address,
                    name: Global.infoUser.name,
                    phone: Global.infoUser.phone,
                    oderid: this.state.arrCart[i].id,
                    title: this.state.arrCart[i].title,
                    quantity: this.state.arrCart[i].quantity,
                    total: this.state.arrCart[i].price * (this.state.arrCart[i].quantity || 1),
                    time: time

                })
            })
        }

        alert("Bạn đã đặt thành công")

        this.setState({
            arrCart: []
        })
        Global.orderHis = Global.arrCart
        console.log(Global.orderHis)
        Global.arrCart = []
        Global.updateCart(Global.arrCart)


    }
    createTwoButtonAlert = () =>
        Alert.alert(
            "Bạn xác nhận mua hàng?",
            "Nhấn OK",
            [

                { text: "OK", onPress: () => { this.confimBuy() } },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ]
        );





    render() {
        console.log("abc")
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        console.log(this.arrCart, "11111111111111111111111111")
        console.log(Global.infoUser.phone, Global.infoUser.address)
        return (
            <View style={wrapper}>
                <ScrollView style={main}>
                    {this.state.arrCart.map((product1) => (
                        <View style={product}>
                            <Image source={GetImage(product1.image)} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}>{product1.title}</Text>
                                    <TouchableOpacity onPress={() => this.removeItem(product1)}>
                                        <Text style={{ fontWeight: 'bold', color: '#969696', fontSize: 25 }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{product1.price}Đ</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <Quantity
                                            ref={(r) => this.listRefQuantity[product1.id + ""] = r}
                                            init={product1.quantity}
                                            onChangeQuantity={(quantity) => this.onChangeQuantity(quantity, product1)}
                                        />
                                    </View>

                                </View>
                            </View>
                        </View>

                    ))}
                </ScrollView>
                <TouchableOpacity
                    style={checkoutButton}
                    onPress={this.createTwoButtonAlert}
                >

                    <Text style={checkoutTitle}>TOTAL {this.totalPrice()}Đ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );

    }
}


const { width, height } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#66FFFF',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
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
    main: {
        backgroundColor: 'white',

    },
    checkoutTitle: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 13,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 0.5,
        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 5,
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir',
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

});

