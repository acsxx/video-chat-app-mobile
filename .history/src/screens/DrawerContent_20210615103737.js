import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useAuth} from "../contexts/AuthContext"

export default function DrawerContent(props) {

    const {logout, currentUser, name} = useAuth();

  return (
    <View style={{ flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <View>
                    <Title>{name || "user name"} </Title>
                    <Caption>{currentUser.email}</Caption>
                </View>
            </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
               icon={({color,size}) => (
                <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
               )}
               label="Audit Logs"
               onPress={() => {}} 
          />
          <DrawerItem
               icon={({color,size}) => (
                <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
               )}
               label="Settings"
               onPress={() => {props.navigation.navigate("Settings")}} 
          />
          <DrawerItem
               icon={({color,size}) => (
                <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
               )}
               label="Profile"
               onPress={() => {props.navigation.navigate("Profile")}} 
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
               icon={({color,size}) => (
                <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
               )}
               label="Logout"
               onPress={() => logout()} 
          />
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
