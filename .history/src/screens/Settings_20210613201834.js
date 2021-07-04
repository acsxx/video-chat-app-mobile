import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import ChangeEmail from "./SettingComponents/ChangeEmail"

export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <TouchableOpacity onPress={logout}> 
        <Text style={{color:"red", marginTop: 20}}>Logout!</Text>
      </TouchableOpacity>
      <ChangeEmail/>
    </View>
  );
}