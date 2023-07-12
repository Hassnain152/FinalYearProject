import React from 'react';
import { StyleSheet,SafeAreaView,FlatList,Text,TouchableOpacity,ScrollView, View ,Image, TextInput} from 'react-native';
import Button from 'react-native-button';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons'; 
//import logoM from './assets/logoM.png'
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 

export default function AboutUs (){
      return (
        <View>
        <ScrollView>
          <StatusBar style="auto"/>
        <View style={styles.container}>
  <View style={styles.img}>
        <Image source={require('../assets/pp.jpg')} />


</View> 
   <Text style={styles.txt} > ABOUT US</Text>

   <Text style={styles.txt1}>
   <Text style={{fontWeight: "bold" , color:'black'}}>Police Supervising, Controlling,
    and Tracking System (PSCTS)</Text> is Based on Web/Application development and machine learning, 
   in which we are developing a system that is of this smart generation and using the technology 
   to make the police quicker, responsive, and more efficient. 
   The Control system of police is still classic radio-based.
    Secondly, The data collected from the crime reports are just maintained records over years and not 
    used to analyze the crime rate. The crime reporting cycle is time taking which has imposed a bad 
    impression for police but now with the application system,
    we will be directly connecting the reporter to the nearest patrolling officer. 
    Then the data collected will be analyzed for crime prediction and prevention.
   </Text>
   <Text style={{fontWeight: "bold" , color:'black',fontSize:15,marginTop:15}}>What do You Feel With Us  </Text>
   <View style={styles.blt}>
      <FlatList
        data={[
          {key: '• Safe'},
          {key: '• Secure'},
          {key: '• A safe citizen'},
          {key: '• Public Friendly'},
          {key: '• Courage'},
          {key: '• Commitment'},
          {key: '• Devotion'},
          {key: '• Patriotism'},
          {key: '• Pride  Service'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    <View style={styles.phoneicon}>
    <FontAwesome name="phone-square" size={24} color="#808080" />
    </View>
     <Text style={styles.footer}> Contact Us At  <Text style={{fontWeight: "bold" , color:'#808080'}}> |</Text> Also search Us on <Foundation name="web" size={24} color="#808080" /> </Text>
      

      <View>

        <Text style={styles.numsite}>15                        www.pscts.com</Text>
      </View>

        </View>
        </ScrollView>
        </View>
       


    )}

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'white'
        },

  img:{
    alignContent:'center',
    alignItems: 'center',
    justifyContent: "center",
    //width:0,
    height:180,
    padding:5,
    marginTop:70, backgroundColor:'red'
  },
  txt:{
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
    backgroundColor:'red',
    marginTop:20,
    color:'white'

},
txt1:{
    flex:1,
    color: '#808080',
    marginTop:60,
    //marginLeft:40,
    textAlign:'auto',
    //textAlign:'right',
    //justifyContent: "center",
    
},
item:{
    marginTop:15,
    color: '#808080',
    fontSize:17
},
footer:{
   marginTop:-25,
 marginLeft:85,
 fontSize:17,
 color: '#808080',

},
phoneicon:{
  marginTop:25,
  marginLeft:66,
},
numsite:{
  marginTop:10,
marginLeft:130,
color: '#808080',
},



    })