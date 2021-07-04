import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Profile = ({ navigation }) => {
  const { currentUser } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <Image
        style={styles.avatar}
        source={require('../img/profile.png')}
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <MaterialCommunityIcons name="arrow-left" color={"black"} size={26} />
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            {currentUser.displayName || "user name"}
          </Text>
          <Text style={styles.info}>{currentUser.email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#126e82",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#126e82",
    marginTop: 10,
  },
  button: {
    marginLeft: 20,
    marginTop: 30,
  },
});

export default Profile;
