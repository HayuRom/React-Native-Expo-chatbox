import { Text,Picker, View,Button,ScrollView,StyleSheet,Image,ImageBackground,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


import SelectDropdown from 'react-native-select-dropdown'



const Chatbox = ({navigation}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => 
      <TouchableOpacity onPress={() => navigation.navigate('Sharedmedia')}>
         <Image
             style={styles.image1}
             source={require('../assets/h.jpg')} > 
             
         </Image>
       </TouchableOpacity>,

      
          
    
        

    });
  }, [navigation]);




    return (
      
  

      
     <View style={styles.container}>
      <View style={styles.body}>
       
      
       </View> 

       <View style={styles.bottom}>
       <TouchableOpacity>
       <MaterialIcons name="emoji-emotions" size={35} color="#00997a" />
      </TouchableOpacity>
         <View style={styles.textarea}>
        
           <TextInput  placeholder="enter text here"/>
           </View>
         <View style={styles.button}>
         <Button 
       title='Send'
       color='#00997a'
       titleColor='white'
       onPress={() => console.log("button pressed")}
      />
         </View>
       
       </View> 

     </View>
  );
    
  }
  export default Chatbox;



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
    },
body:{

  flex: 20,
  backgroundColor: 'white',
},
bottom:{

 // flex: 1,
  backgroundColor: 'white',
  flexDirection:'row',
  borderRadius:5,
  height:40,
  paddingVertical:0,
  paddingHorizontal:5,
 
},
textarea:{
  
  flex: 4,
  backgroundColor:'#f2f2f2',
  borderRadius:5,
  height:40,
  paddingVertical:0,
  paddingHorizontal:10,
 
 },
 button:{
  flex: 1,
 },
image:{
       
     height:100,
     width:100,
     alignSelf:'flex-start',
     borderRadius:7,
     
      },
  
      image1:{
       
        height:60,
        width:60,
        borderRadius:150,
         }
 
   
   

  });