import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Global from '../../Global';
const { height } = Dimensions.get('window');
export default class Header extends Component {

  render() {
    return (
      <View
        style={{
          height: height / 16,
          backgroundColor: '#66FFFF',
        }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" size={40}></Icon>
          </TouchableOpacity>
          <Text style={{ fontSize: 25, marginTop: 5, marginRight: 100 }}>Shop Online</Text>

        </View>


      </View>
    );
  }
}

