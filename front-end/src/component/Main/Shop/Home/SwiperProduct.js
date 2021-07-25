import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import GetImage from '../../../images/GetImage'
import DataJson from '../../../contain'
const { width, height } = Dimensions.get('window');

export default class SwiperProduct extends Component {

    render() {

        return (
            <Swiper style={styles.swiper}>
                {DataJson.type.map(item => {
                    return <Image source={GetImage(item.image)} style={styles.image} />
                })}
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    swiper: {

        height: 100
    },
    image: {
        width: width,
        height: height / 9
    }
}
)

