import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native'
import { Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
const {height,width} = Dimensions.get("screen")
const Createevent = ({navigation,route}) => {
    const [eventInfo, seteventInfo] = useState({})
    const [Info,setInfo]=useState({})
    // console.log(ev)
    // var mytexttoEncryption = "kunj"
    // const encrypted = CryptoES.AES.encrypt(mytexttoEncryption ,'eventInfo').toString();
    // console.log(encrypted)
    // var Decrypted = CryptoES.AES.decrypt(encrypted, 'eventInfo');
    // var result =Decrypted.toString(CryptoES.enc.Utf8);
    // console.log(result)
    const sport=[
        {
            title:'Sport Name',placeholder:'Enter your sport name',label:"SportName"
        },
        {
            title:'Envent Title',placeholder:'Enter your event name',label:"EventTitle"
        },
        {
            title:'Event Date',placeholder:'DD/MM/YYYY',label:"EventDate"
        },
        {
            title:'Event Time',placeholder:'HH:MM',label:'EventTime'
        },
        {
            title:'Loaction',placeholder:'Enter your Location',label:'Loaction'
        },
        {
            title:'Age',placeholder:'Enter your age',label:'Age', keyboardType:'yes'
        },
        {
            title:'gender', placeholder:"m/f",label:"gender"
        },

    ]

    let details = [];
    
     
  return (
    <SafeAreaView style={{backgroundColor:'#A187EA'}}>
        <StatusBar barStyle="#A187EA"> </StatusBar>
      

    <LinearGradient colors={['#A187EA','#dddd']} style={{height:height}}>
    {/* <ImageBackground source={require('../assets/rakesh.png')} style={{height:300,width:300}}/> */}
    <View style={{marginTop:50,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30}}>Create Event</Text>
    </View>
    <FlatList
    data={sport} 
    renderItem={({item})=>(
        <View style={{width:240,alignItems:'center',justifyContent:'center',marginTop:20}}>
        <Text style={{fontSize:22,width:'100%',left:60}}>
            {item.title}
        </Text>
        <TextInput placeholder={item.placeholder} style={{backgroundColor:'white',marginTop:7,width:325,left:90,height:40,borderRadius:30,paddingLeft:10}} onChangeText={text=>seteventInfo({...eventInfo,[item.label]:text})} keyboardType={item.keyboardType?"numeric":"default"} >  
        </TextInput>
    </View>
    ) 
}/>
  <TouchableOpacity style={{marginLeft:105,width:width*.9,backgroundColor:'#8787E4',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:30,marginBottom:15}} onPress={()=>
  
  {
   
    navigation.navigate("Createevent1",
  {
    
    eventInfo:{...eventInfo}
  
  })}}>
        <Text style={{fontSize:35}}>
          Next
        </Text>
      </TouchableOpacity>
    
    
    </LinearGradient>
        
    </SafeAreaView>
  )
}

export default Createevent