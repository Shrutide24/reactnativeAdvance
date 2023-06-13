import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{ flexDirection:'row', marginTop:20,justifyContent:'space-between',}}>
        <Feather name="menu" size={40} color="black" />
       <View style={{alignItems:'center'}}>
        <FontAwesome  name="pagelines" size={20} color="blue" />
        <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:'bold'}} >Shoer.</Text>
        <Text style={{fontWeight:'bold',color:'blue'}} >Ik</Text>
        </View>
        </View>
        <FontAwesome name="search" size={30} color="black" />
      </View>
  )
}