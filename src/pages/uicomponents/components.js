import React from 'react';
import {
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
  Picker,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {calcHeight, calcWidth} from '../../config';
const entireScreenWidth = Dimensions.get('window').width;
import LinearGradient from 'react-native-linear-gradient';
import {BASE_URL} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconsAws from 'react-native-vector-icons/FontAwesome';
import Radio from './radio';
import CheckBox from 'react-native-check-box'
import RNPickerSelect from 'react-native-picker-select';
import PickerModal from 'react-native-picker-modal-view';

EStyleSheet.build({
  $rem: entireScreenWidth / 380,
  $inputFontSize: RFPercentage(2),
  $inputTextColor: '#8d847d',
});
const assetsPath = '../../Assets/';
const colorTop = '#a10606';
const colorBottom = '#ff4747';

export const Input = props => {
  return (
    <TextInput style={[styles.input,props.style]} {...props} placeholderTextColor="#8d847d" />
  );
};

export const Input2 = props => {
  return (
    <TextInput  {...props} placeholder={props.placeholder} style={[styles.input,{borderColor: "#999999",flex:1 }]}  placeholderTextColor="#8d847d" />
  );
};

export const InputNoBorder = props => {
  return (
    <TextInput  {...props} placeholder={props.placeholder} style={[styles.input,{borderBottomWidth: 0,flex:1}]}  placeholderTextColor="#8d847d" />
  );
};

export const LabelInput = props => {
  return (
    <Text {...props} style={styles.lblInput}>
      {props.label}
    </Text>
  );
};

export const LabelHeader = props => {
  return (
    <Text {...props} style={styles.lblHeader}>
      {props.label}
    </Text>
  );
};

export const Button = props => {
  return (
    <TouchableOpacity {...props}>
      <LinearGradient
        style={[styles.button, props.extraStyle]}
        colors={[colorTop, colorBottom]}>
        <Text style={styles.txtBtn}>{props.label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const ButtonLabel = props => {
  const {textStyle, wrapperStyle} = props;
  return (
    <TouchableOpacity style={[styles.btnLbl, wrapperStyle]} {...props}>
      <Text style={[styles.txtBtnLbl, textStyle]}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export const ErrorLabel = props => {
  const {textStyle, wrapperStyle} = props;
  return (
    <View style={[styles.errorLbl, , wrapperStyle]} {...props}>
      <Text style={[styles.txtBtnLbl, {color: colorBottom}, textStyle]}>
        {props.label}
      </Text>
    </View>
  );
};

export const ButtonExtLogin = props => {
  const {extLoginUrls, navigation} = props;
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExternalLogin', {
            uri: BASE_URL + extLoginUrls.data[0].Url,
          })
        }
        style={styles.btnExtLeft}
        {...props}>
        <Image
          style={styles.ext_icon}
          source={require('../../Assets/external_login/facebook_icon.png')}
        />
        <Text style={styles.txtBtnExtLeft}>By Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExternalLogin', {
            uri: BASE_URL + extLoginUrls.data[1].Url,
          })
        }
        style={styles.btnExtRight}
        {...props}>
        <Image
          style={styles.ext_icon}
          source={require('../../Assets/external_login/google_icon.png')}
        />
        <Text style={styles.txtBtnExtRight}>By Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export const DashNotify = props => {
  return (
    <View style={styles.dash_notify}>
      <Image
        style={styles.dash_notify_img}
        source={require(`${assetsPath}Dashboard/bell.png`)}
      />
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Text style={styles.dash_notify_txt}>
          You have {props.updates} Updates
        </Text>
      </View>
    </View>
  );
};

export const DashCard = props => {
  var img = require(`${assetsPath}Dashboard/card_required.png`);
  switch (props.type) {
    case 1:
      img = require(`${assetsPath}Dashboard/card_required.png`);
      break;
    case 2:
      img = require(`${assetsPath}Dashboard/card_review.png`);
      break;
    case 3:
      img = require(`${assetsPath}Dashboard/card_completed.png`);
      break;
    case 4:
      img = require(`${assetsPath}Dashboard/card_rejected.png`);
      break;
  }

  return (
    <TouchableOpacity
      style={
        props.type == 1
          ? styles.dash_card_outer_required
          : styles.dash_card_outer
      }
      onPress={props.onPress}>
      <View style={styles.dash_card}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.dash_card_img} source={img} />
        </View>
        <View>
          <View
            style={
              props.type == 1
                ? styles.dash_card_Title_required
                : styles.dash_card_Title
            }>
            <Text style={styles.dash_card_txtTitle}>{props.label}</Text>
          </View>
          <Text style={styles.dash_card_txtUpdates}>
            You have {props.updates} Updates
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const SearchBar = props => {
  return (
    <TextInput {...props} style={styles.search_bar} placeholder="Search" />
  );
};

export const NoRequestsLabel = props => {
  return (
    <View style={styles.no_request_lbl}>
      <Text style={styles.no_request_text}>{props.label}</Text>
    </View>
  );
};

export const NoRequestsBody = props => {
  var img = require(`${assetsPath}myrequests/empty1.png`);
  switch (props.img) {
    case 3:
      img = require(`${assetsPath}myrequests/empty2.png`);
      break;
    case 4:
      img = require(`${assetsPath}myrequests/empty3.png`);
      break;
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
      }}>
      <View style={styles.no_request_inner}>
        <Image style={styles.no_request_img} source={img} />
        <Text style={styles.no_request_body_text}>{props.emptyText}</Text>
      </View>
    </View>
  );
};

