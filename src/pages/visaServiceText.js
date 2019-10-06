import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {TxtUnderline, ButtonLong ,ButtonPay,VisaBorder,FileUpload} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
            <VisaBorder  name="Visa Service > New Visa > Entry Permit > Partner / Invester Visa"/>
            <View style={styles.container}  >
            <TxtUnderline name="Memorandum of Association (MOE)*"/>
            <FileUpload/>
            <TxtUnderline name="Passport*"/>
            <FileUpload/>
            <TxtUnderline name="Sponsored Photo ( White BG )*"/>
            <FileUpload/>
            <ButtonLong btnName="IBAN Number"/>
            <ButtonLong btnName="Notes"/>
            <ButtonPay btn="Next"/>
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
    padding: "20 rem",
    backgroundColor: "#f8f9fc",
    justifyContent:"center"
  }
});

export default App;
