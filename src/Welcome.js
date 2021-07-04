import * as React from "react";
import { Text, View, TouchableOpacity,StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Welcome({ navigation }) {
  return (
    <View style={style.body}>
      <Text style={style.wlc}>Welcome!</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "#126e82", marginTop: 10 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ color: "#126e82", marginTop: 10 }}>Register</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={style.button} onPress={() => navigation.navigate("Login")}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Login</Text>
        <MaterialCommunityIcons
          style={{ marginLeft: 5 }}
          name="login"
          size={26}
        />
      </TouchableOpacity>
      <View>
        <Text style={{ marginTop:20, }}>Or</Text>
      </View>
      <TouchableOpacity style={style.button} onPress={() => navigation.navigate("Register")}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Register</Text>
        <MaterialCommunityIcons
          style={{ marginLeft: 5 }}
          name="account-plus"
          size={26}
        />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  body:{
     flex: 1, 
     justifyContent: "center", 
     alignItems: "center" ,
     backgroundColor: "#D8E3E7"
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#51C4D3",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginTop: 20,
  },
  wlc:{
    fontSize: 35,
    color: "#126E82"
  }
});
