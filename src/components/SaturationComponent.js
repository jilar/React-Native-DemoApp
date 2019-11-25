import React, {useState} from 'react';
import {Text,View,Button} from 'react-native'

const SaturationComponent= ({color, onIncrease,onDecrease})=>{
  return(
    <View>
      <Text>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={()=>onIncrease()}
      />
      <Button
        title={`Less ${color}`}
        onPress={()=>onDecrease()}
      />
    </View>
  );
};

export default SaturationComponent;
