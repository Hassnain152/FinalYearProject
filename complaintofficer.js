import React,{useEffect,useState} from 'react';
import { StyleSheet,Text, SafeAreaView,View ,Image, TextInput, Touchableopacity, ScrollView} from 'react-native';
//import asdf from './assets/geo.jpg' ;
import Button from 'react-native-button';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import Gh from './Gh';



export default function complaintofficer (){
  const [complain, setcomplain] = useState([])
  useEffect(()=>{
    async function getComplain(){
      let response=await fetch('http://715b-39-41-96-218.ngrok.io/api3/')
      let data=await response.json()
      console.log(data)
      setcomplain(data)
      //console.log('asdsadsad',complain)
    }
    getComplain()
  },[])
  
  const navigation =useNavigation();
    return (
      <ScrollView style={styles.cont}>
        <View style={styles.txt}>

        {
          complain.map((comp,i)=>{
            return (<>
            <View style={{borderColor:'black',borderWidth:2,marginTop:10,alignItems:'center'}}>
            <Text>Address:{comp.caddress} {'\n'} </Text>
            <Text>Contact:{comp.ccontact} {'\n'}</Text>
            <Text>Discription:{comp.cdiscription} {'\n'}</Text>
            <Text>Crime-type:{comp.ctype} {'\n'}</Text>
            </View>
            </>)
          })
        }
        </View>
        </ScrollView>
    )}

    const styles = StyleSheet.create({
      txt:{
          backgroundColor:"#ddd",
          textAlign:'center',
         
          marginVertical:40
         
      },
      cont:{
        backgroundColor:'white'
      }
    })