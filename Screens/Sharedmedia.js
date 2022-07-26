import { Image,Text,FlatList,SectionList, View,SafeAreaView, Button,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
    
  );
};
 

const Sharedmedia = ({navigation}) => {
    
    return (
        
    <View style={styles.container}>
           <View style={styles.profile}>

<TouchableOpacity style={styles.image} onPress={() => navigation.navigate('Profile')}>
  <Image style={styles.image} source={require('../assets/h.jpg')}  />
        
  </TouchableOpacity>
   
           </View>
           <Button color={'grey'}  style={styles.btn} title='Go to Profile' onPress={() => navigation.navigate('Profile')}/>
  
           

           <View style={styles.container1}>
      <StatusBar style="light" />
      
      <SafeAreaView style={{ flex: 1}}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          horizontal
          renderSectionHeader={({ section }) => (
            <>
     <Text style={styles.sectionHeader}>{section.title}</Text>
      <FlatList
       data={section.data}
       //horizontal
       renderItem={({ item }) => {
        return <ListItem item={item} />;

      }}
      
      />
      
             </>
          )}
          renderItem={({ item, section }) => {
            return null;
            
          }}
        />
      </SafeAreaView>
    </View>
     
      </View>
      

      
    );
    
    
}

export default Sharedmedia;
const SECTIONS = [
  {
    title: 'Images',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Links',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Videos',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  title:{
    flex:1,
   // backgroundColor:'red',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
  
    container1: {
      flex: 4,
      backgroundColor: 'grey',
    },
    profile:{
      
      flex:1.7,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent:'center'
    },
    image:{
     
      
      
   },
   btn:{
     
      position:'absolute',
      alignSelf:'flex-end',
      bottom:0,
      left:0
      
  },

    media:{
      
      flex: 3,
      backgroundColor: 'grey',
      borderTopColor:'black',
      flexDirection:'row'

    },
    box:{
      margin:3,
      width:130,
      height:120,
    

    },
    box1:{
      
      margin:3,
      width:130,
      height:120,
    

    },
    box2:{
      
      margin:3,
      width:130,
      height:120,
    

    },

  });

