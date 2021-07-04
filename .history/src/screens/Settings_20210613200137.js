import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "./contexts/AuthContext";

export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <View style={{ flex: 1}}>
      <Text>Settings!</Text>
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



      <TouchableOpacity onPress={logout}> 
        <Text style={{color:"red", marginTop: 20}}>Logout!</Text>
      </TouchableOpacity>
    </View>
  );
}