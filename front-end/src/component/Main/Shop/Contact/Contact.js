import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin'


import phoneIcon from '../../../../media/appIcon/phone.png';
import contact from '../../../../media/appIcon/contact.png';
import messageIcon from '../../../../media/appIcon/message.png';
import locationIcon from '../../../../media/appIcon/location.png';
import Global from '../../../Global';

export default class Contact extends Component {


    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>

                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>{Global.infoUser.address}</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>{Global.infoUser.phone}</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={contact} style={imageStyle} />
                        <Text style={infoText}>{Global.infoUser.name}</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={messageIcon} style={imageStyle} />
                        <Text style={infoText}>{Global.infoUser.email}</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});
