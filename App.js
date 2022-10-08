import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Rigester from './component/Rigester';
import Createevent from './component/Createevent';
import Createevent1 from './component/Createevent1';
import Home from './component/Home';
import Viewold from './component/Viewold';
import Treys from './component/Treys'
import Money from './component/Money';
import Analysis from './component/Analysis';
export default function App() {
  const Stack=createNativeStackNavigator(); 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Register' component={Rigester} options={{headerShown:false}}/>
        <Stack.Screen name='Createevent' component={Createevent} options={{headerShown:false}}/>
        <Stack.Screen name='Createevent1' component={Createevent1 } options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Viewold' component={Viewold} options={{headerShown:false}}/>
        <Stack.Screen name='Analysis' component={Analysis} options={{headerShown:false}}/>
        <Stack.Screen name='Treys' component={Treys} options={{headerShown:false}}/>
        <Stack.Screen name='Money' component={Money} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
