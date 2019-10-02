import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {ProfilePhoto,ProfileName, ProfileNameEdit, ButtonSlim,BoxHeading,Underline,TexEdit} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
            <View style={styles.container}  >
                
                <ProfilePhoto/>
                <ProfileNameEdit/>
                <View style={{flexDirection:'row'}}>
                   <ButtonSlim btnName={"Open Service : 24"} color={{backgroundColor:'blue'}}/>
                   <ButtonSlim btnName={"Open Service : 24"} color={{backgroundColor:'green'}}/>
                   <ButtonSlim btnName={"Open Service : 24"} color={{backgroundColor:'red'}}/>
                </View>
                <Underline/>
                <BoxHeading btnName={" :  General"}/>
                <TexEdit label={"Birthday"} data={"02-05-1992"}/>
                <TexEdit label={"Gender"} data={"Female"}/>
                <BoxHeading btnName={" :  Contact Details"}/>
                <TexEdit label={"Counry"} data={"02-05-1992"}/>
                <TexEdit label={"Website"} data={"Female"}/>
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
    justifyContent:"center"
  }
});

export default App;
