import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {BoxHeading, VSText ,ButtonPay,VisaBorder,TextTwo} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
            <VisaBorder  name="Visa Service > New Visa > Entry Permit > Partner / Invester Visa"/>
            <View style={styles.container1}  >              
                <View style={styles.container2} > 
                    <BoxHeading btnName=" :  Original Document Required"/>
                    <VSText/>
                </View >
                    <TextTwo txt1="Select Service" txt2="New Visa"/>
                    <TextTwo txt1="Service Type" txt2="Entry Permit"/>
                    <TextTwo txt1="Visa Type" txt2="Partner/Invester"/>
                    <TextTwo txt1="Location" txt2="Inside Country"/>
                <View style={styles.container2}  >
                    <BoxHeading btnName=" :  Documents Uploaded"/>
                </View>
                    <TextTwo txt1="Trade License" txt2="Yes"/>
                    <TextTwo txt1="Imigration Card" txt2="Yes"/>
                    <TextTwo txt1="Passport" txt2="Yes"/>
                    <TextTwo txt1="Sponsored Photo" txt2="Yes"/>
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
  container1 : {
    padding: "20 rem",
    backgroundColor: "#f8f9fc",
  },
  container2 : {
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
