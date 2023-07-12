import React from 'react';
import { StyleSheet,Text, View ,Image,SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
//import asdf from './assets/geo.jpg' ;
import Button from 'react-native-button';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import Gh from './Gh';


export default function Login (){
  const navigation =useNavigation();
    return (
    
      
       
        <View style={styles.container}>
      
        <StatusBar style="auto"/>
 
        <Text style={styles.co}>Punjab   Police {"\n"}
        خدمت،تحفظ،احساس
        </Text>
        
        
        
        <View style={styles.logo}>
          
           <Image source={require('../assets/logoed.png')} />
  
        </View>

        <View style={{position:'absolute',bottom:170,}}>
             <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('Officerlogin')
         
        }}
        
        >
        
          
          <Image source={require('../assets/off.png')} />
          <Text style={{fontWeight:'bold',color:'blue',fontSize:20}}>Officer Login Here</Text>
         
              </TouchableOpacity>
              
              </View>

        <View style={styles.btn} >
        
        <Button
          style={{fontSize: 20, color: 'white'}}
          styleDisabled={{color: 'red'}}
         onPress={()=>{
           navigation.navigate('LoginUser')
          
         }}
          >
          Login
        </Button>
                </View>
  
          <View style={styles.btn2} >
          <Button
          style={{fontSize: 20, color: 'white'}}
          styleDisabled={{color: 'red'}}
          onPress={()=>{
            navigation.navigate('Register')
          }}
         
          >
          SignUp
        </Button>
       
          </View>

         
          
      </View>
      

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
      
      
    },
   
    off:{
      
    },
    co:{
      marginLeft:35,
      
      alignItems: 'center',
      marginBottom:609,
      fontSize:40,
      color:'red',
      fontWeight:'bold',
    },
    logo: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: 'transparent',
      alignItems: 'center',
      width:20,
      height:20,
      position:'absolute',
      paddingBottom:140,
    },
  
    
  
    btn:{
      backgroundColor:'red',
      
      color:"#FFFFFF",
      //paddingTop:10,
      //paddingLeft:10,
      alignContent:'center',
      alignItems: 'center',
      justifyContent: "center",
      width:160,
      height:50,
      borderTopColor:'blue',
      borderRadius:20,
      shadowColor:'black',
      marginTop:10,
      marginLeft:-190,
  },
  btn2:{
    alignContent:'center',
    paddingTop:12,  
    backgroundColor:'red',
    width:160,
    height:50,
    borderRadius:20,
    marginTop:-50,
    marginLeft:230,
  },
  animate:{
    backgroundColor:'red',
    marginTop:-15
  }
    
  });

  // export default Login;
