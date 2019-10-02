import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {PriceDetails, TxtUnderline ,ButtonLong,ButtonPay,Chk,SelectFile} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
            <View style={styles.container}  >
            <TxtUnderline/>
            <PriceDetails />
            <ButtonLong/>
            <Chk/>
            <ButtonPay/>
            <SelectFile/>
            </View >
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
    height: "80%",
    justifyContent:"center"
  }
});

export default App;
