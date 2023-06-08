import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({ navigation }) {
    const DATA = [
        {
          id: "1",
          src: "https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/16/Photos/Home%20Page/GO%20(77)-kjmB--621x414@LiveMint.png",
        },
        {
          id: "2",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX////1BRT1AAD0AAD5iIj4b3H4dXf3YmT1AA31ABH/+vv2Q0X4c3X1AAn7ra32Rkj5jY37trb80dL+5uf2PD72LjH6pab5g4X8zMz5mJn4eXv+9PX7sbH5kpP7urv3aWv3UVNvhp53AAABBUlEQVRoge3X6Q6CMBBGUZi6tEIREfcF3/8pLQWMWBdomITE7/6rQ06EFJQgQAghhHib5FG04cJj0lpw4TMKQ+DAA/EhO9zWC2MbvarPfhfhuxTZYULORC/HhGtyqi5LIqqVLNl6kvfD9TKdvLazw/3OLtLI6FRPDv1wSn8ddPTdLeV3+nWQ91YE3hE/nVerMxeeiWafN02dT7zxCzV3aNPeORdfPCP1ivvWxk/XpDA2D742F/fpwTUwTkopPlxrKZlw29zZLcXjt4kBH/AmAg4c+Jjxm/MkGRBflHHhbsAHxzn/Qss8nn4t3khvPJTua0u78rXFF+/U+PDOeeAIIYQQQn/UHcooDOuW4KxOAAAAAElFTkSuQmCC",
        },
        {
          id: "3",
          src: "https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/256_144_3.png?$512_N_PNG$",
        },
        {
          id: "4",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fIxPOW828QRf-mUu-z2pzvpW8bVnlIWx9g&usqp=CAU",
        },
        {
          id: "5",
          src: "data:image/png;base64,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",
        },
        {
          id: "6",
          src: "data:image/png;base64,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",
        },
      ];
      
      const Item = ({item}) => (
        <View style={{borderWidth:1,margin:10,borderRadius:10}} >
          
          <Image source={{uri: item.src}}
       style={styles.image} />
        </View>
      );

      const Details = ({item}) => (
        <TouchableOpacity 
        onPress={()=>{ navigation.navigate("ProductInfo")}}
        style={{flexDirection:'row',}} >
            <View style={{borderWidth:1,margin:10,borderRadius:5}}>
           <Image source={{ uri: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg' }}
         style={styles.productImage}  
         resizeMode="contain"/>

         </View>
         <View style={styles.text}>
           <Text style={{color:'green'}}>Sponserd</Text>
           <Text style={{fontWeight:'bold',fontSize:17}}>SAMSUNG Galaxy S23 </Text>
           <Text style={{fontWeight:'bold',fontSize:17}}>Ultra Cell Phone,Factory </Text>
           <Text style={{fontWeight:'bold',fontSize:17}}>Unlocked Android </Text>
           <Text style={{fontWeight:'bold',fontSize:17}}>Smartphone,256GB,</Text>
           <Text style={{fontWeight:'bold',fontSize:17}}>200MP... </Text>
           <Text style={{color:'blue'}}>90 days FREE.Terms Apply.</Text>
           <Text style={{fontWeight:'bold',fontSize:17}}>$999</Text>  
           <Text style={{color:'darkblue',fontWeight:'bold'}}>Ship to India</Text>
           <Text style={{color:'gray'}}>Options: 3 sizes</Text>
           <Text style={{color:'gray'}}>+3 color/patterns</Text>

           </View>
            
       
        
         </TouchableOpacity>
      )




  return (
    <SafeAreaView style={{flex:1,marginHorizontal:10}}>
        <View style={styles.View}>
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
      <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:20}} >Popular Products </Text>
       <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
       <Text style={{fontSize:18}}>Sort by</Text> 
       <MaterialCommunityIcons name="menu-down" size={24} color="black" />
       </View>
        </View> 
        
        {/* brands flatlist */}
        <View>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      /> 
        </View>

        {/* product information */}
        <View>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Details item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
       
      />
        </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    View:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
    },
    container:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between'
    },
    image:{
        width:70, 
        height: 45,
        margin:10,
        borderRadius:5,
    },
    productImage:{
        width:150, 
        height:200,
        margin:20,
        borderRadius:5,
        
    },
    text:{
        marginTop:10,

    }
})

