import React, {useState} from 'react';
import {View,Button,StyleSheet,FlatList} from 'react-native'

const ColorScreen=()=>{
  const [colorList, setColorList] = useState([]);

  return (
    <View>
    <Button
      title='Add Color'
      onPress={()=>{
        setColorList([...colorList,randomRgb()]);
      }}
    />
    <FlatList
      data={colorList}
      keyExtractor={(item)=>item}
      renderItem={({item}) =>{
        return <View style={{height:100,width:100, backgroundColor:item}}></View>
      }}
    />
    </View>
  );
};

const randomRgb = () =>{
  const red =Math.floor(Math.random() * 256);
  const blue=Math.floor(Math.random() * 256);
  const green=Math.floor(Math.random() * 256);

  return `rgb(${red},${blue},${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
