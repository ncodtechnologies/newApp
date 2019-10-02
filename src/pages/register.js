import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {Input, LabelInput, LabelHeader, Button, ButtonLabel, ButtonExtLogin, LoginFooter } from "./uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
            <View style={styles.container}  >
            <View >
            <ScrollView showsVerticalScrollIndicator={false} >
            <LabelHeader label={"Sign Up"} />

            <LabelInput label={"Name"} />
            <Input  />
            <LabelInput label={"Email"} />
            <Input  />
            <LabelInput label={"Mobile"} />
            <Input  />
            <LabelInput label={"Password"} />
            <Input  />
            <LabelInput label={"Confirm Password"} />
            <Input  />
            <Button label="Sign Up" onPress={()=>this.props.navigation.navigate("MainMenu")} />
            <ButtonLabel label={"Have an Account? Login"} />
            
            </ScrollView >
            </View>
            </View>
            <LoginFooter />
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
    height: "80%",
    justifyContent:"center"
  }
});

export default App;
