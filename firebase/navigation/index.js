import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../index'
import SignIn from '../signIn'
import SignUp from '../signUp'
import Home from '../Home';
import productInfo from '../productInfo';
import ProductInfo from '../productInfo';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name='Index' component={Index}  options={{ headerShown: false }}/>
        <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUp}/>
        <Stack.Screen options={{ headerShown: false }} name='SignIn' component={SignIn}/>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home}/>
        <Stack.Screen options={{ headerShown: false }} name='ProductInfo' component={ProductInfo}/>

       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator