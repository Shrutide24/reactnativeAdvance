import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function({ navigation}) {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [hidepassword,setHidepassword]=useState(true)

    const changePassword=()=>{
      console.log('hidepassword')
      setHidepassword(!hidepassword);
    }
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('done')
        navigation.navigate('Home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error',errorMessage)
      });
    }
  return (
    <SafeAreaView style={{flex:1,}}>
    <LinearGradient
      colors={['#e9d5f2', '#cb9de3', '#d9a2f5']}
      style={{flex:1}}>
        <ScrollView>
        <View style={styles.view} >
          
        <Ionicons name="arrow-back-circle-outline" size={40} color="#6626ab" style={{marginTop:10}} onPress={() => navigation.goBack()}/>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>Back!</Text>
      <Text style={styles.subText}>Sign in to continue.</Text>
      </View>
      
      <View style={styles.container}>
      <Text style={styles.subText1}>Email Address*</Text>
      <TextInput
             placeholder='Enter Email Address'
             value={email}
             onChangeText={(data)=>setEmail(data)}
             style={styles.input}
             />
      <Text style={styles.subText1}>Password*</Text>   
      <View style={[styles.input,{flexDirection:'row'}]}>    
       <TextInput
             placeholder=' Enter Password'
             value={password}
             onChangeText={text => setPassword(text)}
             style={{flex:1}}
             secureTextEntry={hidepassword}
             />

    <TouchableOpacity onPress={()=>changePassword()}>
    {hidepassword ?<Ionicons name="md-eye" size={24} color="gray" />:<Ionicons name="md-eye-off" size={24} color="black" />}
    </TouchableOpacity>
             
             
             
             </View> 
       <Text style={styles.subText2}>Forgot your Password?</Text>        
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
                 onPress={() => handleSignIn()}
                
                 style={styles.button}>
                 <Text style={styles.buttonText}>SIGN IN</Text>  
                
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={styles.subText3}>Don't have an account?</Text>          
            <Text  onPress={() => navigation.navigate('SignUp')} style={[styles.subText3,{fontWeight:'bold',color:'#6626ab',marginHorizontal:10,borderBottomWidth:1,borderBottomColor:'#6626ab'}]}>SIGN UP</Text>
            </View>
    </View>
    </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    view:{
        marginHorizontal:20
    },
    text1:{
        marginTop:60,
        fontSize:60,
        color:'#6626ab',
        fontWeight:'bold',
       },
       text2:{
        fontSize:60,
        color:'#6626ab',
        fontWeight:'bold',

       },
       subText:{
        fontSize:20,
        color:'gray',
        fontWeight:500,
       },
       container:{
        marginHorizontal:20,
        marginTop:30,
        width:'80%'
       },
       inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    subText2:{
        fontSize:15,
        color:'#6626ab',
        fontWeight:500,
        marginTop:5,
        
    },
      buttonContainer:{
        flex:1,
        marginTop:100,
        marginHorizontal:20,
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
      subText3:{
        marginTop:20,
        fontSize:15,
        color:'gray',
        fontWeight:500,
        alignSelf:'center'
        
    },
    subText1:{
      marginTop:20,
      color:'gray'
    }
})

