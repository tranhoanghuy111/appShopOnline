import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    YellowBox,
    LogBox
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Global from '../Global'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
    //  webClientId: '705404995429-4a73rs6jtikjhd1u0vb61cb2e4t8vi2c.apps.googleusercontent.com',
    // offlineAccess: true
})
// GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//     webClientId: '705404995429-4a73rs6jtikjhd1u0vb61cb2e4t8vi2c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     hostedDomain: '', // specifies a hosted domain restriction
//     loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//     accountName: '', // [Android] specifies an account name on the device that should be used
//     iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
// });


YellowBox.ignoreWarnings([
    'Non-serializable values were found in the navigation state',
]);
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check_textInputChange: false,
            password: '',
            email: '',
            secureTextEntry: true,
            userGoogleInfo: null,
            loaded: false,
            isLoginScreenPresented: true,
            isLogIn: false,
            token: null,
            dataUser: null,
            loaded1: '',
        }


    }

    isSignedIn = async () => {

        const isSignedIn = await GoogleSignin.isSignedIn();


        return isSignedIn
    }
    async componentDidMount() {


        this.setState({ isLogIn: await this.isSignedIn() })

    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();


            this.setState({
                userGoogleInfo: userInfo,
                loaded: true
            })
            console.log(this.state.userGoogleInfo);

            this.props.gotoScreen(this.state.loaded)
            Global.infoUser = this.state.userGoogleInfo.user

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("e 1");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("e 2");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("e 3");
            } else {
                console.log(error.message);
            }
        }



    }


    textInputChange(value) {
        if (value.length !== 0) {
            this.setState({
                check_textInputChange: true
            })
        }
        else {
            this.setState({
                check_textInputChange: false
            })
        }
        this.setState({ email: value })
    }
    secureTextEntry() {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }
    gotoLogin = () => {

        fetch("http://192.168.1.7:3000/user/signin", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password

            })
        })
            .then(res => res.text())
            .then(data => {
                console.log(typeof (data))
                if (typeof (data) === 'string' && data.length < 100) {
                    alert(data)
                }
                try {
                    let dataOJ = JSON.parse(data)
                    console.log(dataOJ.userLogin)
                    if (dataOJ.userLogin) {
                        this.props.gotoScreen(true)
                    }
                    Global.infoUser = {
                        name: dataOJ.userLogin.name,
                        email: dataOJ.userLogin.email,
                        phone: dataOJ.userLogin.phone
                    }
                } catch (e) {
                    console.log(data)
                }
            })

    }


    render() {

        // console.log(this.state.token)
        // //console.log(Global.infoUser)
        // console.log(this.state.userGoogleInfo == null)
        // if (this.state.userGoogleInfo !== null) {
        //     
        // }

        // console.log(JSON.stringify(Global.infoUser), "111111111111")
        // console.log(this.state.token, Global.saveEmail, Global.saveUser)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <Text style={styles.text_footer}>User</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="black"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Account "
                            style={styles.textInput}
                            //value={this.state.email}
                            onChangeText={(text) => this.textInputChange(text)}

                        />
                        {this.state.check_textInputChange ?
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                            : null}
                    </View>
                    <View style={{ marginTop: 35 }}>
                        <Text style={[styles.text_footer]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="black"
                                size={20}
                            />
                            {this.state.secureTextEntry ?
                                <TextInput
                                    placeholder="Your Password"
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    //value={this.state.password}
                                    onChangeText={(text) => this.setState({
                                        password: text
                                    })}
                                />
                                : <TextInput
                                    placeholder="Your Password"
                                    style={styles.textInput}
                                    //value={this.state.password}
                                    onChangeText={(text) => this.setState({
                                        password: text
                                    })}
                                />}
                            <TouchableOpacity onPress={() => this.secureTextEntry()}>
                                {this.state.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="green"
                                        size={20}
                                    />
                                    : <Feather
                                        name="eye"
                                        color="green"
                                        size={20}
                                    />}
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.log, { backgroundColor: '#66FFFF' }]}>
                            <TouchableOpacity onPress={this.gotoLogin}>
                                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.log, { backgroundColor: 'white' }]}>
                            <TouchableOpacity onPress={() => this.props.navigation.push('SignUp')} >
                                <Text style={{ fontSize: 20, color: '#66FFFF', fontWeight: 'bold', borderColor: '#66FFFF' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>

                        <GoogleSigninButton
                            style={{ width: 320, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={this.signIn}

                        />
                    </View>

                </Animatable.View >
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#66FFFF'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    log: {
        borderColor: '#66FFFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30,
        height: 40,
    }
})
