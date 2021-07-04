import * as React from 'react';
import { Text, View } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import {useAuth} from "../../contexts/AuthContext"

export default function Profile() {

    const {updateEmail, currentUser} = useAuth();

     function _handleSubmit(values) {
        const promises = []
        if (values.email !== currentUser.email){
             promises.push(updateEmail(values.email))
        }
    
        Promise.all(promises).then(() =>{
            alert("Your email is updated")
            //history.push("/room")
            //alertify.success("Your email is updated")
        }).catch(() => {
            setError("Failed to update email")
        })
        }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Formik
            initialValues={{changeEmail: "" }}
            onSubmit={_handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required(),
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
                  <TouchableOpacity onPress={handleSubmit} style={style.button}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      Change Email
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
    </View>
  );
}