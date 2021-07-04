import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import ChangeEmail from "./SettingComponents/ChangeEmail"

export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.body}>
        <Text>Settings!</Text>
        <View style={style.item}> 
          <ChangeEmail/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  body: {
      
      marginTop:40,
  },
  item: {
    marginTop: 15,
    marginHorizontal: 15,
  }
})