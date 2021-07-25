import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import Collection from './Collection'
import SpecialCollection from './SpecialCollection'
import SwiperProduct from './SwiperProduct'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header'




export default class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isLoaded: false
        }
    }
    componentDidMount() {

        fetch('http://192.168.1.7:3000/product')
            .then(res => res.json())
            .then(resJSON => {
                this.setState({ data: resJSON.data, isLoaded: true })

            })
            .catch((error) => {
                console.log(error)
            })

    }

    render() {

        const { data } = this.state
        if (!this.state.isLoaded) {
            return (
                <>
                    <ActivityIndicator size="large" color="blue" />
                </>
            )
        }
        return (
            <View>
                <View>
                    <Header navigation={this.props.navigation}

                    />
                </View>
                <ScrollView style={{ backgroundColor: 'white', marginBottom: 30 }}>
                    <SwiperProduct navigation={this.props.navigation} />
                    <Text style={{ marginBottom: 10, marginTop: 5, marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Ưu đãi hấp dẫn</Text>
                    <SpecialCollection navigation={this.props.navigation}
                        data={data.CoopSmile}
                        data1={data.Logo.CoopSmile} />
                    <Collection navigation={this.props.navigation}
                        data={data.BHX}
                        data1={data.Logo.BHX}
                    />
                    <Collection navigation={this.props.navigation}
                        data={data.Lavie}
                        data1={data.Logo.Lavie} />
                    <Collection navigation={this.props.navigation}
                        data={data.Tiger}
                        data1={data.Logo.Tiger} />
                    <Collection navigation={this.props.navigation}
                        data={data.TikiBook
                        }
                        data1={data.Logo.TikiBook} />


                </ScrollView>
            </View>
        )
    }
}

