import React from 'react';
import { StyleSheet,Text,TouchableOpacity, View ,Image, TextInput, Alert} from 'react-native';
import Button from 'react-native-button';
// import { NavLink } from "react-router-dom";
//import logoM from './assets/logoM.png'
import { StatusBar } from 'expo-status-bar';
// import { Actions } from 'react-native-router-flux';
import { useNavigation } from '@react-navigation/native';
export default function Menu ()
{
    const navigation =useNavigation();
  return (

           <View style={styles.cont}>
                         <StatusBar style="auto"/>

                            <View style={styles.logo}>
                                   <Image  style={{backgroundColor:"#ddd" }} source={require('../assets/logoM.png')} />
 
                            </View >
                            <View style={styles.title}>
                              <Text style={{fontSize:30,
                                                color:'white',
                                             fontWeight:'bold',
                                            }} >Menu</Text>
                            </View>
       
                <View style={styles.fulbtn}>
       
                    <View style={styles.btn}>

                            <Button
                                    style={{fontSize: 20,fontWeight: 'bold', color: 'black'}}
                                    styleDisabled={{color: 'black'}}
                                    onPress={()=>{
                                        navigation.navigate('Home')
                                      }}
                                    >
                                    Home
                            </Button>
                    </View>

                    <View style={styles.btn2}>
                            <Button
                                style={{fontSize: 20,fontWeight: 'bold', color: 'black'}}
                                styleDisabled={{color: 'red'}}
                                onPress={()=>{
                                    navigation.navigate('OfficerList')
                                  }}
                                >
                                Officers List 
                            </Button>

                    </View>
       
                    <View style={styles.btn3}>

                            <Button
                                style={{fontSize: 20,fontWeight: 'bold',color: 'black'}}
                                styleDisabled={{color: 'red'}}
                                onPress={()=>{
                                    navigation.navigate('Location')
                                  }}
                                
                                >
                                Location  
                        </Button>
                    </View>

                    <View style={styles.btn4}>

                        <Button
                            style={{fontSize: 20,fontWeight: 'bold', color: 'black'}}
                            styleDisabled={{color: 'red'}}
                            onPress={()=>{
                                navigation.navigate('ContactUs')
                              }}
                            >
                            Contact Us
                        </Button>
                    </View>

                    <View style={styles.btn5}>

                        <Button
                            style={{fontSize: 20,fontWeight: 'bold', color: 'black'}}
                            styleDisabled={{color: '#ddd'}}
                            onPress={()=>{
                                navigation.navigate('AboutUs')
                              }}
                            >
                           About Us
                        </Button>
                    </View>
                     <View style={styles.btn7}>
                        <Button
                            style={{fontSize: 20,fontWeight: 'bold', color: 'black'}}
                            styleDisabled={{color: 'blue'}}
                            onPress={()=>{
                                navigation.navigate('Compliants')
                              }}
                            >
                              Complaints
                        </Button>
                    </View>

                    <Text style={{
                        fontSize: 20,
                        marginLeft:124,
                        marginBottom:-50,
                        fontWeight: 'bold', 
                        color: 'black'}} >
                            خدمت،تحفظ،احساس
                    </Text>

                </View>



          </View>
    )
}




    const styles = StyleSheet.create({

        logo:{
            flex:1,
            marginTop:50,
            paddingLeft:105,
            width:20,
            height:20,
            
        },

        title:{
    
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            textAlign:'center',
            
          borderRadius:14,
            width:390,
            height:35,
          // marginTop:-20,
          marginBottom:-140,
            backgroundColor: 'red',
        },
        foot:{
        marginBottom:10,
         fontSize:24,

         height:30,

        backgroundColor:'red',
        alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            
        },
        btn:{
            backgroundColor:"#ddd",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOpacity: 1000,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},

            //backgroundColor:'white',
            
            //color:"#FFFFFF",
           // paddingTop:0,
            //paddingLeft:10,
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            width:130,
            height:130,
            // borderTopColor:'blue',
            borderRadius:20,
            // shadowColor:'black',
             marginTop:200,
             marginLeft:50, 
        },
       
        btn2:{
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius:20,
            backgroundColor:'white',
            width:130,
            height:130,
            marginTop:-130,
            marginLeft:210, 
            //textShadowColor:"yellow",
            backgroundColor:"#ddd",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOpacity: 1000,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},
            
        },
        btn3:{
            backgroundColor:"#ddd",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOpacity: 1000,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius:20,
           // backgroundColor:'white',
            width:130,
            height:130,
            marginTop:40,
            marginLeft:50, 
            
        },
        btn4:{
            backgroundColor:"#ddd",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOpacity: 1000,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius:20,
           // backgroundColor:'white',
            width:130,
            height:130,
            marginTop:40,
            marginLeft:50, 
            
        },
        btn5:{
            backgroundColor:'#ddd',
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOpacity: 1000,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},
            //backgroundColor:'blue',
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius:20,
           // backgroundColor:'white',
            width:130,
            height:130,
            marginTop:-300,
            marginLeft:210, 
            
        },
        btn6:{
            backgroundColor:"#ddd",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOpacity: 1000,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            borderRadius:20,
           // backgroundColor:'white',
            width:130,
            height:130,
            marginTop:-470,
            marginLeft:210, 
            //textShadowColor:"yellow",
        },

        btn7:{
            backgroundColor:"#ddd",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOpacity: 1000,
            elevation: 6,
            shadowRadius: 15 ,
            shadowOffset : { width: 1, height: 13},
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            width:130,
            height:130,
            marginLeft:210, 
           // backgroundColor:'white',
            borderRadius:20,
            marginTop:40,
        },
        cont:{
            flex:1,
            backgroundColor:"white",
            //paddingTop:50,
            paddingLeft:13
        },
        fulbtn:{
            paddingTop:5,
            paddingBottom:100
        }

        });
