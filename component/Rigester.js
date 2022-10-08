import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 
import {BottomSheet} from 'react-native-btr';
import { Dimensions,  } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar';
import {doc, setDoc} from "firebase/firestore"

// import {uid} from "uid"
import { auth, store } from '../firebase';
const Rigester = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const {height,width} = Dimensions.get("screen")
  const [image, setImage] = useState('');
  const [status, requestPermission] = ImagePicker.useCameraPermissions()
const [Name, setName] = useState("")
const [DOB, setDOB] = useState("")
const [AN, setAN] = useState("")
const [City, setCity] = useState("")
const [Gender, setGender] = useState("")
const [infor,setInfo] =useState({})
  const cencelp=()=>{
    setImage('');
  }
  const cencelc =()=>{
    setVisible(false);
  }
  const SaveProfile=()=>{
    
    setDoc(doc(store,"Admin",auth.currentUser.email),{
      Name:Name,
      DOB:DOB,
      City:City,
      Gender:Gender,
      AN:AN
    })
  }
  const takePhotoFromCamera = async () => {

    requestPermission()
    if (status.granted) {
      //  console.log("hello")
      let photo = await ImagePicker.launchCameraAsync({
        // mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      })
      if (photo) {
        setImage(photo.uri)

        // console.log(photo.base64)
      }
    }
  }

   
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  return (
    <ScrollView> 
         <SafeAreaView style={{backgroundColor:'#A187EA'}}>
      <StatusBar barStyle="#A187EA" />
    <LinearGradient colors={['#A187EA','#dddd']} style={{height:1000}}>
    {/* <ImageBackground source={require('../assets/rakesh.png')} style={{flex:1}} resizeMode="contain" > */}

    <View style={{marginTop:50,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:30}}> Create your  profile </Text>
    </View>
    <View style={{ alignItems:'center',justifyContent:'center', marginTop:25}}>
      <TouchableOpacity style={{backgroundColor:'#D9D9D9', width:80,borderRadius:40,height:80,alignItems:'center',justifyContent:'center'}}
      onPress={()=>setVisible(true)} 
      >
        {image.length>0? 
       <Image style={{height:80,width:80,borderRadius:40}}  
       source={{uri: image}}></Image>:
    <Feather name="camera" size={40} color="black" />}
      </TouchableOpacity>
    <Text>
      Set profile photo 
    </Text>
    </View>
    <View style={{marginTop:35,alignItems:'center',justifyContent:'center',width:'55%'}}>
      <Text style={{fontWeight:'bold'}}> Enter your full name</Text>
    </View>
    <View style={{marginTop:10,marginLeft:50,alignItems:'center',justifyContent:'center',borderBottomWidth:1 , width:'75%'}}>
    <TextInput placeholder='' onChangeText={text=> setName(text)} style={{ width:'90%',marginLeft:-20 }} >
    </TextInput>
    </View>

    <View style={{marginTop:35,alignItems:'center',justifyContent:'center',width:'45%'}}>
      <Text style={{fontWeight:'bold'}}> Date of Birth</Text>
    </View>
    <View style={{marginTop:10,marginLeft:50,alignItems:'center',justifyContent:'center',borderBottomWidth:1 , width:'75%'}}>
    <TextInput placeholder='' onChangeText={text => setDOB(text)} keyboardType="numeric" style={{ width:'90%',marginLeft:-20 }} >
    </TextInput>
    </View>

    <View style={{marginTop:35,alignItems:'center',justifyContent:'center',width:'44%'}}>
      <Text style={{fontWeight:'bold'}}>Adhar Card </Text>
    </View>
    <View style={{marginTop:10,marginLeft:50,alignItems:'center',justifyContent:'center',borderBottomWidth:1 , width:'75%'}}>
    <TextInput placeholder='' keyboardType='numeric' onChangeText={text => setAN(text)} style={{ width:'90%',marginLeft:-20 }} >
    </TextInput>
    </View>

    <View style={{marginTop:35,alignItems:'center',justifyContent:'center',width:'30%'}}>
      <Text style={{fontWeight:'bold'}}>City</Text>
    </View>
    <View style={{marginTop:10,marginLeft:50,alignItems:'center',justifyContent:'center',borderBottomWidth:1 , width:'75%'}}>
    <TextInput placeholder='' onChangeText={text =>setCity(text)} style={{ width:'90%',marginLeft:-20 }} >
    </TextInput>
    </View>
    <View>
      <Text style={{marginTop:25,marginLeft:50, fontWeight:'bold'}}>
        Gender
      </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{width:100,height:40,backgroundColor:Gender!="Male"?"#D9D9D9":"#8787E4", marginLeft:90,marginTop:20,borderRadius:30,alignItems:'center',justifyContent:"center", borderColor:'black', borderWidth:.8}} onPress={()=>setGender("Male")}>
        <Text style={{ fontSize:20}}>Male</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
       style={{width:100,height:40,backgroundColor:"#D9D9D9",backgroundColor:Gender!="Female"?"#D9D9D9":"#8787E4", marginLeft:50,marginTop:20,borderRadius:30,alignItems:'center',justifyContent:"center", borderColor:'black', borderWidth:.8}} onPress={()=>setGender("Female")}>
       <Text style={{ fontSize:20}}>Female</Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity style={{marginLeft:105,marginTop:30,backgroundColor:'#8787E4',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:30}} onPress={()=>{
        SaveProfile();
        navigation.navigate('Home')
        }} >
        <Text style={{fontSize:35}}>
          Next
        </Text>
      </TouchableOpacity>
      
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
             height: height*.41,
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
              
              <View style={{ flex: 1, marginTop:50, }}>
               <TouchableOpacity onPress={takePhotoFromCamera} style={{width:300, backgroundColor:'#dddd', height:45, alignItems:'center',justifyContent:"center",borderRadius:30}}>
                <Text style={{fontSize:25}}>Take Photo</Text>
               </TouchableOpacity>
               <View style={{marginTop:27}}>
               <TouchableOpacity onPress={pickImage} style={{width:300, backgroundColor:'#dddd', height:45, alignItems:'center',justifyContent:"center",borderRadius:30}}>
                <Text style={{fontSize:25}}  >Choose from library</Text>
               </TouchableOpacity>
               </View>
               <View style={{marginTop:27}}>
               <TouchableOpacity onPress={cencelp} style={{width:300, backgroundColor:'#dddd', height:45, alignItems:'center',justifyContent:"center",borderRadius:30}}>
                <Text style={{fontSize:25}} >Remove Photo</Text>
               </TouchableOpacity>
               </View>
               <View style={{marginTop:27}}>
               <TouchableOpacity  onPress={ toggleBottomNavigationView} style={{width:300, backgroundColor:'#dddd', height:45, alignItems:'center',justifyContent:"center",borderRadius:30}}>
                <Text style={{fontSize:25}}>Cencel</Text>
               </TouchableOpacity>
               </View>
                
              </View>
              
            </View>
            </LinearGradient>
        </BottomSheet>
        {/* </ImageBackground> */}
        </LinearGradient>
        
    
    </SafeAreaView>
    </ScrollView>

  )
}

export default Rigester

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    borderTopLeftRadius:50,
    borderTopEndRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})