import React, { useState, useEffect } from 'react';
import { StyleSheet,SafeAreaView,Text, View ,Image, TextInput, ScrollView,Dimensions,Touchableopacity} from 'react-native';
//import asdf from './assets/geo.jpg' ;
import Button from 'react-native-button';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import Gh from './Gh';

const image=[
    "https://cdn.pixabay.com/photo/2017/08/06/11/44/people-2591692_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/06/09/20/19/police-3465073_1280.jpg",
     "https://cdn.pixabay.com/photo/2017/02/19/23/10/finger-2081169__340.jpg",
     "https://cdn.pixabay.com/photo/2016/07/20/20/51/car-1531273_1280.jpg"
  ]
  const WIDTH=Dimensions.get('window').width;
  const HEIGHT=Dimensions.get('window').height;
export default function Officermenu (){
  const navigation =useNavigation();
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
        <View>
        <StatusBar style="auto"/>
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
             <View style={styles.title}>
                              <Text style={{fontSize:30,
                                                color:'white',
                                             fontWeight:'bold',
                                            }} >Officers Menu</Text>
                            </View>
        <View style={styles.btn3}>

                            <Button
                                style={{fontSize: 20,fontWeight: 'bold',color: 'black'}}
                                styleDisabled={{color: 'red'}}
                                onPress={()=>{
                                    navigation.navigate('OfficerSeeLocation')
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
        navigation.navigate('complaintofficer')
      }}
    >
    Complaints
</Button>
</View>
</View>
</SafeAreaView>
    )}

    const styles = StyleSheet.create({
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
        marginTop:170,
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
        marginVertical:-130,
        marginLeft:220, 
        
        
    },
    title:{
    
        alignContent:'center',
        alignItems: 'center',
        justifyContent: "center",
        textAlign:'center',
        
      borderRadius:14,
        width:390,
        height:35,
       marginTop:50,
       marginHorizontal:13,
      //marginBottom:-140,
        backgroundColor: 'red',
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
})