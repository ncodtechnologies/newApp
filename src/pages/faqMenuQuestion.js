import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import {FAQMenu,LogoUnderline} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = "../Assets/";

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
              <View style={{ alignSelf: "center", justifyContent:"center",height:'50%'}} >
                 <View style={{flexDirection:'column',alignItems:'center', justifyContent:"space-evenly",height:'60%'}} >
                    <Image style={styles.logo_img} source={require("../Assets/logo.png")} />
                    <LogoUnderline/>
                 </View >
              </View >
              <View style={{flexDirection:'row',justifyContent:'center'}} >
                    <FAQMenu btnName="General" img={require(`${assetsPath}FAQMenu/general.png`)}/>
                    <FAQMenu btnName="Price"  img={require(`${assetsPath}FAQMenu/price.png`)}/>
                    <FAQMenu btnName="Support/Complanits" img={require(`${assetsPath}FAQMenu/support.png`)}/>
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
  logo_img: {
    height: "120 rem",
    resizeMode: "contain"
  }
});

export default App;
