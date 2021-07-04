import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import ChangeEmail from "./SettingComponents/ChangeEmail"

export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <View style={{ flex: 1}}>
      <Text>Settings!</Text>
      <ChangeEmail/>
    </View>
  );
}