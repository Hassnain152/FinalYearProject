import React, { useState, useEffect } from 'react';
//import Header from '@mindinventory/rn-top-navbar';
import { FlatList,SafeAreaView,Linking,StyleSheet,Text, View ,Image,Dimensions, TextInput, ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import Button from 'react-native-button';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const image=[
  "https://cdn.pixabay.com/photo/2017/08/06/11/44/people-2591692_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/06/09/20/19/police-3465073_1280.jpg",
   "https://cdn.pixabay.com/photo/2017/02/19/23/10/finger-2081169__340.jpg",
   "https://cdn.pixabay.com/photo/2016/07/20/20/51/car-1531273_1280.jpg"
]
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
export default function Home (){
 const [imgActive,setImgActive]=useState(0);
const  onChange=(nativeEvent)=>{
if(nativeEvent){
  const slide=Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
  if(slide!=imgActive){
    setImgActive(slide);
  }
}
 }
    return (
        <SafeAreaView>
          <ScrollView>
          <View style={styles.wrap}>
            <ScrollView 
            onScroll={({nativeEvent}) =>onChange(nativeEvent)} 
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
               {
                 image.map((e,index)=>
                 <Image
                 key={e}
                 resizeMode='stretch'
                 style={styles.wrap}
                 source={{uri:e}}
                 />
                 )
            
               }
            </ScrollView>
            <View style={styles.wrapdot}>
            
            {
              image.map((e,index)=>
              <Text key={e}
              style={imgActive==index ? styles.dotActive:styles.dot}
              >
                ● 
              </Text>
              )
            }
            </View>

          </View>
          <StatusBar style="auto"/>
        <View style={styles.headerContainer}>
          
        </View>
        <View style={Home}>
      <View style={{ backgroundColor: 'red', height: 160 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 130 }}
        >
            <Text style={styles.headerText}>PUNJAB POLICE</Text>
          <Path
            fill="red"
            d="M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
    
    <Text  style={styles.txt}> <AntDesign style={styles.icon} name="caretright" size={24} color="#808080"   />
    Mission Statment</Text>

    <Text style={styles.txt1}>
    To serve community by protecting life and property of people and by upholding Rule of Law.
</Text>
   <Text  style={styles.txt2}> <AntDesign style={styles.icon} name="caretright" size={24} color="#808080"   /> Core Values</Text>
<View style={styles.bullets}>
      <FlatList
        data={[
          {key: '• Service Orientation'},
          {key: '• Professionalism'},
          {key: '• Integrity'},
          {key: '• Public Friendly'},
          {key: '• Accountability'},
          {key: '• Commitment'},
          {key: '• Devotionn'},
          {key: '• Patriotism'},
          {key: '• Up To Dated'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    <View style={styles.twicaon}>
    <Entypo  name="twitter-with-circle" size={24} color="red" onPress={()=> Linking.openURL('https://twitter.com/officialdprpp?s=11')}    />
    </View>

    <View style={styles.fbicaon}>
    <Entypo name="facebook-with-circle" size={24} color="blue"  onPress={ ()=> Linking.openURL('https://www.facebook.com/groups/852430224854157') }  />
    </View >

    <Text style={styles.footertxt}>Lagel     |   Privacy     |   ©️CopyRight  </Text>
     </ScrollView>
     </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    footertxt:{
      alignContent:'center',
      alignItems: 'center',
      justifyContent: "center",
      marginLeft:85,
      marginTop:10
    },
    fbicaon:{
      marginTop:-25,
      marginLeft:160,
      width:25,
    
     
    },
    twicaon:{
     marginTop:60,
      marginLeft:200

    },
    
    headerContainer: {
      marginTop: 0,
      marginHorizontal: 10
    },
    txt:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#808080',
      marginTop:75,
      marginLeft:-4,
    },
    txt1:{
      fontSize: 20,
      marginTop:7,
      textAlign:'justify',
      //borderWidth: 1,
      marginLeft:18,
      color: '#808080',
      alignContent:'center',
      alignItems: 'center',
      justifyContent: "center",
      
    },
    txt2:{
      fontWeight: 'bold',
      fontSize: 30,
      color: '#808080',
      marginTop:25,
      marginLeft:-4,
    },
    item:{
      fontSize: 20,
      color: '#808080',
      marginLeft:18,
      marginTop:9,
    },
    icon:{
     // marginTop:40
     marginLeft:9,
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginTop: -50,
      // alignContent:'center',
      // alignItems: 'center',
      // justifyContent: "center",
    },
    wrap:{
      width:WIDTH,
      height:HEIGHT*0.25,
      borderRadius:30,
      borderColor:"black",
      borderWidth:1
    },
    wrapdot:{
      position:'absolute',
      bottom:0,
      flexDirection:'row',
      alignSelf:'center'

    },
    dotActive:{
      margin:3,
      color:'black'
    },
    dot:{
      margin:3,
      color:"white"
    }
  });