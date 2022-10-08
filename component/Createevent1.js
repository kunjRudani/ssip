import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import {uid} from "uid"
import { auth, store } from '../firebase';
import {BottomSheet} from 'react-native-btr';
import { Ionicons } from '@expo/vector-icons';
export default function Createevent1({navigation,route}) {
    // console.log(route.params.Name)
    const [event, setevent] = useState({...route.params.eventInfo})
    const Tdata=route.params.eventInfo.EventDate.split("/")
    const [visible, setVisible] = useState(false);
    const CompleteEvent=()=>{
        const id=uid(16)
        setDoc(doc(store,'Admin',auth.currentUser.email,'Event',id),
        {
           ... event,
            compDate:`${Tdata[1]}/${Tdata[0]}/${Tdata[2]}`
        })
        setDoc(doc(store,"Event",id),
        {
            ... event,
             compDate:`${Tdata[1]}/${Tdata[0]}/${Tdata[2]}`
         })


    }
    const {height,width} = Dimensions.get("screen")
    const eventfees = [
        { 
            title:'Event Fees', placeholder:'Enter event Fees',label:"EventFees"
        },
        { 
            title:'Winner Price', placeholder:'Enter Winner Price',label:'WinnerPrice'
        },
        { 
            title:'Number of Team Members', placeholder:'Enter number of Player',label:'NumberofTeamMembers'
        },
        { 
            title:'Number of Sub', placeholder:'Enter number of substitutes',label:'NumberofSub'
        },
        { 
            title:'Discription', placeholder:'Write a discription',label:'Discription',keyboardType:"yes"
        },
    ]
    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };
  return (
    <SafeAreaView style={{flex:1,height:"100%"}}>


        <LinearGradient colors={['#A187EA','#DDDDDE']} style={{height:height}}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
            <Text style={{fontSize:20}}>Create Event</Text>
        </View>
        <FlatList  style={{marginTop:60}}
        data={eventfees}
        renderItem={({item})=>(
        <View style={{marginTop:10}}>
            <Text style={{fontSize:20,left:60}}>{item.title}</Text>
            <TextInput placeholder={item.placeholder} style={{backgroundColor:'white',marginTop:7,left:55,width:305,height:item.title==="Discription"?150:40,borderRadius:30,paddingLeft:10}} onChangeText={text=>setevent({...event,[item.label]:text})} keyboardType={item.keyboardType?"default":"numeric"}  ></TextInput>
        </View>
        )}      
        />
        <View style={{flex:1}}>

        <TouchableOpacity style={{marginLeft:105,height:50,width:width*0.9,backgroundColor:'#9298D2',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:30,borderColor:'black',borderWidth:2}}
         onPress={()=> {CompleteEvent(),
            setVisible(true)
        }}

        >
        <Text style={{fontSize:25}}>
          Complete
        </Text>
      </TouchableOpacity>
    
        </View>
        <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          
            <LinearGradient colors={['#dddd','#F4CF4C']} style={{
             backgroundColor: '#fff',
             width: '100%',
             height: height*.46,
             borderTopLeftRadius:50,
             borderTopRightRadius:50,
             borderTopEndRadius:50,
             justifyContent: 'center',
             alignItems: 'center',
            }} >
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                
              }}>
              
              <View style={{  marginTop:20,alignItems:'center' }}>
                
              <View  style={{height:90,width:90,backgroundColor:'green',justifyContent:'center',alignItems:'center', borderRadius:50 ,elevation:20, position:'absolute'}}>
              
              <Ionicons name="checkmark-done" size={60} color="black" />  
             </View> 
             
        
          
                <View style={{marginTop:120}}>
                    <Text style={{fontSize:32,textAlign:'center',width:width*.8}}> your event is successfully created</Text>
                </View>
              <View style={{marginTop:60}}>
                <Text 
                 onPress={()=> navigation.navigate("Home")}
                style={{fontSize:20, textDecorationLine:"underline"}}>
                    Home
                </Text>
              </View>


             </View>
               
            </View>
            </LinearGradient>
        </BottomSheet>
        </LinearGradient>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})