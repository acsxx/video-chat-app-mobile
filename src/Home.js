import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-native-uuid";
import { useAuth } from "./contexts/AuthContext";
import { useSocket } from "./contexts/SocketContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  //const {currentUser, name} = useAuth()
  const { setRoomID, createChat,  } = useSocket();
  function createRoom() {
    createChat();
  }
  function joinRoom(values) {
    const promises = [];
    if (values.roomID) {
      alert(values.roomID);
    }

    Promise.all(promises)
      .then(() => {
        //alert("Your Username is updated");
        //history.push("/room")
        //alertify.success("Your email is updated")
      })
      .catch(() => {
        alert("Failed to update name");
      });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.body}>
        <View style={style.item}>
          <TouchableOpacity onPress={createRoom} style={style.button}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Create Room
            </Text>
            <MaterialCommunityIcons
              style={{ marginLeft: 5 }}
              name="plus-circle-outline"
              size={26}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text>OR</Text>
        </View>
        <View style={style.item}>
          <Formik
            initialValues={{ roomID: "" }}
            onSubmit={joinRoom}
            validationSchema={Yup.object().shape({
              roomID: Yup.string(),
            })}
          >
            {({ values, handleSubmit, handleChange, errors }) => (
              <View>
                <View style={style.item}>
                  <TextInput
                    value={values.roomID}
                    type="text"
                    onChangeText={handleChange("roomID")}
                    placeholder={"Enter Room ID"}
                    style={style.input}
                  />
                  {/* {errors.roomID && (
                    <Text style={{ color: "#126e82" }}>{errors.roomID}</Text>
                  )} */}
                </View>

                <View style={style.item}>
                  <TouchableOpacity onPress={handleSubmit} style={style.button}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Join Room
                    </Text>
                    <MaterialCommunityIcons
                      style={{ marginLeft: 5 }}
                      name="login-variant"
                      size={26}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#d8e3e7",
  },
  item: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#f7f7f7",
    height: 35,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#21B6A8",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 15,
  },
});

export default HomeScreen;
