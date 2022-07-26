import { Text, Image,View,Button,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';



const Profile = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('ProfileSetting')}>

      <MaterialIcons  name="menu" size={24} color="white" />
      
    </TouchableOpacity>,
     
 });
  }, [navigation]);

  
  

    
    return (
        
    <View style={styles.container}>



<View style={styles.coverphoto}> 
<Text>cover photo</Text>
<TouchableOpacity  >
         <Image
            style={styles.pimage}
             source={require('../assets/h.jpg')} > 
             
         </Image>
       </TouchableOpacity>

</View>
<View style={styles.dm}>
<TouchableOpacity onPress={() => navigation.navigate('Chatbox')}  >
       <MaterialIcons name="message" size={35} color="black" />
</TouchableOpacity>
        
<TouchableOpacity onPress={() => navigation.navigate('Chatbox')} >
      <Button color={"black"}     title={"follow"}/>
</TouchableOpacity>
</View>

      </View>
      
    );
    
    
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
      
    },
    coverphoto: {
      flex:0.2,
      
      backgroundColor: 'tomato',
      alignItems: 'center',
      alignItems: 'center',
      justifyContent:'center'
      
    },
    dm: {
      flex:0.1,
      flexDirection:'row',
      
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent:'center'
      
    },
    pimage:{ 

    height:50,
    width:50,
    borderRadius:100,
    backgroundColor: 'grey',
    

      
    },
  
  });

