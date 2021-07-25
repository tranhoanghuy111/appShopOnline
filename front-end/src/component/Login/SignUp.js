import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check_textInputChange: false,
            password: '',
            secureTextEntry: true,
            secureTextEntry_confirm: true,
            name: '',
            email: '',
            confirmpassword: '',
            phone: '',
            isSuccess: false,
            data: null
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
    secureTextEntry_confirm() {
        this.setState({
            secureTextEntry_confirm: !this.state.secureTextEntry_confirm
        })
    }
    gotoLogin = () => {
        fetch("http://192.168.1.7:3000/user/signup", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword,
                phone: this.state.phone

            })
        })
            .then(res => res.text())
            .then(data => {
                if (typeof (data) === 'string' && data.length < 100) {
                    alert(data)
                }
                console.log(data)
                if (data.length > 100) {
                    alert('Success')
                    this.props.navigation.push('LogIn')

                }
            })

        //     if (this.state.name.length < 4) {
        //         alert('Please Enter Name > 4');
        //         return;
        //     }
        //     //Check for the Email TextInput
        //     if (!this.state.email.trim() || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email) == 0) {
        //         alert('Please Enter Email and Correct Format');
        //         return;
        //     }
        //     if (this.state.password.length < 6) {
        //         alert('Please Enter Password > 6');
        //         return;
        //     }
        //     if (this.state.confirmpassword.length < 6) {
        //         alert('Please Enter Confirm Password > 6');
        //         return;
        //     }
        //     if (this.state.confirmpassword !== this.state.password) {
        //         alert('Confirm Password is not correct')
        //         return;
        //     }
        //     let regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //     let phone = this.state.phone.match(regExp);
        //     if (!phone) {
        //         alert('Phone is not correct ');
        //         return;
        //     }
        //     //Checked Successfully
        //     //Do whatever you want  
        //     alert('Success');
        // }
    }
    render() {
        console.log(this.state.name, this.state.email, this.state.password, this.state.confirmpassword
            , this.state.phone)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>

                    <View>
                        <Text style={[styles.text_footer]}>Name</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="black"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Name"
                                style={styles.textInput}
                                //value={this.state.password_confirm}
                                onChangeText={(text) => this.setState({
                                    name: text
                                })}
                            />

                        </View>

                    </View>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <Feather
                            name="mail"
                            color="black"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Email "
                            style={styles.textInput}
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
                    <View style={{ marginTop: 25 }}>
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
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({
                                        password: text
                                    })}
                                />
                                : <TextInput
                                    placeholder="Your Password"
                                    style={styles.textInput}
                                    value={this.state.password}
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
                        <View style={{ marginTop: 25 }}>
                            <Text style={[styles.text_footer]}>Password Confirm</Text>
                            <View style={styles.action}>
                                <Feather
                                    name="lock"
                                    color="black"
                                    size={20}
                                />
                                {this.state.secureTextEntry_confirm ?
                                    <TextInput
                                        placeholder="Confirm Password"
                                        secureTextEntry={true}
                                        style={styles.textInput}
                                        value={this.state.confirmpassword}
                                        onChangeText={(text) => this.setState({
                                            confirmpassword: text
                                        })}
                                    />
                                    : <TextInput
                                        placeholder="Confirm Password"
                                        style={styles.textInput}
                                        value={this.state.confirmpassword}
                                        onChangeText={(text) => this.setState({
                                            confirmpassword: text
                                        })}
                                    />}
                                <TouchableOpacity onPress={() => this.secureTextEntry_confirm()}>
                                    {this.state.secureTextEntry_confirm ?
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

                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={[styles.text_footer]}>Phone</Text>
                            <View style={styles.action}>
                                <Feather
                                    name="phone"
                                    color="black"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your Phone Number"
                                    style={styles.textInput}
                                    //value={this.state.password_confirm}
                                    onChangeText={(text) => this.setState({
                                        phone: text
                                    })}
                                />

                            </View>

                        </View>
                    </View>


                    <View style={[styles.log, { backgroundColor: 'white' }]}>
                        <TouchableOpacity onPress={() => this.gotoLogin()}>
                            <Text style={{ fontSize: 20, color: '#66FFFF', fontWeight: 'bold', borderColor: '#66FFFF' }}>Sign Up</Text>
                        </TouchableOpacity>
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
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    footer: {
        flex: 8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 20
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
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 5,
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
