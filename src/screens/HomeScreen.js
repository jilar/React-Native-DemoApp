import React from 'react';
import { Text, StyleSheet, View,Button } from 'react-native';
import NavigationButtonComponent from '../components/NavigationButtonComponent';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>This is the HomeScreen</Text>
      <NavigationButtonComponent title='Go to Components Demo' pageName= 'Components' navigation={navigation}/>
      <NavigationButtonComponent title='Go to List Demo' pageName= 'Lists' navigation={navigation}/>
      <NavigationButtonComponent title='Go to Image Demo' pageName= 'Image' navigation={navigation}/>
      <NavigationButtonComponent title='Go to Counter Demo' pageName= 'Counter' navigation={navigation}/>
      <NavigationButtonComponent title='Go to Color Demo' pageName= 'Color' navigation={navigation}/>
      <NavigationButtonComponent title='Go to Color Demo 2' pageName= 'Color2' navigation={navigation}/>
      <NavigationButtonComponent title='Go to Input Demo' pageName= 'Input' navigation={navigation}/>
      <NavigationButtonComponent title='Go to Box Object Model Demo' pageName= 'Box' navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
