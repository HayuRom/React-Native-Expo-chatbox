import { Text, View,Button,StyleSheet,} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {

    return (
      
      <View style={styles.container}>
          
          <Button color="#009387"
                  
                  title='Go to Chatlist' onPress={() => navigation.navigate('Chatlist')}/>
        <Text>home</Text>
      </View>
    );
    
  }
  export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    
});