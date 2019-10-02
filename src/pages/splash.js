import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {Button } from "./uicomponents/components";

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const App: () => React$Node = () => {
  return (
    <>
          <View style={styles.body} >
            <View style={{ height:"88%", justifyContent: "center" }} >
              <View style={{ alignSelf: "center" }} >
                  <Image style={styles.logo_img} source={require("../Assets/logo.png")} />
                  <Text style={styles.txtgetstarted} >Get Started...!</Text> 
                  <Button label="English" extraStyle={{backgroundColor:"#081344"}} />
                  <Button label="Arabic" />
              </View>
            </View>
            <View style={{ height:"12%", flexDirection:"column", justifyContent:"space-around", alignItems:"center" }}>
              <Text style={styles.footertxt} >C 2019. All Right Reserved</Text> 
              <View style={{backgroundColor:"#e2eae7", height:5, width: "30%"}} ></View>
            </View>
          </View>
    </>
  );
};

const styles = EStyleSheet.create({
  txtgetstarted: {
    fontSize: "18 rem",
    color:"#4d4d4d",
    textAlign: "center",
    padding: "15 rem"
  },
  footertxt: {
    fontSize: "15 rem",
    color:"#8d847d",
    textAlign: "center"
  },
  body : {
    backgroundColor: "#FFF",
    height: "100%"
  },
  logo_img: {
    height: "180 rem",
    resizeMode: "contain"
  }
});

export default App;
