
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import EStyleSheet from 'react-native-extended-stylesheet';
import {  } from 'react-native-gesture-handler';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;
EStyleSheet.build({
    $rem: Math.min(entireScreenWidth,entireScreenHeight) / 380,
});

class BottomBar extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
            <TouchableOpacity  style={styles.view} onPress={this.navigateToScreen('Dashboard')} >
              <Icon name="upcircle" style={styles.icon} />
              <Text  style={styles.text} >
                Dashboard
              </Text>
            </TouchableOpacity>
            <View style={styles.divider} ></View>
            <TouchableOpacity  style={styles.view}   >
              <Icon name="upcircle" style={styles.icon} />
              <Text  style={styles.text} >
                Request a Service
              </Text>
            </TouchableOpacity>
            <View style={styles.divider} ></View>
            <TouchableOpacity  style={styles.view}  onPress={this.navigateToScreen('MyRequests')} >
              <Icon name="upcircle" style={styles.icon} />
              <Text  style={styles.text}>
                My Requests
              </Text>
            </TouchableOpacity>
          </View>
    );
  }
}

BottomBar.propTypes = {
  navigation: PropTypes.object
};

export default BottomBar;

const styles = EStyleSheet.create({
  divider : {
    backgroundColor: "#FFF", width:3,  flexDirection: "row", marginVertical : "5 rem",
  },
  container:{
    padding: "5 rem",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around" , 
    backgroundColor: "#081344",
  },
  view:{
    padding: "3 rem",
    alignItems :"center",
    justifyContent:"space-around",
  },
  icon:{
    fontSize: "35 rem",
    color: "#FFF"
  },
  text: {
    fontSize: "12 rem",
    padding: "3 rem",
    textAlign: "center",
    color: "#FFF"

  }
});