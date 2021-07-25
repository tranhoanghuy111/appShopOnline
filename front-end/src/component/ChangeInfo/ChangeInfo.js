import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Global from '../Global';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtAddress: '',
            txtPhone: ''
        };
    }


    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { name, address, phone } = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Shop') }}>
                        <Icon name="arrow-left" size={25} color='#363636' />
                    </TouchableOpacity>
                    <Text style={headerTitle}>Thay đổi thông tin</Text>
                    <Text>.</Text>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        onChangeText={txtName => (Global.infoUser.name = txtName)}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        //value={address}
                        onChangeText={txtAddress => { Global.infoUser.address = txtAddress }}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        //value={phone}
                        onChangeText={txtPhone => { Global.infoUser.phone = txtPhone }}
                    />
                    <TouchableOpacity style={signInContainer} onPress={() => (alert("Success"))}>
                        <Text style={signInTextStyle}>XÁC NHẬN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: {
        flex: 1, backgroundColor: '#66FFFF', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'
    },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: 'black', fontSize: 25 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1
    },
    signInTextStyle: {
        color: 'black', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#66FFFF',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});
