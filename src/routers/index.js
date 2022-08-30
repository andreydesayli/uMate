import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SplashScreen, Great, Menu, video, Notification } from '../pages';
import Demo from '../pages/Demo';
import Map from '../pages/mapsTest';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
        <Stack.Navigator>


        <Stack.Screen name="SplashScreen" 
        component={SplashScreen} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="SignIn" 
        component={SignIn} 
        options={{headerShown: false}} 
        />
        {/* <Stack.Screen name="Great" 
        component={Great} 
        options={{headerShown: false}} 
        /> */}
        <Stack.Screen name="Menu" 
        component={Menu} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="Demo" 
        component={Demo} 
        options={{headerShown: false}} 
        />    
        <Stack.Screen name="Notification" 
        component={Notification} 
        options={{headerShown: false}} 
        />    
    </Stack.Navigator>
    
  )
}

export default Router
