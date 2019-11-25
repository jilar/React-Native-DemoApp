import React, {useReducer} from 'react'
import{Text,Button, View,StyleSheet} from 'react-native'

const reducer = (state, action)=>{
  switch(action.type){
    case"INCREASE_DECREASE":
      return {...state, counter:state.counter+action.payload}
    default:
      return state;
  }
}

const CounterScreen =()=>{
  const [state, dispatch]= useReducer(reducer,{counter:0})
  return(
    <View>
      <Button
        title ='Increase'
        onPress={()=>{
          dispatch({type:"INCREASE_DECREASE", payload:1});
        }}
      />
      <Button
        title ='Decrease'
        onPress={()=>{
          dispatch({type:"INCREASE_DECREASE", payload:-1});
        }}
      />
      <Text>Counter: {state.counter}</Text>
    </View>
  );
}

//class component example
// class CounterScreen extends React.Component{
//   state={counter: 0}
//   render(){
//     return(
//       <View>
//         <Button
//           title ='Increase'
//           onPress={()=>{
//             this.setState({counter: this.state.counter +1});
//           }}
//         />
//         <Button
//           title ='Decrease'
//           onPress={()=>{
//           this.setState({counter: this.state.counter -1});
//           }}
//         />
//         <Text>Counter: {this.state.counter}</Text>
//       </View>
//     )
//   };
//}

const styles = StyleSheet.create({});

export default CounterScreen;
