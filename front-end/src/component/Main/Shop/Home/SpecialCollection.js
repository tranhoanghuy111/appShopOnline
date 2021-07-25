import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FlatlistProduct1 from './FlatlistProduct1'
import GetImage from '../../../images/GetImage'
const { width, height } = Dimensions.get('window');
export default class SpecialCollection extends Component {
  render() {
    const { wrapper, wrapper1 } = styles;
    return (

      <View style={wrapper}>


        <TouchableOpacity onPress={() => this.props.navigation.push('ListProduct', this.props.data)} style={{ flexDirection: 'row' }}>
          <View style={wrapper1}>
            <Image source={GetImage(this.props.data1.image)} resizeMode='contain' style={styles.image} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Coop Smile</Text>
        </TouchableOpacity>
        <FlatlistProduct1 navigation={this.props.navigation}
          data={this.props.data}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.41,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 5,
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
