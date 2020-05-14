/*Example to get only numeric value from TextInput in React Native*/
import React, { Component } from 'react';
//import react in our project
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
//import all the components we will need
import {
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
export default class App extends Component {

 
   state = {
      Height: '',
      Weight: ''
   }
handleHeight = (numeric) => {
      this.setState({ Height: numeric })
      }

      handleWeight = (numeric) => {
      this.setState({ Weight: numeric })
      }
result = (weight,height) => {
      alert(weight / (height * height))
   }

   
  render() {
    return (

      
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          flex: 1,
        }}>
        <TextInput
          style={{
            width:250,
      
          }}
          placeholder="BMI Metric calculator  (M,Kg)"
          
        />
        <TextInput
          style={{
            width:250,
            backgroundColor: '#dde8c9',
            padding:16,
          }}
          placeholder="Height"
          placeholderTextColor="#60605e"
          numeric value
          keyboardType={'numeric'}
           onChangeText = {this.handleHeight}
        />

        <TextInput
          style={{
            width:250,
            backgroundColor: '#dde8c9',
            padding:16,
          }}
          placeholder="Weight"
          placeholderTextColor="#60605e"
          numeric value
          keyboardType={'numeric'}
           onChangeText = {this.handleWeight}
        />

         <TouchableOpacity
          title="Press me"
           style = {styles.submitButton}
           onPress = {
                  () => this.result(this.state.Weight , this.state.Height)
               }>
                <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})