export const LoginFooter = props => {
  var img = require(`${assetsPath}logo.png`);
  return (
    <View style={styles.loginfooter}>
      <Image style={styles.loginfooter_img} source={img} />
      <View
        style={{
          backgroundColor: '#e2eae7',
          height: calcHeight(0.6),
          width: calcWidth(31),
          marginTop: calcHeight(-2.5),
        }}></View>
    </View>
  );
};

export const MyRequestItem = ({
  service,
  color,
  backgroundColor,
  statusLabel,
}) => {
  return (
    <View style={styles.myreqitem}>
      <View style={{flex: 1}}>
        <Text style={styles.myreqitem_head}>Date</Text>
        <Text style={styles.myreqitem_text}>{service.CreatedDate}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.myreqitem_head}>Service Request</Text>
        <Text style={styles.myreqitem_text}>
          {service.SRTitle} - SR{service.SRID}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={[styles.myreqitem_head, {textAlign: 'center'}]}>
          Status
        </Text>
        <Text style={[styles.myreqitem_status, {backgroundColor, color}]}>
          {statusLabel}
        </Text>
      </View>
    </View>
  );
};

export const ServiceHomeItem = props => {
  var img = require(`${assetsPath}service/attestation-icon.png`);
  switch (props.type) {
    case 1:
      img = require(`${assetsPath}service/attestation-icon.png`);
      break;
    case 2:
      img = require(`${assetsPath}service/translation-icon.png`);
      break;
    case 3:
      img = require(`${assetsPath}service/visa-icon.png`);
      break;
  }
  return (
    <View style={styles.servicehome_item}>
      <View>
        <Image style={styles.servicehome_item_img} source={img} />
      </View>
      <View style={styles.servicehome_item_right}>
        <Text style={styles.servicehome_item_title}>{props.title}</Text>
        <Text style={styles.servicehome_item_text}>{props.desc}</Text>
        <TouchableOpacity style={styles.servicehome_item_btn} {...props}>
          <Text style={styles.servicehome_item_btntxt}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HeaderTitle = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.header_title}>{props.title}</Text>
    </View>
  );
};

export const ServiceHomeText = props => {
  return <Text style={styles.servicehome_text}>{props.text}</Text>;
};

export const Pick = props => {
  return (
    <Picker
      {...props}
      style={styles.picker}
      activeItemTextStyle={{fontSize: 18, fontWeight: '300'}}
      itemStyle={styles.pickeritem}></Picker>
  );
};

export const RNPicker = props => {
  return (    
		<PickerModal {...props} />
  );
};

export const HeaderBtnMenu = props => {
  return (
    <TouchableOpacity
      style={{
        padding: calcHeight(1),

        paddingLeft: calcWidth(5),
      }}
      onPress={props.onPress}>
      <Ionicons
        name="ios-menu"
        style={{
          color: '#081344',
          fontSize: RFValue(25),
        }}
      />
    </TouchableOpacity>
  );
};

