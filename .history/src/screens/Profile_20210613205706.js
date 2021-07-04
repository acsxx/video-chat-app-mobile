import * as React from 'react';
import { Text, View } from 'react-native';
import {useAuth} from "../contexts/AuthContext"

export default function Profile() {
  
  const {currentUser} = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Text>{currentUser.email}</Text>
    </View>
  );
}