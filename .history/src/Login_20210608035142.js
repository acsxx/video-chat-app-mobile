import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SocialIcon } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import TabScreens from "./screens/TabScreens";
const Login = ({ navigation }) => {
  const _handleSubmit = (values,e) => {
    e.preventDefault();
    console.log(values)
  };
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.body}>
        <View style={style.header}>
          <Text style={{ fontSize: 30, color: "#132c33" }}>LOGIN</Text>
        </View>
        <View style={style.board}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={_handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().required(),
            })}
          >
            {({ values, handleSubmit, handleChange, errors }) => (
              <View>
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
                    <FontAwesome5 name={hidePassword ? "eye-slash" : "eye"} />
                  </TouchableOpacity>
                  {errors.password && (
                    <Text style={{ color: "#126e82" }}>{errors.password}</Text>
                  )}
                </View>

                <View style={style.item}>
                  <TouchableOpacity onPress={handleSubmit} style={style.button}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View style={style.item}>
            <TouchableOpacity>
              <SocialIcon title="Sign In With Google" button type="google" />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity>
              <Text style={{ color: "#126e82", marginBottom: 10 }}>Forgot your password ?</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              style.item,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "#126e82" }}>Register!</Text>
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
    marginBottom: 15,
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

export default Login;
