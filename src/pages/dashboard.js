
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

import { DashNotify, DashCard } from "./uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;
EStyleSheet.build({
    $rem: Math.min(entireScreenWidth,entireScreenHeight) / 380,
});

const App: () => React$Node = () => {
  return (
    <>
          <View style={styles.body} >
            <View  style={{ flexDirection:"column", flex:1, justifyContent:"space-around" }} >
              <DashNotify updates={0} />
              <View style={{ alignSelf:"flex-end"}}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent:"space-between" }} >
                  <DashCard updates={0} label="Action Required" type={1} onPress={()=>alert("To My Requests")} />
                  <DashCard updates={0} label="In Review" type={2} />
                </View>
                <View style={{ flexDirection: "row", width: "100%", justifyContent:"space-between", marginTop:5 }} >
                  <DashCard updates={0} label="Completed" type={3} />
                  <DashCard updates={0} label="Rejected" type={4} />
                </View>
              </View>
            </View>
          </View>
    </>
  );
};

const styles = EStyleSheet.create({
  body : {
    padding: "30 rem",
    height: "100%",
  }
});

export default App;
