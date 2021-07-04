import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import ChangeEmail from "./SettingComponents/ChangeEmail"

export default function Settings() {
  
  const {logout} = useAuth();

  return (
      <View style={style.body}>
        <Text>Settings!</Text>
        <View style={style.item}> 
          <ChangeEmail/>
        </View>
      </View>
  );
}

const style = StyleSheet.create({
  body: {
      flex: 1,
      marginTop:30,
  },
  item: {
    marginTop: 15,
    marginHorizontal: 15,
  }
})