import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import {useAuth} from "../../contexts/AuthContext"

export default function Profile() {

    const {updatePassword, currentUser} = useAuth();

     function _handleSubmit(values) {
        const promises = []
        if (values.password !== currentUser.password){
             promises.push(updatePassword(values.password))
        }
    
        Promise.all(promises).then(() =>{
            alert("Your password is updated")
            //history.push("/room")
            //alertify.success("Your email is updated")
        }).catch(() => {
            setError("Failed to update email")
        })
        }

  return (
    <View style={style.body}>
      <Formik
            initialValues={{password: "" }}
            onSubmit={_handleSubmit}
            validationSchema={Yup.object().shape({
                password: Yup.string().required(),
            })}
          >
            {({ values, handleSubmit, handleChange, errors }) => (
              <View>
                <View style={style.item}>
                  <TextInput
                    value={values.password}
                    type="password"
                    onChangeText={handleChange("password")}
                    placeholder={"Password"}
                    style={style.input}
                  />
                  {errors.password && (
                    <Text style={{ color: "#126e82" }}>{errors.password}</Text>
                  )}
                </View>

                <View style={style.item}>
                  <TouchableOpacity onPress={handleSubmit} style={style.button}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Change password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
    </View>
  );
}

const style = StyleSheet.create({
    body: {
        
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
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginHorizontal: 15,
      },
})