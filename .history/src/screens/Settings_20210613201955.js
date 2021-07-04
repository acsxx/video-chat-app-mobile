import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import ChangeEmail from "./SettingComponents/ChangeEmail"

export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <View style={style.body}>
      <Text>Settings!</Text>
      <ChangeEmail/>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
      flex: 1,
  },
})