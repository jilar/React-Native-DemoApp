import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const BoxScreen=()=>{
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection:'row',
    height:200,
    flex:1
  },
  textOneStyle:{
    borderWidth:3,
    borderColor: 'red',
    height:100,
    flex:1
  },
  textTwoStyle:{
    borderWidth:3,
    borderColor: 'green',
    height:100,
    top: 100,
    flex:1

  },
  textThreeStyle:{
    borderWidth:3,
    borderColor: 'purple',
    height:100,
    flex:1
  }
});

export default BoxScreen;
