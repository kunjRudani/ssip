import { StyleSheet, Text, View ,Dimensions, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import Createevent from './Createevent'
import { auth, store } from '../firebase'
import { LinearGradient } from 'expo-linear-gradient';
import Viewold from './Viewold'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const {height,width}=Dimensions.get("screen")

const Home = ({navigation,route}) => {
  
    const [Event,setEvent]=useState([])
    // console.log(route.params.event)
    useEffect(()=>{
 if(auth.currentUser.email){
  // alert(auth.currentUser.email)
      const eventRef=collection(store,"Admin",auth.currentUser.email,"Event")
        onSnapshot(eventRef,(snapshot)=>{
          const data=[]
          snapshot.forEach((doc)=>{
            data.push({...doc.data(),id:doc.id})
            console.log(new Date(doc.data().compDate)>new Date(`${new Date().getMonth()+1}/${new Date().getDate()+1}/${new Date().getUTCFullYear()}`))
          })
          setEvent([...data])
        })
        
      }
    },[auth.currentUser.email])
    console.log(Event)
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
    // var date = new Date();
   console.log(new Date(`${new Date().getMonth()+1}/${new Date().getDate()+1}/${new Date().getUTCFullYear()}`))
  return (
    <SafeAreaView style={{backgroundColor:'#A187EA'}}>
         <StatusBar barStyle="#A187EA"> </StatusBar>

      <LinearGradient  colors={['#A187EA','#DDDDDE']} style={{height:height}}>
       
    <View style={{flex:1,alignItems:"center"}} >
      <Text style={{fontSize:30,marginTop:40}}>Welcome!Admin</Text>
      <View style={{height:height*0.7,width:width}}>
           <View style={{width:'100%',marginTop:height*.09,marginLeft:width*.15}}>
            <FlatList 
              data={Event.filter(data=>(new Date(data.compDate)>new Date(`${new Date().getMonth()+1}/${new Date().getDate()+1}/${new Date().getUTCFullYear()}`)))}
                renderItem={({item})=>(
                  <TouchableOpacity style={{width:'70%',marginTop:20,borderRadius:20,height:120,justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'#D9D9D9',}} 
                  onPress={()=> navigation.navigate('Analysis',{Eventinfo:item})}>
                    <View style={{marginLeft:20,alignItems:"center",justifyContent:"center",backgroundColor:'#C7D4D4',height:80,width:80 ,borderRadius:60}}>
                  <Text style={{fontSize:50}}>{datas[item.SportName]}</Text>
                  </View>
                  <View style={{flex:1,marginLeft:40}}>
                  <Text style={{marginRight:'auto',fontSize:20}}>{item.EventTitle}</Text>
                  <Text style={{marginRight:'auto',marginTop:5}}>{item.NumberofTeamMembers} Team Register</Text>
                  </View>
                </TouchableOpacity>
    )}
            
            
            />
           
           </View>
      </View>
      <View style={{height:height*.7,flex:1}}>
<TouchableOpacity style={{marginTop:height*0.01}} onPress={()=> navigation.navigate(Viewold)}>
 <Text style={{textAlign:"center",textDecorationLine:"underline",fontSize:20,fontWeight:"500"}}  >view your older events</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate(Createevent)} style={{marginTop:height*0.02,height:50,width:width*0.6,backgroundColor:"#7895FD",justifyContent:"center",borderRadius:30}}>
    <Text style={{textAlign:"center",fontWeight:"700",fontSize:20}}>
    Create new event
    </Text>
</TouchableOpacity>
    </View>
    </View>
    </LinearGradient>

     
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

})