import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {useAuth} from "../contexts/AuthContext"

export default function Profile() {
  
  const {currentUser, logout, name} = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Text>{name}</Text>
      <Text>{currentUser.email}</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={{ color: "red" }}>Logout!</Text>
      </TouchableOpacity>
    </View>
  );
}