export const HeaderBtnBack = props => {
  return (
    <TouchableOpacity
      style={{
        padding: calcHeight(1),
        marginTop: calcHeight(0.2),
        paddingLeft: calcWidth(5),
      }}
      onPress={props.onPress}>
      <Ionicons
        name="ios-arrow-back"
        style={{
          color: '#081344',
          fontSize: RFValue(22),
        }}
      />
    </TouchableOpacity>
  );
};

export const RadioButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ flexDirection: "row", padding: 5, alignItems: "center", flex:1 }} >
      <Radio {...props} />
      <Text style={styles.radiotxt} >Radio</Text>
    </TouchableOpacity>
  );
};

export const HeaderBtnProfile = props => {
  return (
    <TouchableOpacity
      style={{
        padding: calcHeight(1),
        paddingRight: calcWidth(4.5),
        // height: calcHeight(5.5),
      }}
      onPress={props.onPress}>
      <IconsAws
        name="user-circle-o"
        style={{
          color: '#081344',
          fontSize: RFValue(20),
        }}
      />
    </TouchableOpacity>
  );
};

export const TxtSubHead = (props) => {
  return (
      <Text style={styles.txtSubHead} >{props.title}</Text>
  )
}

export const PriceDetailItem = (props) => {
  return (
        <View style={styles.pricedt_item} >
          <View>
            <Text style={styles.pricedt_item_txt} >{props.label}</Text>
          </View>
          <View>
            <Text style={styles.pricedt_item_amt}>AED {props.amount}</Text>
          </View>
        </View>
      )
}

export const TxtTotalAmount = (props) => {
    return (
      <View >
          <Text style={styles.txt_total_amt}>Your Total Bill Amount : {props.amount}</Text>
      </View>
    )
}

export const TxtAgreement = (props) => {
    return (
      <View style={styles.agreement} >
          <CheckBox {...props} checkBoxColor={"#f84563"} />
          <Text style={styles.txt_agreement} >I have read & agree to the <Text style={styles.agreement_lnk} onPress={props.onTermsClick} >Terms and Conditions</Text> of Service</Text>
      </View>
    )
}

export const ButtonNormal = (props) => {
    return (
        <TouchableOpacity  style={[styles.button_normal, props.extraStyle]} {...props}  >
            <Text style={styles.txtBtn} >{props.label}</Text>
        </TouchableOpacity>
    )
}

export const SelectFile = (props) => {
  return (
      <View>
        <Text style={[styles.txtSubHead,{fontWeight:"300"}]} >{props.title}</Text>
        <View style={{ flexDirection: "column",alignItems:'center' ,justifyContent:'center'}} >
        <Text style={styles.selectfiletxt} >Select File</Text>
        <View style={{ flexDirection: "row",width:"30%",justifyContent:'center'}}>
            <TouchableOpacity 
              onPress={props.onLeftPress}
             style={[styles.btnFile,{borderWidth:1,borderRightWidth:1, padding:3,borderRadius:5, borderColor:"#081344" }]}  >
              <Image style={styles.file_img} source={require(`${assetsPath}File/file1.png`)} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={props.onRightPress}
             style={[styles.btnFile,{borderWidth:1,borderLefttWidth:1, padding:3,borderRadius:5, borderColor:"#081344"}]}   {...props}  >
              <Image style={styles.file_img} source={require(`${assetsPath}File/file2.png`)} />
            </TouchableOpacity>
        </View>
        <Text  style={styles.selectfilefooter}  >File Format  :  jpeg + png + jpg</Text>
        <Text  style={styles.selectfilefooter}  >File Size > 5 MB</Text>
        </View>
      </View>
  )
}

export const ModalPickerItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} ><Text style={[styles.input,{borderColor:"#999999"}]} >{props.label}</Text></TouchableOpacity>
  )
}

export const ProfilePhoto = (props) => {
  return (
         <View style={{ flexDirection: "column",alignItems:'center' ,justifyContent:'center', margin:10}} >
              <View style={styles.profileBorder}>
                      <Image style={styles.profile} source={props.img} />
              </View>  
         </View> 
  )
}

