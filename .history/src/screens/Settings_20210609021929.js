import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';


export default function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <TouchableOpacity>
        <Text style={{color:"red", marginTop: 20}}>Logout!</Text>
      </TouchableOpacity>
    </View>
  );
}