import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default function Welcome({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text>Get Started</Text></TouchableOpacity>
    </View>
  );
}