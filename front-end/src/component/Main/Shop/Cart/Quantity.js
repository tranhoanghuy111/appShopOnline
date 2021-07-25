import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
export default class Quantity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.init || 1
        }
    }
    onChange() {
        if (this.props.onChangeQuantity) {
            this.props.onChangeQuantity(this.state.quantity)
        }
    }
    upQuantity() {
        this.setState({
            quantity: this.state.quantity + 1
        }, () => {
            this.onChange()
        })
    }
    downQuantity() {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 }, () => {
                this.onChange()
            })
        }
    }
    passQuantity(value) {
        this.setState({ quantity: value })
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <View style={styles.marginItem}>
                    <TouchableOpacity onPress={() => this.downQuantity()}>
                        <Text >-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 25 }}>{this.state.quantity}</Text>
                <View style={styles.marginItem}>
                    <TouchableOpacity onPress={() => this.upQuantity()}>
                        <Text >+</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )

    }
}
const styles = StyleSheet.create({
    marginItem: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#2ABB9C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

