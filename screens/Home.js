import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,FlatList,useState } from 'react-native';
import FlatButton from '../Button/Button';



export default function Home({navigation}) {
  const image = { uri: 'https://image.freepik.com/free-vector/elegant-ramadan-kareem-decorative-festival-card_1017-23873.jpg' };

const pressHandler = () => {
     navigation.navigate('Menu')
}
 

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        
      
      <FlatButton text='Réservation' onPress={pressHandler} />
    </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width:"100%",
  },
  

});