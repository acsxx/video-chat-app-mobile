import  React,{useEffect, useState, useCallback} from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useAuth} from "../contexts/AuthContext"
import { GiftedChat,Send, Bubble } from 'react-native-gifted-chat'
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Chat() {
  
  const {currentUser, logout, name} = useAuth();
  const [messages, setMessages] = useState([]);
  var msg = currentUser.displayName + ", Welcome to chat !"
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: msg,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    console.log(messages[0].text)
  }, [])

  const renderBubble = (props) =>{
    return(
      <Bubble 
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#126e82"
          }
        }}
        textStyle={{
          right: {
            color: "#fff"
          }
        }}
      >
        <View>
        <MaterialCommunityIcons name="send-circle" style={{marginBottom:10, marginRight:10}} color={"#126e82"} size={26} />
        </View>
      </Bubble>
    )
  }

  const renderSend = (props) =>{
    return(
      <Send {...props}>
        <View>
        <MaterialCommunityIcons name="send-circle" style={{marginBottom:10, marginRight:10}} color={"#126e82"} size={26} />
        </View>
      </Send>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        alwaysShowSend
        scrollToBottom
      />
  </TouchableWithoutFeedback>
  );
}