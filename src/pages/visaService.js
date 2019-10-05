import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';

import {FAQMenu,VisaBorder,VisaTitles} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = "../Assets/";

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
              <VisaBorder name="Visa Service >New Visa"/>
              <View style={{paddingHorizontal:20}}>
                <View style={styles.box} >
                    <View>
                          <Text style={{fontSize:20,fontWeight:'bold',color:'#081344'}}>New Visa</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenu btnName="General" img={require(`${assetsPath}FAQMenu/general.png`)}/>
                          <FAQMenu btnName="Price"  img={require(`${assetsPath}FAQMenu/price.png`)}/>
                          <FAQMenu btnName="Support/Complanits" img={require(`${assetsPath}FAQMenu/support.png`)}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenu btnName="Using Service" img={require(`${assetsPath}FAQMenu/service.png`)}/>
                          <FAQMenu btnName="Counter/Delivery" img={require(`${assetsPath}FAQMenu/delivery.png`)}/>
                          <FAQMenu btnName="Have a question?" img={require(`${assetsPath}FAQMenu/qstn.png`)}/>
                    </View>
                </View>
              </View>
              <View style={styles.visa}>
                  <VisaTitles btnName="Partner/Invester"/>
                  <VisaTitles btnName="Partner/Invester"/>
                  <VisaTitles btnName="Partner/Invester"/>
                  <VisaTitles btnName="Partner/Invester"/>
              </View>
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    flex: 1,
    
  },
  box:{
    flexDirection:'column',
    height:'65 %',
    justifyContent:'space-between',
    backgroundColor:'#f2f2f2',
    borderRadius : 15,
    padding:5,
},
visa:{
  flex:1,
  flexDirection:'column',
  padding:20,

}
});

export default App;
