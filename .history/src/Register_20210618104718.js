import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useAuth } from "./contexts/AuthContext";

const Register = ({ navigation }) => {

  const [hidePassword, setHidePassword] = useState(true);
  const { signup, setUsername, currentUser } = useAuth();

  const _handleRegister = async (values) => {
    if (values.password !== values.password2) {
      return alert("passwords do not match");
    }
    try {
      await signup(values.email, values.password);
      currentUser.displayName= "test"
    } catch(e) {
      return console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.body}>
        <View style={style.header}>
          <Text style={{ fontSize: 30, color: "#132c33" }}>REGISTER</Text>
        </View>
        <View style={style.board}>
          <Formik
            initialValues={{ email: "", name: "", password: "", password2: "" }}
            onSubmit={_handleRegister}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().required(),
              password2: Yup.string().required(),
            })}
          >
            {({ values, handleSubmit, handleChange, errors }) => (
              <View>
              {/* <View style={style.item}>
                  <TextInput
                    value={values.name}
                    type="text"
                    onChangeText={handleChange("name")}
                    placeholder={"User name"}
                    style={style.input}
                  />
                  {errors.name && (
                    <Text style={{ color: "#126e82" }}>{errors.name}</Text>
                  )}
                </View> */}
                <View style={style.item}>
                  <TextInput
                    value={values.email}
                    type="email"
                    onChangeText={handleChange("email")}
                    placeholder={"Email"}
                    style={style.input}
                  />
                  {errors.email && (
                    <Text style={{ color: "#126e82" }}>{errors.email}</Text>
                  )}
                </View>
                <View style={style.item}>
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange("password")}
                    placeholder={"Password"}
                    style={style.input}
                    secureTextEntry={hidePassword}
                  />
                  <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}
                    style={{ position: "absolute", right: 10, top: 12 }}
                  >
                    <FontAwesome5
                      name={hidePassword ? "eye-slash" : "eye"}
                    ></FontAwesome5>
                  </TouchableOpacity>
                  {errors.password && (
                    <Text style={{ color: "#126e82" }}>{errors.password}</Text>
                  )}
                </View>
                <View style={style.item}>
                  <TextInput
                    value={values.password2}
                    onChangeText={handleChange("password2")}
                    placeholder={"Password"}
                    style={style.input}
                    secureTextEntry={hidePassword}
                  />
                  <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}
                    style={{ position: "absolute", right: 10, top: 12 }}
                  >
                    <FontAwesome5
                      name={hidePassword ? "eye-slash" : "eye"}
                    ></FontAwesome5>
                  </TouchableOpacity>
                  {errors.password2 && (
                    <Text style={{ color: "#126e82" }}>{errors.password2}</Text>
                  )}
                </View>
                <View style={style.item}>
                  <TouchableOpacity onPress={handleSubmit} style={style.button}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View
            style={[
              style.item,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#126e82", marginTop: 10 }}>Login!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: "#d8e3e7",
    flex: 1,
  },
  header: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    marginTop: 50,
    paddingHorizontal: 30,
  },
  item: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f7f7f7",
    height: 35,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#51c4d3",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default Register;
