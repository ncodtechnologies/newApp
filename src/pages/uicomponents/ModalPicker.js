import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View,  } from 'react-native';
import {InputNoBorder,ModalPickerItem} from "./components"
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ModalPicker extends Component {

  state = {
    state : "",
    selectedItem: {},
    modalVisible : false,
    data : [
        {label: "label1", value:"value1"},
        {label: "label2", value:"value2"},
        {label: "label3", value:"value3"},
        {label: "label4", value:"value4"},
    ]
  }

  onModalPickerClose = () => {
    this.setState({modalVisible: false})
  }

  componentDidMount=()=>{
      
  }

  onSelect(selected) {
        this.setState({
            selectedItem: selected,
            modalVisible: false
        })
        this.props.onChange(selected);
    }

  render() {
    const renderList = this.props.data.map((datum) => {
        return (
            <ModalPickerItem onPress={()=>this.onSelect(datum)} label={datum.label} />
        )
    })
    return (
        <View>
            <TouchableOpacity onPress={()=>this.setState({modalVisible: true})} style={{marginHorizontal:5, alignItems:"center", flexDirection:"row", borderBottomWidth:1, borderColor:"#999999"}} >
                <InputNoBorder {...this.props}
                    editable={false}
                    value={this.state.selectedItem.label}
                    style={{borderBottomWidth:0, flex:1}}
                    />
                <Ionicons name="ios-arrow-down" size={14} style={{paddingHorizontal:5}} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={this.onModalPickerClose} >
                <View >
                    <View style={{flex:1, alignItems: "flex-end", marginHorizontal: 8, height:10, marginBottom: 10}}>
                        <TouchableOpacity onPress={this.onModalPickerClose} style={{padding:15}} >
                            <Ionicons name="ios-close" size={20} style={{padding: 10}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20, padding: 5}}>
                    {renderList}
                    </View>
                </View>
            </Modal>
        </View>
    )
    }
}