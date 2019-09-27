/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

import {Input, LabelInput, LabelHeader, Button, ButtonLabel, ButtonExtLogin } from "./uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const App: () => React$Node = () => {
  return (
    <>
          <View style={styles.body} >
            <LabelHeader label={"Login"} />

            <LabelInput label={"Username"} />
            <Input  />
            <LabelInput label={"Password"} />
            <Input  />
            <Button label="Login" />
            <ButtonLabel label={"Don't have an account ? Sign up"} />
            <ButtonExtLogin />
          </View>
    </>
  );
};

const styles = EStyleSheet.create({
  body : {
    padding: "30 rem"
  }
});

export default App;
