import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {useAuth} from "../contexts/AuthContext"

export default function Chat() {
  
  const {currentUser, logout, name} = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
      
    </View>
  );
}