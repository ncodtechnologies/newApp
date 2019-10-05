import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import {FAQMenu,LogoUnderline,FAQuestion,FAQButton} from "./uicomponents/_components";
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
              <View style={{flexDirection:'column',justifyContent:'center',padding:30}} >
                    <FAQButton btnName="General"/>
                    <FAQuestion title="Question 1" data="A aksd akjsdhan cadkjsdna xjaskndcas jkdn cass sdkhad asdjkasa casjdas caskjdhaskd csajkchkjsdc sjakcbakjsdc sjkacskjdc sjkdcns djkszncx sjkdzxn sasDASF  dsfs"/>
                    <FAQuestion title="Question 1" data="A aksd akjsdhan cadkjsdna xjaskndcas jkdn cass sdkhad asdjkasa casjdas caskjdhaskd csajkchkjsdc sjakcbakjsdc sjkacskjdc sjkdcns djkszncx sjkdzxn yui uyguyt"/>
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
