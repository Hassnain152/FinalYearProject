import React ,{useState} from 'react';
//import Header from '@mindinventory/rn-top-navbar';
import { FlatList,SafeAreaView, TouchableOpacity ,StyleSheet,TouchableWithoutFeedback,Keyboard,Text,TextInput, View,Button,Image,Dimensions, KeyboardAvoidingView, } from 'react-native';
 //import Icon from 'react-native-vector-icons';
//import { Input } from 'react-native-elements';
// import { AntDesign } from '@expo/vector-icons';
// import { Foundation } from '@expo/vector-icons';
//import { Formik } from 'formik';
import ModalDropdown from 'react-native-modal-dropdown';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function Officerlogin (){
    const navigation =useNavigation();
    return (
        // <StatusBar style="auto"/>
        
        <View   style={styles.m1} >
    <TouchableWithoutFeedback  onPress={()=>{
            Keyboard.dismiss();
          }}>
        <View style={styles.cont}>

            <StatusBar style="auto"/>

           <Image style={styles.img}   source={require('../assets/color-updateed.png')} />
            {/* <View  >
            <AntDesign style={styles.icon1} name="user" size={24} color="#36298e" />
            </View> */}
             <Text style={{fontSize:30,textAlign:'center',marginBottom:20,color:'red',fontWeight:'bold'}}>Officer Login</Text>

          <View style={styles.mainview}>
             <TextInput
            style={styles.input1}
           label="Email"
           placeholder=" 👤Enter Phone Number"
           returnKeyType="next"
           onChangeText={(text)=>setinput(text)}
           //value={email.value}
           //onChangeText={(text) => setEmail({ value: text, error: '' })}
           // error={!!email.error}
           //errorText={email.error}
           autoCapitalize="none"
           autoCompleteType="email"
           textContentType="number"
           keyboardType="email-address"
             />
          </View>

                         {/* <View  >
                         <Foundation style={styles.icon1} name="key" size={24} color="#36298e" />
                         </View> */}
                         
               <View>
                   <KeyboardAvoidingView enabled>
                   <TextInput 
                         style={styles.input2}
                         label="Password"
                         returnKeyType="done"
                         onChangeText={(text)=>setinput(text)}
                         placeholder=" 🔑Enter Password"
                         //value={password.value}
                         //onChangeText={(text) => setPassword({ value: text, error: '' })}
                         // error={!!password.error}
                         //errorText={password.error}
                       secureTextEntry
                    />
                    </KeyboardAvoidingView>
               </View >
               <View style={styles.buttonStyle}> 
                 <TouchableOpacity
                       onPress={()=>{
                        navigation.navigate('Officermenu')
                      }}     
                            
                    activeOpacity={0.5}
                    
               >
                        <Text style={styles.buttonText}>Login</Text>
                        
                 </TouchableOpacity>
                 </View>
        </View>
    </TouchableWithoutFeedback>
   
    </View>
        )}
const styles = StyleSheet.create({
    cont:{
    //backgroundColor:'white'
    },
   
    input1: {
        borderWidth: 3,
        borderColor:'#36298e',
        borderRadius:15,
        height: 50,
        width:300,
        alignItems: 'flex-end',
        marginBottom: 24,
        marginHorizontal:60,
        //flex:1,
        //flexDirection:'row',
        //justifyContent:'center',
        //alignItems:'center',
      },
      input2: {
        height: 50,
        width:300,
        borderWidth: 3,
        borderColor:'#36298e',
        borderRadius:15,
        flexDirection: 'row',
        marginTop: 4,
        marginHorizontal:60,
      },
      img:{
        alignContent:'center',
        alignItems: 'center',
        justifyContent: "center",
        marginVertical:100,
        marginHorizontal:80,
      },
      icon1:{
          paddingLeft:65,
          
      },
      buttonStyle: {
        textAlign:'center',
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor:'red',
        paddingTop:7,
        color: 'white',
     // borderColor: '#7DE24E',
        height: 50,
        width:150,
        alignItems: 'center',
        borderRadius: 15,
        marginTop:50,
        //marginVertical:30,
        marginLeft: 140,
        //paddingBottom:5,
        //marginTop: 20,
        //marginBottom: 20,
      },   
      buttonText:{
          fontSize:25,
          color:'white',
          textAlign:'center',
          paddingTop:-10
      } ,  
      m1:{
          backgroundColor:'white',
          width:'100%',
          height:'100%',
      }
      
})