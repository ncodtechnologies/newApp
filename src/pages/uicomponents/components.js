import React from 'react';
import {
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
    $rem: entireScreenWidth / 380,
    $inputFontSize: "15 rem",
    $inputTextColor: "#8d847d"
});

export const Input = (props) => {
    return (
        <TextInput style={styles.input} {...props}
            placeholderTextColor="#8d847d"
         />
    )
}

export const LabelInput = (props) => {
    return (
        <Text  {...props} style={styles.lblInput} >{props.label}</Text>
    )
}

export const LabelHeader = (props) => {
    return (
        <Text  {...props} style={styles.lblHeader} >{props.label}</Text>
    )
}

export const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button} {...props}  >
            <Text style={styles.txtBtn} >{props.label}</Text>
        </TouchableOpacity>
    )
}

export const ButtonLabel = (props) => {
    return (
        <TouchableOpacity  style={styles.btnLbl}  {...props}  >
            <Text style={styles.txtBtnLbl} >{props.label}</Text>
        </TouchableOpacity>
    )
}

export const ButtonExtLogin = (props) => {
    return (
        <View style={{ flexDirection: "row", width: "100%" }} >
        <TouchableOpacity  style={styles.btnExtLeft}  {...props}  >
            <Text style={styles.txtBtnExtLeft} >By Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btnExtRight}  {...props}  >
            <Text style={styles.txtBtnExtRight} >By Google</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = EStyleSheet.create({
    input: {
      borderBottomWidth: 1,
      borderColor : "#081344",
      fontSize : "$inputFontSize",
      paddingHorizontal : "10 rem",
      paddingVertical : "7 rem",
      color : "$inputTextColor",
      margin : "8 rem"
    },
    lblInput : {
        fontSize : "$inputFontSize",
        color : "#081344",
        margin : "8 rem"
    },
    lblHeader : {
        fontSize : "30 rem",
        color : "#58546b",
        margin : "8 rem",
        fontWeight: "bold"
    },
    txtBtn: {
        fontSize : "$inputFontSize",
        color : "#FFF",
        fontWeight : "bold"
    },
    button : {
        padding : "15 rem",
        backgroundColor : "#f90a08",
        borderRadius : "10 rem",
        alignItems : "center",
        alignSelf: "center",
        width: "50%",
        margin : "8 rem"
    },
    txtBtnLbl :{
        fontSize : "$inputFontSize",
        color : "#8d847d",
    },
    btnLbl : {
        padding : "15 rem",
        alignItems : "center",
        alignSelf: "center",
        margin : "8 rem"
    },
    btnExtLeft : {
        padding : "15 rem",
        borderWidth: 1,
        borderTopLeftRadius : "10 rem",
        borderBottomLeftRadius : "10 rem",
        borderTopRightRadius : 0,
        borderBottomRightRadius : 0,
        alignItems : "center",
        alignSelf: "center",
        flex: 1,
        borderColor: "#081344"
    },
    btnExtRight : {
        padding : "15 rem",
        borderWidth: 1,
        borderTopLeftRadius : 0,
        borderBottomLeftRadius : 0,
        borderTopRightRadius : "10 rem",
        borderBottomRightRadius : "10 rem",
        alignItems : "center",
        alignSelf: "center",
        flex: 1,
        borderColor: "#f90a08"
    },
    txtBtnExtLeft : {
        alignItems : "center",
        alignSelf: "center",
        color :  "#081344",
        fontWeight : "bold"
    },
    txtBtnExtRight : {
        alignItems : "center",
        alignSelf: "center",
        color :  "#f90a08",
        fontWeight : "bold"
    },
  });
