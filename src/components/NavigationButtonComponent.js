import React from 'react';
import {Button} from 'react-native';

const NavigationButtonComponent= ({title, pageName, navigation}) =>{
  return(
    <Button
      title={title}
      onPress={()=>navigation.navigate(pageName)}
    />
  );
}

export default NavigationButtonComponent;
