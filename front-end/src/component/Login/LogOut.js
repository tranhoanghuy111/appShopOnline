import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin'
export default class LogOut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
        }
    }

    revokeAccess = async () => {
        try {
            await GoogleSignin.revokeAccess();
            console.log('deleted');
        } catch (error) {
            console.error(error);
        }
    };
    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null, loaded: true }); // Remember to remove the user from your app's state as well

        } catch (error) {
            console.error(error);
        }

    };

    render() {

        return (
            <View >
                <TouchableOpacity onPress={() => this.signOut()}
                    style={styles.contain}>
                    <Text>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    contain: {
        height: 50,
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCFFFF',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3
    }
})

