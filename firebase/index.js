import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Index( {navigation}) {  
  return (
<View style={{flex:1,}}>
<LinearGradient
  colors={['#e9d5f2', '#cb9de3', '#d9a2f5']}
  style={{flex:1}}>
   
   
   <View style={{flex:1.5}}></View>
    <View style={{flex:1,marginHorizontal:20}}>
    <Text style={styles.text}>Welcome !</Text>
    <Text style={styles.subtext}>Explore your activity</Text>
    <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                 style={styles.button}>
                 <Text style={styles.buttonText}>SIGN IN</Text>  
                 </TouchableOpacity>

                 <TouchableOpacity
                 onPress={() => navigation.navigate('SignUp')}
                 style={[styles.button, styles.buttonOutLine]}
                 >
                 <Text style={styles.buttonOutLineText}>SING UP</Text>  
                 </TouchableOpacity>
</View>
   </View>


      </LinearGradient>

</View>  

  )
} 

const styles= StyleSheet.create({
 
 container:{
  justifyContent:'center',
  alignSelf:'center'
 },
 text:{
  fontSize:60,
  color:'#6626ab',
  fontWeight:'bold',
 },
 subtext:{
  fontSize:20,
  color:'gray',
  fontWeight:500,
 },
 buttonContainer:{
  // width:'100%',
  // justifyContent:'centre',
  // alignItems:'center',
  marginTop:40,
},
button:{
  backgroundColor:'#6626ab',
  padding:15,
  borderRadius:5,
  alignItems:'center',
},
buttonOutLine:{
  borderColor:'black',
  marginTop:20,
  backgroundColor:'white'
},
buttonText:{
  color:'white',
  fontSize:16,
  fontWeight:'700'
},
buttonOutLineText:{
  color:'#6626ab',
  fontSize:18,
  fontWeight:'700'
},
})
