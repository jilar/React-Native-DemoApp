import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageComponent = (props) =>{
  return(
    <View>
      <Image source={props.imageSrc}/>
      <Text>{props.title}</Text>
      <Text>Image Score - {props.imageScore}</Text>
    </View>
  );
}

export default ImageComponent;
