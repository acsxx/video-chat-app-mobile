import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import ChangeEmail from "./SettingComponents/ChangeEmail"
import ChangePassword from "./SettingComponents/ChangePassword"
import SetName from "./SettingComponents/SetName"
export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.body}>  
      <View style={style.header}> 
          <Text>SETTINGS</Text>
        </View>
        <View style={style.item}> 
          <ChangeEmail/>
        </View>
        <View style={style.item}> 
          <ChangePassword/>
        </View>
        <View style={style.item}> 
          <SetName/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  body: {
      flex: 1,
      marginTop:40,
      backgroundColor: "#d8e3e7",
  },
  item: {
    marginTop: 40,
  },
  header: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
})