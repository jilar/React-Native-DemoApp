import React from 'react'
import {Text, StyleSheet,View} from 'react-native';

const ComponentsScreen = () =>{
  const name='geeba';
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native!</Text>
      <Text style={styles.gooba}>My name is {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  gooba:{
    fontSize: 20
  }
});

export default ComponentsScreen;
