import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {ProfilePhoto,ProfileName, MenuItem, ButtonSlim,BoxHeading,Underline,TexEdit} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const assetsPath = "../../Assets/";
const img="require(`../../Assets/Menubar/dash.png`)";
class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
                <View style={styles.container}  >
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:20}}>
                    <ProfilePhoto/>
                    <ProfileName/>
                </View>  
                <Underline/>
                <MenuItem item={"Dashboard"} icon={"${img}"}/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <Underline/>
                <MenuItem/>
                <MenuItem/>
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
