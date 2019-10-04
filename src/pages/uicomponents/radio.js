import React, { Component } from 'react';
import { View, TextInput, Button,Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height, width} = Dimensions.get('window');
const entireScreenWidth = width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default class Radio extends Component {
    render() {
        return (
        <View
         style={{ flexDirection: "row", padding: 5 }} >
          <View
            style={{
              height: 21,
              width: 21,
              borderRadius: 12,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: "#081344 ",
              marginTop: 5
            }} >
            {
              this.props.isSelected ?
                <View style={{
                  height: 10,
                  width: 10,
                  borderRadius: 6,
                  backgroundColor: '#f84563'
                }} />
                : null
            }
          </View>
        </View>
        )
    }
}

const eStyles = EStyleSheet.create({
  align:{
    padding:'10 rem',
  },
  alignHorizontal :{
    paddingHorizontal:'20 rem'
  },
   })