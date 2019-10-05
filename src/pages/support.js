import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import {ButtonPay,TxtInputBold,TxtInputMessage,SupportDetails} from "./uicomponents/_components";
import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/AntDesign';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const assetsPath = "../../Assets/";
const img="require(`../../Assets/Menubar/dash.png`)";
class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
                <View style={styles.box}>
                    <TxtInputBold name="Name"/>
                    <TxtInputBold name="Email"/>
                    <TxtInputBold name="Mobile"/>
                    <TxtInputMessage name="Message"/>
                </View>  
                <ButtonPay/>
                <View style={styles.box}>
                    <SupportDetails title="Phone" data="+9182656781"/>
                    <SupportDetails title="Email" data="michelle1991@gmail.com"/>
                    <SupportDetails title="Address" data="jhgjksad lksdflskfn lskdfns skdfnlskf sdkjfslkf djskfsdkf"/>
                </View>
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    flex: 1,
    height:'100%',
    
  },
  box:{
    flexDirection:'column',
    padding:15,
  }
});

export default App;
