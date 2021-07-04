import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import { Formik } from "formik";
import * as Yup from "yup";

export default function Settings() {
  
  const {logout} = useAuth();

  return (
    <View style={{ flex: 1}}>
      <Text>Settings!</Text>
      <TouchableOpacity onPress={logout}> 
        <Text style={{color:"red", marginTop: 20}}>Logout!</Text>
      </TouchableOpacity>
    </View>
  );
}