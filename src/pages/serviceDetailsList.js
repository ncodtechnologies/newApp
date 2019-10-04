import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {ServiceRequestCreated,ButtonSlim,BoxHeading,Date,TxtInput,FAQuestion} from "./uicomponents/_components";
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
                <View style={{flexDirection:'column',padding:20}}>
                    <BoxHeading btnName={" : Attestation Services"}/>
                    <Date/>
                    <View style={{flexDirection:'row'}}>
                      <ButtonSlim btnName={"Details"} color={{backgroundColor:'blue'}}/>
                      <ButtonSlim btnName={"Components"} color={{backgroundColor:'red'}}/>
                      <ButtonSlim btnName={"SR Details"} color={{backgroundColor:'blue'}}/>
                    </View>
                    <ServiceRequestCreated title={"Service Request Created"} date={"Sep 18, 2019, 9.43 am"}/>
                    <TxtInput name={"Name:"}/>
                    <FAQuestion title={"Question 1"} data={" Am shjg jhgdfhb asjdhajkj ausdja,m dausdn an siuhdakjsd iuayushidojlkan casgytuidhbx csayuioknd xcsghyuikjdnbakjsdc askj dcacksjmn cksjaznmc kasjbc sahkndakjsbd"}/>
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
});

export default App;