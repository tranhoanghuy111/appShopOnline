import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FlatlistProduct from './FlatlistProduct'
import GetImage from '../../../images/GetImage'

const { width, height } = Dimensions.get('window');
export default class Collection extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    const { wrapper, wrapper1 } = styles;

    return (

      <View style={wrapper}>
        <Text style={{ marginBottom: 10, marginTop: 5, marginLeft: 5, fontSize: 20, fontWeight: 'bold' }}>Nhà cung cấp</Text>
        <TouchableOpacity onPress={() => this.props.navigation.push('ListProduct', this.props.data)} style={{ flexDirection: 'row' }}>
          <View style={wrapper1}>
            <Image source={GetImage(this.props.data1.image)} resizeMode='contain' style={styles.image} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{this.props.data1.title}</Text>
        </TouchableOpacity>

        <FlatlistProduct navigation={this.props.navigation}
          data={this.props.data}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {

    height: height * 0.47,
    backgroundColor: 'white',
    margin: 5,
    borderTopWidth: 0.3,
  },
  wrapper1: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 5,
  },
  image: {
    height: 55.5,
    width: 60,
    borderRadius: 10,
    marginRight: 5,
    marginTop: 3
  }

});
