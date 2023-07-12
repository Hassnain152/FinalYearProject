import React, { useState, useEffect } from 'react';
// import MapView, { Polyline,Marker ,Callout} from 'react-native-maps';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import   {Permissions,Location } from 'expo'
import axios from 'axios'
//import Geolocation from '@react-native-community/geolocation';
import MapView, { Polyline,Marker ,Callout} from 'react-native-maps';
import { FloatingAction } from "react-native-floating-action";

// import { PermissironStatus } from 'expo-modules-core';
// import { Component } from 'react/cjs/react.production.min';
import { View,Platform, Text ,StyleSheet,Dimensions, SafeAreaView, Alert} from 'react-native';

import * as Location from 'expo-location';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
 
  const [complain, setcomplain] = useState([]);
  const [lg,setlg]=useState(0);
  const [lng,setlng]=useState(0);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setlg(location.coords.latitude);
      setlng(location.coords.longitude);
      
      //console.log(lng,"dsasadsandhsmfgjasdgfjasdgfjksfkj");
      async function getComplain(){
        let response=await fetch('http://715b-39-41-96-218.ngrok.io/api7/')
        let data=await response.json()
        console.log(data)
        setcomplain(data)
        //console.log('asdsadsad',complain)
      }

 getComplain()

      
    })();
  }, []);

  let tex = 'Waiting..';
  if (errorMsg) {
    tex = errorMsg;
  } else if (location) {
    tex = JSON.stringify(location);
    // console.log(lg,"jadhsfgjadfshjasgdjf");

   
    var data = JSON.stringify({
      "long": lg,
      "lati": lng,

    });
    // console.log(data,"fsdaygsadjgfdsa");

    var config = {
      method: 'post',
      url: 'http://715b-39-41-96-218.ngrok.io/api6/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  
   
   
  }
  const actions = [
    {
      text: "Accessibility",
      icon: require("../assets/logoed.png"),
      name: "bt_accessibility",
      position: 0
    },];
  return (
    <View style={styles.container}>
      {/* <Text style={styles.paragraph}>{tex}</Text> */}
     
      
    <MapView style={styles.map}
    region={{
        latitude:  30.3753,
        longitude: 69.3451,
        
    }}
   provider="google"
  >
    {
      complain.map((comp,i)=>{
        
            return (<>
            
            <Marker coordinate={ { latitude: comp.long,
        longitude: comp.lati,}}/>
        
          
            </>)
          })}
   
      
  </MapView>
  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //padding: 20,
      width:'90%',
      marginLeft:30

    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
      marginTop:200
    },
    map: {
    
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      
  });