import React, {useReducer} from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import SaturationComponent from '../components/SaturationComponent';

const reducer =(state,action) =>{
  switch (action.colorToChange){
    case 'red':
      return state.red +action.amount < 0 || state.red +action.amount>255
        ? state
        : {...state, red:state.red+action.amount};
    case 'green':
      return state.green +action.amount < 0 || state.green +action.amount>255
        ? state
        : {...state, green:state.green+action.amount};
    case 'blue':
      return state.blue +action.amount < 0 || state.blue +action.amount>255
        ? state
        : {...state, blue:state.blue+action.amount};
    default:
      return state;
  }

}

const ColorScreen2 = () =>{

  const [state,dispatch]= useReducer(reducer, {red:128,blue:128,green:128});

  return(
    <View>
      <SaturationComponent color="Red"
        onIncrease={()=>dispatch({colorToChange:'red', amount: 7})}
        onDecrease={()=>dispatch({colorToChange:'red', amount: -7})}
      />
      <SaturationComponent color="Blue"
        onIncrease={()=>dispatch({colorToChange:'blue', amount: 7})}
        onDecrease={()=>dispatch({colorToChange:'blue', amount: -7})}
      />
      <SaturationComponent color="Green"
        onIncrease={()=>dispatch({colorToChange:'green', amount: 7})}
        onDecrease={()=>dispatch({colorToChange:'green', amount: -7})}
      />
      <View style={{height:600,width:400, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}></View>
    </View>
  );
}

const style=StyleSheet.create({});

export default ColorScreen2;
