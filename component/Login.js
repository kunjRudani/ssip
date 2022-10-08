import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
 
const Login = () => {
    const [email,setemail] =useState('')
    const [password,setpassword] =useState('')
    const navigation =useNavigation()
  
         useEffect(()=>{
         auth.onAuthStateChanged(user=>{
                if(user)
                {
                    navigation.navigate("Home")
                }
            })
           
    },[])
    const handlesignup = () =>{
        alert(email)
        signInWithEmailAndPassword(auth,email,password)
        .then(usercendentials =>{
            const user= usercendentials.user;
            console.log(user.email) 
        })
     .catch(error=> alert(error.message))
    }
  return (
    
    <LinearGradient colors={['#A187EA','#dddd']} style={{height:'100%'}}>
        <StatusBar barStyle="#A187EA"> </StatusBar>
      <ImageBackground source={require('../assets/rakesh.png')} style={{flex:1}} resizeMode="contain" >


      <View style={{ alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:40,top:'100%'}}>Login</Text>
      </View>
      <View style={{top:30}}>
      <View style={{width:'50%', alignItems:'center',justifyContent:'center',top:150}}>
        <Text style={{fontSize:23,}}>E-mail ID</Text>
        
      </View>
        <View style={{backgroundColor:'#D9D9D9',borderRadius:20,left:"10%",paddingTop:8,paddingLeft:20,height:45 ,top:160, width:'80%',}}>
        <TextInput placeholder='Enter your e-mail ID' style={{}}
        onChangeText={text => setemail(text)}
        ></TextInput>
        </View>
        <View style={{width:'50%', alignItems:'center',justifyContent:'center',top:190}}>
        <Text style={{fontSize:23,}}
        
        >Password</Text>
        
      </View>
        <View style={{backgroundColor:'#D9D9D9',borderRadius:20,left:"10%",paddingTop:8,paddingLeft:20,height:45 ,top:200, width:'80%',}}>
        <TextInput placeholder='Enter your Password' secureTextEntry 
        onChangeText={text => setpassword(text)}
        ></TextInput>
        </View>
        </View>
      
          <TouchableOpacity style={{width:"100%",alignItems:'center', justifyContent:"center",}}>
            <Text style={{top:350, fontSize:30,backgroundColor:'#8787E4', width:175,height:50,borderRadius:40,paddingTop:3,paddingLeft:50}} 
            onPress={handlesignup} 
            >Login  </Text>
            </TouchableOpacity>
            <View style={{top:500,alignItems:'center', justifyContent:'center',flexDirection:'row'}}>
              <Text style={{fontWeight:'bold'}}>Don't have an account?</Text>
              <Text style={{color:'blue',textDecorationLine:'underline',paddingLeft:5,fontWeight:'bold'}}>Sign Up</Text>
            </View>
    </ImageBackground>
    </LinearGradient>
  )
}

export default Login

