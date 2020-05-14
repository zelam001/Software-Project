import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { TextInput } from 'react-native';
import search from './search';
export default class App extends React.Component {
  render() {
    return ( 
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
         <Callout>
    <View style={styles.calloutView} >
      <TextInput style={styles.calloutSearch}
        placeholder={"Search"}
      />
    </View>
  </Callout>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutView: {
  flexDirection: "row",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: 10,
  width: "40%",
  marginLeft: "30%",
  marginRight: "30%",
  marginTop: 20
},
calloutSearch: {
  borderColor: "transparent",
  marginleft: 10,
  width: "90%",
  marginRight: 10,
  height: 40,
  borderWidth: 0.0  }
});
