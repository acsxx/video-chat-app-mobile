import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import ChangeEmail from "./SettingComponents/ChangeEmail"

export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <SafeAreaView>
      <View style={style.body}>
        <Text>Settings!</Text>
        <View style={style.item}> 
          <ChangeEmail/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
      flex: 1,
  },
  item: {
    marginTop: 15,
    marginHorizontal: 15,
  }
})