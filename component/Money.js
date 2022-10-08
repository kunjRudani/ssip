import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
const Money = () => {
    
  return (
    <SafeAreaView>
      <StatusBar barStyle="#A187EA"> </StatusBar>
        <LinearGradient colors={['#31215C','#DDDDDE','#DDDDDE','#F1B643']} style={{height:'100%'}}>
            <View style={{width:'100%', borderWidth:.2,borderColor:"#362660",height:1,marginTop:70}}></View>
            <View style={{alignItems:'center',marginTop:20}}>
                <Text  style={{fontSize:30 , textDecorationLine:"underline"}}> Financial Aid</Text>
            </View>
        
        <View style={{marginTop:50,marginLeft:10}}>
            <Text style={{fontSize:25}}>Total Expense(in Rs.): </Text>
            
            <View style={{flexDirection:"row"}}>
                <Text style={{marginTop:35,fontSize:20}}>Rs.</Text>
            <TextInput placeholder='incomes' keyboardType='numeric'style={{height:50,width:350,backgroundColor:'#B4E4F3',paddingLeft:10,borderRadius:5,marginTop:20}}></TextInput>
            </View>
        </View>
        <View style={{marginTop:20,marginLeft:30}}>
            <Text style={{fontSize:25}}>
            Description:
            </Text>
            <View style={{height:100,paddingLeft:10,paddingTop:5,backgroundColor:'#B4E4F3',width:350,marginTop:2,borderRadius:3}}>
            <TextInput placeholder='Reason For aid,Expected amount,any other' ></TextInput>
        </View>
        </View>
        <View style={{marginLeft:30,marginTop:10}}>
            <Text style={{fontSize:20}}>Institute Email-Id:</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <TextInput placeholder='incomes' keyboardType='email-address'style={{height:50,width:350,backgroundColor:'#B4E4F3',paddingLeft:10,borderRadius:5,marginTop:10}}></TextInput>
        </View>
       
        <View style={{marginLeft:30,marginTop:5}}>
            <Text style={{fontSize:25}}>Expense Proof:</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{width:'80%',backgroundColor:'white',borderRadius:2,height:40,borderColor:'black',borderWidth:.5}}>
            <Text></Text>
        </View>
        </View>
        <View style={{marginTop:20,alignItems:'center'}}>
        <TouchableOpacity  style={{backgroundColor:'#FFFFFF', width:150,borderRadius:5,elevation:5}}>
                <Text style={{fontSize:20,height:40,textAlign:'center'}}>
                    
                    Upload File</Text>
                </TouchableOpacity>
            
            <TouchableOpacity style={{backgroundColor:'#FFFFFF', width:150,marginTop:20,borderRadius:5,elevation:5  }}>
                <Text style={{fontSize:20,height:40,textAlign:'center'}}>Add More</Text>
                </TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>       
              <TouchableOpacity style={{alignItems:"center"}}>

        <View style={{width:150,height:60,borderRadius:15,backgroundColor:'#FFFFFF',borderColor:'black',borderWidth:.5,marginTop:20 ,justifyContent:'center' }}>
            <Text style={{textAlign:'center',}}> Submint</Text>

        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:"center"}}>

        <View style={{width:150,height:60,borderRadius:15,backgroundColor:'#FFFFFF',marginTop:20 ,marginLeft:20,borderColor:'black',borderWidth:.5,justifyContent:'center' }}>
            <Text style={{textAlign:'center',}}> Clear</Text>

        </View>
        </TouchableOpacity>
        </View>
        <View style={{width:'100%', borderWidth:.2,borderColor:"#362660",height:1,marginTop:20}}></View>
        </LinearGradient>

    </SafeAreaView>
  )
}

export default Money

const styles = StyleSheet.create({})