import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/card'




export default function menu() {


 const [plate, setplate] = useState([
    {name: 'Plate1', key: '1'},
    {name: 'Plate2', key: '2'},
    {name: 'Plate3', key: '3'},
    {name: 'Plate4', key: '4'},
    {name: 'Plate5', key: '5'},
    {name: 'Plate6', key: '6'},


 ]);


  return (
    <View style={styles.container}>
       <FlatList
      //  numColumns={1}
       keyExtractor={(item)=> item.id}
       data ={plate}
       renderItem={({item})=> (
       
        <Card>
        <Text style={styles.item}>{item.name}</Text>

        </Card>
        
       )}
       
       />
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#CC8F37",
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  item:{
    width:300,
    height:200,
    backgroundColor:'gray',
    fontSize:24,
    marginHorizontal:10,
    marginTop:24,
  }
 
});