import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import Eventinfo from "./Createevent";
import { collection, onSnapshot } from "firebase/firestore";
import { store } from "../firebase";
const { height, width } = Dimensions.get("screen");
const Analysis = ({ route }) => {
  const[Event,setEvent]= useState([])
  console.log(route.params.Eventinfo.id);
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
  };
  const info = route.params.Eventinfo.SportName;
  useEffect(() => {
    const eventid = collection(store, "Event", route.params.Eventinfo.id, "Joined");
    onSnapshot(eventid, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setEvent([...data]);
    });
  }, []);
 console.log(Event)
  const arr = [
    {
      title: "player1",
    },
    {
      title: "player2",
    },
    {
      title: "player3",
    },
    {
      title: "player4",
    },
  ];
  //      const [ user,setUser]= useState("")
  //      const auth = getAuth()
  // const fireUser = auth.currentUser

  // const getUserdetails = async () => {
  //   const docRef = doc(db, "Event",id)
  //   const docSnap = await getDoc(docRef)

  //   if (docSnap.exists()) {
  //     // console.log("Document data:", docSnap.data())
  //     setUser(docSnap.data())
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!")
  //   }
  // }

  // useEffect(() => {
  //   getUserdetails()
  // }, [])
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#A187EA", "#ddddde"]}
        style={{ height: height }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: height * 0.15,
            width: width * 0.7,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              marginRight: "auto",
              marginLeft: 80,
              backgroundColor: "white",
              height: 80,
              width: 80,
              borderRadius: 50,
            }}
          >
            {datas[route.params.Eventinfo.SportName]}
          </Text>
          <Text style={{ fontSize: 20 }}>{info}</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 30, textDecorationLine: "underline" }}>
            Team Detail
          </Text>
        </View>
        <FlatList
        data={Event}
        renderItem={({item})=>(
          <View style={{width:width*.9,marginLeft:20,marginTop:20, backgroundColor:"#D9D9D9",height:height*.4, borderRadius:60}}> 
            <Text style={{fontSize:27, marginLeft:20,marginTop:20}}> Team Name:{item.teamName}</Text>
            <Text style={{marginLeft:20,marginTop:10,fontSize:25}} > Members</Text>
            <FlatList
            data={item.members}
            renderItem={({item})=>(
              <View style={{backgroundColor:"#C7D4D4",width:width*.78,marginLeft:20,height:40,borderRadius:30,paddingTop:10,paddingLeft:15,marginTop:5}}>
              <Text>{item.FirstName}</Text>
            </View>
            )}
            
            
            />

            
          
          </View>

        )}
        
        ></FlatList>
      
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Analysis;
