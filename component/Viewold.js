import { StyleSheet, Text, View , Dimensions, FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
const {height,width}=Dimensions.get("screen")
import Analysis from './Analysis';
import { collection, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import { auth, store } from '../firebase'
import { StatusBar } from 'expo-status-bar';
const Viewold = ({navigation,route}) => {
    const datas = {
        Badminton: "🏸",
        Baseball: "⚾️",
        Basketball: "🏀",
        Climbing: " 🧗",
        Cricket: "🏏",
        Bodyweighttraining: "💪",
        Cycling: "🚴",
        Darts: "🎯",
        Football: "⚽️",
        Hiking: "🌲",
        Rugby: "🏉",
        Running: "🏃",
        Skateboarding: "🛹",
        Skiing: "🎿",
        Snowboarding: "🏂",
        Spikeball: "🟡",
        TableTennis: "🏓",
        Tennis: "🎾",
        Volleyball: "🏐",
        Yoga: "🧘",
      }
      const [Event,setEvent]=useState([])
    // console.log(route.params.event)
    useEffect(()=>{
 if(auth.currentUser.email){
  alert(auth.currentUser.email)
      const eventRef=collection(store,"Admin",auth.currentUser.email,"Event")
        onSnapshot(eventRef,(snapshot)=>{
          const data=[]
          snapshot.forEach((doc)=>{
            data.push(doc.data())
            console.log(new Date(doc.data().compDate)<new Date(`${new Date().getMonth()+1}/${new Date().getDate()+1}/${new Date().getUTCFullYear()}`))
          })
          setEvent([...data])
        })
        
      }
    },[auth.currentUser.email])
       
  return (
    <SafeAreaView  style={{backgroundColor:'#A187EA'}}>
        <LinearGradient colors={["#A187EA",'#dddd']}  style={{ height:height}}>
        <StatusBar barStyle="#A187EA"> </StatusBar>
            <View style={{alignItems:'center',justifyContent:"center", height:height*.18}}>
                <Text style={{fontSize:22}}> All Older Event</Text>
            </View>
            <FlatList
            data={Event.filter(data=>(new Date(data.compDate)<new Date(`${new Date().getMonth()+1}/${new Date().getDate()+1}/${new Date().getUTCFullYear()}`)))}
            renderItem={({item})=>(
                <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{
                   navigation.navigate('Analysis')
                }} style={{width:'70%',marginTop:20,borderRadius:20,height:120,flexDirection:'row',backgroundColor:'#D9D9D9',}}  >
                  <View style={{alignItems:'center',justifyContent:'center',marginLeft:20}}>
                  <Text style={{fontSize:50,backgroundColor:'#C7D4D4',height:80,textAlign:'center',width:80 ,borderRadius:60}}>{datas[item.SportName]}</Text>
                  </View>
                    <View style={{flex:1,marginLeft:40,alignItems:"center",justifyContent:'center'}}>
                  <Text style={{marginRight:'auto',fontSize:20}}>{item.EventTitle}</Text>
                  <Text style={{marginRight:'auto',marginTop:5}}>4 Team Register</Text>
                  </View>
                </TouchableOpacity>
                </View>
            )}
            />

            
        </LinearGradient>
    </SafeAreaView>
  )
}

export default Viewold

const styles = StyleSheet.create({})