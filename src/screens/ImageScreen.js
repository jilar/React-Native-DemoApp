import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import ImageComponent from '../components/ImageComponent';

const ImageScreen= ()=>{
  const images=[
    {title: 'Forest', imageSrc:require("../../assets/images/forest.jpg"), imageScore:10},
    {title: 'Beach', imageSrc:require("../../assets/images/beach.jpg"), imageScore:7},
    {title: 'Mountain', imageSrc:require("../../assets/images/mountain.jpg"), imageScore:5}
  ];

  return (
    <FlatList
      data={images}
      keyExtractor={item =>item.title}
      renderItem={({item})=>{
        return <ImageComponent title={item.title} imageSrc={item.imageSrc} imageScore={item.imageScore}/>
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle:{

  }
});

export default ImageScreen;
