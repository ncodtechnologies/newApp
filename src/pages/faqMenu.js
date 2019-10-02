import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import {FAQMenu} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
            <View style={{ alignSelf: "center", justifyContent:"center",height:'50%' }} >
                  <Image style={styles.logo_img} source={require("../Assets/logo.png")} />
            </View >
            <View style={{ alignSelf: "center",height:'50%' }} >
            <FAQMenu/>
            <FAQMenu/>
            </View>
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    flex: 1
  },
  container : {
    padding: "30 rem",
    backgroundColor: "#f8f9fc",
    justifyContent:"center"
  },
  logo_img: {
    height: "120 rem",
    resizeMode: "contain"
  }
});

export default App;