export const ProfileName = (props) => {
  return (
         <View style={{ flexDirection: "column",alignItems:'center' ,justifyContent:'center'}} >
              <Text  style={styles.profilename_txt} >{props.name}</Text>
              <View  style={{ flexDirection: "row"}}>
                  <Text  style={styles.profilename_desig}  >{props.designation}</Text> 
                  <TouchableOpacity onPress={props.onEditPress} >
                    <Image style={styles.editIcon} source={require(`${assetsPath}Profile/edit.png`)} />
                  </TouchableOpacity>
              </View>  
         </View> 
  )
}

export const ButtonSlim = (props) => {
  return (
      <TouchableOpacity  style={[ styles.btnSlim,props.color]} {...props}  >
          <Text style={{ fontSize : 10, color : "#FFF", fontWeight : "bold"}} >name</Text>
      </TouchableOpacity>
  )
}

export const ProfileSaveIcon = (props) => {
  return (
      <TouchableOpacity onPress={props.onPress} style={{alignSelf:"flex-end", padding:10}}  >
        <Ionicons name="md-checkmark-circle-outline"style={styles.profilesave_icon} />
      </TouchableOpacity>
  )
}


const styles = EStyleSheet.create({
  profilesave_icon: {
      fontSize: RFValue(17),
  },
  profilename_desig:{
      fontSize: RFValue(13),
      fontFamily: 'Montserrat-Light',
      color:'#4d4d4d',
      paddingHorizontal: calcWidth(1),
  },
  profilename_txt:{
      fontSize: RFValue(16),
      fontFamily: 'Montserrat-Medium',
      color:'#4d4d4d',
      paddingHorizontal: calcWidth(1),
  },
  btnSlim:{
      width: "88 rem",
      padding : "4 rem",
      backgroundColor : "#EF6174",
      borderRadius : "5 rem",
      alignItems : "center",
      alignSelf: "center",
      margin : "10 rem",
      fontSize:'10 rem'
  },
  editIcon:{
      width: calcWidth(5),
      height: calcWidth(5),
      padding: calcWidth(1),
  },
  profile:{
      width: "80 rem",
      height: "80 rem",
      borderRadius:"40 rem",
  },
  profileBorder:{
      width: "90 rem",
      height: "90 rem",
      borderRadius:"50 rem",
      borderWidth:3,
      alignItems:'center' ,
      justifyContent:'center',
      borderColor:'#8d847d'
  },
  selectfilefooter : {
    padding : calcWidth(1),
    color: '#081344',
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Light',
    textAlign : "center"
  },
  selectfiletxt : {
    padding : calcWidth(1),
    color: '#081344',
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Light',
    textAlign : "center"
  },
  file_img:{
    width: "35 rem",
    height: "35 rem",
  },
  agreement : {
      marginVertical : calcWidth(5),
      marginHorizontal : calcHeight(2),
      flexDirection: "row",
      alignItems: "center"
  },
  agreement_lnk : {
      padding : calcHeight(1),
      fontStyle: 'italic',
      color: '#081344',
      fontSize: RFValue(16),
      textDecorationLine: 'underline',
      fontFamily: 'Montserrat-Light',
  },
  txt_agreement : {
      marginLeft : calcWidth(2),
      padding : calcHeight(1),
      fontStyle: 'italic',
      color: '#081344',
      fontSize: RFValue(16),
      fontFamily: 'Montserrat-Light',
  },
  txt_total_amt : {
      flex: 1,
      padding : calcHeight(1),
      backgroundColor : "#47489f",
      borderRadius : calcHeight(1),
      alignItems : "center",
      textAlign:'center',
      color:'#FFF',
      fontSize: RFValue(14),
      fontFamily: 'Montserrat-Medium',
  },
  pricedt_item_txt : {
      fontSize: RFValue(16.8),
      fontWeight:'bold',
      color:'#081344',
      fontFamily: 'Montserrat-Medium',
  },
  pricedt_item_amt : {
      width: calcWidth(30),
      padding : calcHeight(1),
      backgroundColor : "#47489f",
      borderRadius : calcHeight(0.8),
      alignItems : "center",
      textAlign:'center',
      color:'#FFF',
      fontSize: RFValue(13.5),
      fontFamily: 'Montserrat-Light',
  },
  pricedt_item:{
      flexDirection:'row',
      marginVertical: calcHeight(1),
      paddingHorizontal: calcHeight(5),
      paddingVertical: calcHeight(4),
      justifyContent:'space-between',
      backgroundColor:'#f2f2f2',
      alignItems : "center",
      borderRadius : calcHeight(0.8),
  },
  txtSubHead : {
      fontWeight: "bold",
      fontSize : RFValue(16.8),
      color : "#081344",
      margin : calcHeight(0.8),
      borderBottomWidth:1,
      borderColor : "#999999",
      paddingVertical : "5 rem",
      fontFamily: 'Montserrat-Meduim',
  }, 
  radiotxt: {
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    color: '$inputTextColor',
    fontFamily: 'Montserrat-Light',
  },
  pickeritem: {
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    color: '$inputTextColor',
    fontFamily: 'Montserrat-Light',
  },
  picker: {
    borderColor: '#081344',
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    fontWeight: '100',
    backgroundColor: "red",
    color: '$inputTextColor',
    fontFamily: 'Montserrat-Light',
  },
  header_title: {
    textAlign: 'center',
    fontSize: RFValue(16.8),
    fontWeight: 'bold',
  },
  servicehome_text: {
    marginLeft: calcWidth(2.7),
    marginTop: calcHeight(2),
    fontSize: RFValue(13),
    padding: calcHeight(0.5),
    fontFamily: 'Montserrat-Light',
  },
  servicehome_item: {
    padding: calcHeight(1),
    borderBottomWidth: 1,
    borderColor: '#999999',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: calcHeight(2),
  },
  servicehome_item_right: {
    padding: calcHeight(1),
    paddingHorizontal: calcHeight(1.5),
    flex: 1,
  },
  servicehome_item_title: {
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Medium',
    paddingVertical: calcHeight(0.5),
  },
  servicehome_item_btn: {
    backgroundColor: '#47489f',
    padding: calcHeight(0.9),
    alignItems: 'center',
    borderRadius: calcHeight(1),
    width: calcHeight(12.5),
  },
  servicehome_item_btntxt: {
    fontSize: calcHeight(1.6),
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  servicehome_item_text: {
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
    color: '#666666',
    paddingVertical: calcHeight(1),
  },
  servicehome_item_img: {
    width: calcHeight(6),
    height: calcHeight(6),
    margin: calcHeight(1),
    marginTop: calcHeight(3),
  },
  loginfooter: {
    alignItems: 'center',
    height: calcHeight(20),
    backgroundColor: '#FFF',

    justifyContent: 'space-around',
  },
  loginfooter_img: {
    height: calcHeight(14),
    resizeMode: 'contain',
  },

  myreqitem_status: {
    padding: calcHeight(0.5),
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    borderRadius: calcHeight(0.8),
    overflow: 'hidden',
  },
  myreqitem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#999999',
    padding: calcHeight(0.5),
    paddingBottom: calcHeight(1.9),
    marginTop: calcHeight(2.5),
  },
  myreqitem_text: {
    padding: calcHeight(0.7),
    color: '#4d4d4d',
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
  },
  myreqitem_head: {
    fontFamily: 'Montserrat-Medium',
    padding: calcHeight(1),
    color: '#081344',
    fontSize: RFValue(11),
  },
  no_request_body_text: {
    padding: calcHeight(1),
    color: '#4d4d4d',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    fontSize: RFValue(12),
  },
  no_request_inner: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  no_request_img: {
    width: calcHeight(30),
    height: calcHeight(25),
    padding: calcHeight(2),
  },
  no_request_lbl: {
    marginTop: calcHeight(1.5),
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#999999',
  },
  no_request_text: {
    padding: calcHeight(1),
    color: '#081344',
    fontFamily: 'Montserrat-Light',
    fontSize: RFValue(12),
  },
  search_bar: {
    fontSize: RFValue(14),
    borderRadius: calcHeight(4),
    paddingHorizontal: calcWidth(6),
    paddingVertical: calcHeight(2),
    backgroundColor: '#f2f2f2',
    color: '#8d847d',
    marginBottom: calcHeight(1),
    marginTop: calcHeight(2),
    width: calcWidth(79),
    marginLeft: calcWidth(3),
    fontFamily: 'Montserrat-Medium',
  },
  dash_card_Title_required: {
    height: calcHeight(5),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dash_card_Title: {
    height: calcHeight(5),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dash_card_txtUpdates: {
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
    color: '#4d4d4d',
    marginTop: calcHeight(0.2),
  },
  dash_card_txtTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(14),
    color: '#081344',
    //marginTop: calcHeight(0.1),
  },
  dash_card_outer: {
    borderRadius: calcWidth(2),
    backgroundColor: '#fff',
    height: calcHeight(22),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    elevation: 1,
    alignSelf: 'flex-end',
  },
  dash_card: {
    justifyContent: 'center',
    width: calcWidth(41.7),
    //height: calcHeight(22),
    paddingLeft: calcWidth(3),
    paddingRight: calcWidth(1),
    paddingBottom: 15,
    alignSelf: 'flex-end',
  },
  ext_icon: {
    width: calcHeight(3.5),
    height: calcHeight(3.5),
  },
  dash_card_outer_required: {
    borderRadius: '5 rem',
    backgroundColor: '#fff',
    height: calcHeight(28),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    elevation: 1,
  },
  dash_card_img: {
    width: calcHeight(11),
    height: calcHeight(11),
    padding: calcWidth(1),
  },
  dash_notify: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderRadius: calcHeight(2),
    justifyContent: 'center',
    padding: calcHeight(0.5),
    borderColor: '#081344',
  },
  dash_notify_img: {
    width: calcHeight(5),
    height: calcHeight(5),
    padding: calcHeight(1),
  },
  dash_notify_txt: {
    fontSize: '$inputFontSize',
    color: '#4d4d4d',
    fontFamily: 'Montserrat-Medium',
    //fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#081344',
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    color: '$inputTextColor',
    margin: 5,
    fontFamily: 'Montserrat-Light',
  },
  lblInput: {
    fontSize: '$inputFontSize',
    color: '#081344',
    fontFamily: 'Montserrat-Light',
    margin: calcWidth(1),
  },
  lblHeader: {
    fontSize: RFValue(25),
    color: '#58546b',
    marginVertical: calcHeight(1.2),
    marginHorizontal: calcWidth(0.8),
    //fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
  },
  txtBtn: {
    fontSize: '$inputFontSize',
    color: '#FFF',

    fontFamily: 'Montserrat-SemiBold',
  },
  button_normal: {
    width: calcWidth(65),
    padding: calcHeight(2),
    backgroundColor: '#f84563',
    borderRadius: calcHeight(2),
    alignItems: 'center',
    alignSelf: 'center',
    margin: calcWidth(4),
  },
  button: {
    width: calcWidth(65),
    padding: calcHeight(2),
    //backgroundColor: '#f90a08',
    borderRadius: calcHeight(2),
    alignItems: 'center',
    alignSelf: 'center',
    margin: calcWidth(4),
  },
  txtBtnLbl: {
    fontSize: '$inputFontSize',
    color: '#8d847d',
    fontFamily: 'Montserrat-Light',
  },
  btnLbl: {
    padding: calcHeight(1),
    alignItems: 'center',
    alignSelf: 'center',
    margin: calcHeight(1),
  },

  errorLbl: {
    //paddingTop: calcHeight(0.2),
    paddingLeft: calcWidth(1),
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: calcHeight(0.2),
  },
  btnExtLeft: {
    padding: calcHeight(1.3),
    borderWidth: 1,
    borderTopLeftRadius: calcHeight(2),
    borderBottomLeftRadius: calcHeight(2),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: '#081344',
    flexDirection: 'row',
  },
  btnExtRight: {
    padding: calcHeight(1.3),
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: calcHeight(2),
    borderBottomRightRadius: calcHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    borderColor: '#f90a08',
    flexDirection: 'row',
  },
  txtBtnExtLeft: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#081344',
    fontSize: '$inputFontSize',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: calcWidth(1),
  },
  txtBtnExtRight: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#f90a08',
    fontSize: '$inputFontSize',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: calcWidth(1),
  },
});

export const hdrStyles = EStyleSheet.create({
  header: {
    backgroundColor: '#f8f9fc',
    elevation: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    borderBottomColor: 'transparent',
    height: calcHeight(5.5),
  },
  title: {
    color: '#081344',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(17),
    textAlign: 'center',
    // backgroundColor: 'red',
    flex: 1,
    //width: '100%',
  },
});
