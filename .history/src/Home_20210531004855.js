import { View, Text, StyleSheet } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = () =>  {
    return (
      <View style={style.body}>
        <Text>Home Screen</Text>
      </View>
    );
}

const style = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: "#d8e3e7",
  }
})

export default HomeScreen