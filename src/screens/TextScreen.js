import React, {useState} from 'react';
import {View, Text,TextInput,StyleSheet} from 'react-native';

const TextScreen =()=>{
  const [input, setInput]= useState("");
  return (
    <View>
      <Text>What's your name?</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={input}
        onChangeText={(newValue)=>setInput(newValue)}>
      </TextInput>
      {input.length <2  ? <Text>Your name isn't that short!</Text> : null}
      <Text>Hi, {input}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin:15,
    borderColor:'black',
    borderWidth:1
  }
});

export default TextScreen;
