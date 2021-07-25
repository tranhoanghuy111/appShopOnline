import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

export default class SplashScreen extends Component {

    render() {

        return (
            <View style={styles.container}>

                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                        source={require('../../media/temp/ShopOnline1.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                    />
                </View>
                <Animatable.View
                    style={[styles.footer, {
                        backgroundColor: 'white'
                    }]}
                    animation="fadeInUpBig"
                >
                    <Text style={[styles.title
                    ]}>Welcome to Shopping Online!</Text>
                    <Text style={styles.text}>Sign in with account </Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.push('LogIn', { navigation: this.props.navigation })} >
                            <View
                                style={styles.signIn}
                            >
                                <Text>Get Started </Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="black"
                                    size={20}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66FFFF'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#66FFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 40
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {

        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#66FFFF',
        fontWeight: 'bold',
        borderColor: '#000',
    }
});