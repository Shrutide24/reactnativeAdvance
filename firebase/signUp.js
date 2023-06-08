import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView,} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function({navigation}) {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [hidepassword,setHidepassword]=useState(true)
    const [isChecked, setChecked] = useState(false);

    const changePassword=()=>{
      setHidepassword(!hidepassword);
    }
    const handleSignUp =() =>{
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
        
            const user = userCredential.user;
            console.log("done");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('erro',errorMessage)
          });
        }
  return (
    <SafeAreaView style={{flex:1}}>
    <LinearGradient
      colors={['#e9d5f2', '#cb9de3', '#d9a2f5']}
      style={{flex:1}}>
        <ScrollView style={{flex:1}}>
        <View style={styles.view} >
        <Ionicons name="arrow-back-circle-outline" size={40} color="#6626ab" style={{marginTop:10}} onPress={() => navigation.goBack()}/>
      <Text style={styles.text1}>Let's Get </Text>
      <Text style={styles.text2}>Started</Text>
      <Text style={styles.subText}>Create your Account.</Text>
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
    {hidepassword ?<Ionicons name="md-eye" size={24} color="gray" />
    :<Ionicons name="md-eye-off" size={24} color="gray" />}
    </TouchableOpacity>
             </View> 
       <Text style={styles.subText1}> Confirm Password*</Text>   
       <View style={[styles.input,{flexDirection:'row'}]}>    
       <TextInput
             placeholder=' Enter Password'
             value={password}
             onChangeText={text => setPassword(text)}
             style={{flex:1}}
             secureTextEntry={hidepassword}
             />

    <TouchableOpacity onPress={()=>changePassword()}>
    {hidepassword ?<Ionicons name="md-eye" size={24} color="gray" />
    :<Ionicons name="md-eye-off" size={24} color="gray" />}
    </TouchableOpacity>
             </View>   
             <View style={{flexDirection:'row',marginTop:10}}>
             <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
             <Text style={styles.subText2}>I accept </Text> 
             <Text style={[styles.subText2, {color:'#6626ab',}]}> Terms </Text>
             <Text style={styles.subText2}>and </Text>
             <Text style={[styles.subText2, {color:'#6626ab',}]}> Privacy Policy </Text>
            </View>    
              
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
                onPress={()=>handleSignUp()}
                 style={styles.button}>
                 <Text style={styles.buttonText}>SIGN UP</Text>  
            </TouchableOpacity>
      
            <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={styles.subText3}>Already have an account?</Text>          
            <Text  onPress={() => navigation.navigate('SignIn')} 
            style={[styles.subText3,{fontWeight:'bold',color:'#6626ab',marginHorizontal:10,borderBottomWidth:1,borderBottomColor:'#6626ab'}]}>SIGN IN</Text>
            </View>         
    </View>
    </ScrollView>
      </LinearGradient>
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    view:{
        marginHorizontal:20,
        flex:1
    },
    text1:{
        marginTop:50,
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
        marginTop:10,
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
    subText1:{
      marginTop:20,
      color:'gray',
    },
    subText2:{
        fontSize:15,
        color:'gray',
        fontWeight:500,
        
    },
      buttonContainer:{
        flex:1,
        marginTop:80,
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
        marginTop:10,
        backgroundColor:'white'
      },
      buttonText:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
      },
      subText3:{
        marginTop:10,
        fontSize:15,
        color:'gray',
        fontWeight:500,    
    },
    checkbox: {
      marginRight:5,
    },
})