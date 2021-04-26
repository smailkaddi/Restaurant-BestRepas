import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image  } from 'react-native';
import { ScrollView,TextInput } from 'react-native-gesture-handler';
import Couches from '../shared/Couches';
import Icon from '@expo/vector-icons/Ionicons';
import New from '../shared/New'



export default function menu({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Plates')
}

  return(


<ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor:"#fff",
                paddingHorizontal:20
            }}
            >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    marginTop:40,
                    alignItems:"center"
                }}>
                    <View style={{
                        width:"50%"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:22
                        }}>Furniture</Text>
                    </View>
                    <View style={{
                        width:"50%",
                        alignItems:"flex-end"
                    }}>
                        
                    </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:"100%",
                    marginVertical:30
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        elevation:2,
                        width:"85%",
                        backgroundColor:"#FFF",
                        paddingHorizontal:20,
                        height:35,
                        borderRadius:10,
                        marginLeft:1
                    }}>
                        <Icon name="ios-search"
                           size={22}
                           color="#4f4a4a"
                           />
                            <TextInput
                                placeholder="Search unique furniture..."
                                style={{
                                fontFamily:"Medium",
                                paddingHorizontal:10,
                                fontSize:12
                            }}
                            />
                            </View>
                            
                            
                            <View style={{
                                alignItems:"center",
                                elevation:2,
                                width:"15%",
                                backgroundColor:"#FFF",
                                marginLeft:5,
                                height:35,
                                borderRadius:10,
                                marginLeft:1,
                                justifyContent:"center"
                            }}>
                                <Image
                                source={require('../images/sort.png')}
                                style={{
                                    width:18,height:25
                                }}
                                />
                            </View>
                   
                </View>


                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:18,
                        color:"#4f4a4a"
                    }}>
                        Modern
                    </Text>
                    <View style={{
                        width:5,
                        height:5,
                        borderRadius:5,
                        marginHorizontal:5,
                        backgroundColor:"#4f4a4a"
                    }}></View>
                    <Text style={{
                        fontFamily:"Bold",
                        fontSize:9,
                        color:"#4f4a4a"
                    }}>
                        Good Quality items
                    </Text>
                </View>


                    <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                    >
                       <Couches
                    
                            src={require('../images/1.jpg')}
                            name="Sopa Marocco"
                            onPress={pressHandler}
                           
                       
                       />
                         <Couches
                            src={require('../images/1.jpg')}
                            name="Sopa Marocco"
                            onPress={pressHandler}
                           
                       
                       />
                         <Couches
                            src={require('../images/1.jpg')}
                            name="Sopa Marocco"
                            onPress={pressHandler}
                       
                       />

                    </ScrollView>


                    <View style={{
                        flexDirection:"row",
                        marginTop:30,
                        marginBottom:10,
                        alignItems:"center"
                    }}>
                        <Text style={{
                            fontFamily:"Bold",
                            color:"#4f4a4a",
                            fontSize:20
                        }}>
                            New item
                        </Text>
                        <View style={{
                            height:5,
                            width:5,
                            borderRadius:5,
                            backgroundColor:"#4f4a4a",
                            marginHorizontal:4
                        }}>
                        </View>
                        <Text style={{
                            fontFamily:"Bold",
                            fontSize:10,
                            color:"#4f4a4a"
                        }}>
                            Good Quality items
                        </Text>
                    </View>



                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    >

                        <New
                         src={require('../images/1.jpg')}
                        />
                        <New
                        src={require('../images/1.jpg')}
                        />
                        <New
                        src={require('../images/1.jpg')}
                        />
                    </ScrollView>

                 
            
            
            <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal>

                    
                
            </ScrollView>

           
            </ScrollView>

  )
  


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