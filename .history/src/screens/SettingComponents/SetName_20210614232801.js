import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import {useAuth} from "../../contexts/AuthContext"

export default function Profile({navigation}) {

    const {setUsername} = useAuth();

     function _handleSubmit(values) {
        const promises = []
        if (values.name){
             promises.push(setUsername(values.name))
        }
    
        Promise.all(promises).then(() =>{
            navigation.navigate("Home")
            //history.push("/room")
            //alertify.success("Your email is updated")
        }).catch(() => {
            alert("Failed to update name")
        })
        }

  return (
    <View style={style.body}>
      <Formik
            initialValues={{name: "" }}
            onSubmit={_handleSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string().required(),
            })}
          >
            {({ values, handleSubmit, handleChange, errors }) => (
              <View>
                <View style={style.item}>
                  <TextInput
                    value={values.name}
                    type="text"
                    onChangeText={handleChange("name")}
                    placeholder={"Username"}
                    style={style.input}
                  />
                  {errors.name && (
                    <Text style={{ color: "#126e82" }}>{errors.name}</Text>
                  )}
                </View>

                <View style={style.item}>
                  <TouchableOpacity onPress={handleSubmit} style={style.button}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Change Username
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