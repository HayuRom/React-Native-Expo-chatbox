import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Chatlist from './Screens/Chatlist';
import Chatbox from './Screens/Chatbox';
import Sharedmedia from './Screens/Sharedmedia';
import 'react-native-gesture-handler';

import  Profile from './Screens/Profile';
import  Home from './Screens/Home';
import {enableScreens} from 'react-native-screens';
import { Text, View,Button,StyleSheet,Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import  ProfileSetting from './Screens/ProfileSetting';

import SelectDropdown from 'react-native-select-dropdown';





enableScreens();
const headermenu = ["Search", "Setting", "Block-Chat", "Mute","Sharedmedia"]


const Stack = createNativeStackNavigator();

const myOptios={
  title:"Pragmatic International ",


  headerTintColor:"white",
  headerStyle:
  {
    backgroundColor:"#009387",
  
  },
  
  
  headerRight: () =>(
    <TouchableOpacity  >
      <SelectDropdown
	data={headermenu}
	onSelect={(selectedItem, index,) => {
		console.log(selectedItem, index)
	}}
    defaultButtonText={(<Ionicons name="menu" size={24} color="black"/>)}
    ButtonColor={("black")}
    
    

/>
       </TouchableOpacity>
       

  ),
  
  


}

const myOptioslist ={
  
  title:"Messages",
  headerTintColor:"white",
  headerStyle:
  {
    backgroundColor:"#009387",

  },
 headerRight: () =>(
   
    <View>
      <TouchableOpacity>
      <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>

    
    </View>
    

  ),


}
const myOptiosmedia ={
  title:"Sharedmedia",
  headerTintColor:"white",
  headerStyle:
  {
    backgroundColor:"#00997a",

  },
}

export default function App() {

  
  
 
 

  return (
    
    
    <NavigationContainer>
     
     
      <Stack.Navigator>
         
       
        <Stack.Screen name="Chatlist"component={Chatlist}  options={myOptioslist}/>
        <Stack.Screen name="Chatbox"  component={Chatbox} options={myOptios}/>
        <Stack.Screen name="Sharedmedia" component={Sharedmedia} options={myOptiosmedia}/>
        <Stack.Screen name="ProfileSetting" component={ProfileSetting} options/>
        <Stack.Screen name="Profile" component={Profile} options={{
          
          title:'profile',
          headerStyle: {
            backgroundColor: '#00997a',
          },
          headerTintColor: 'black', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          headerTintColor: 'white',
          

          
          }} />
        
          
   

        
        </Stack.Navigator>
    </NavigationContainer>
  );
  
}



