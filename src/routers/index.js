import React from 'react'
import { SplashScreen, Home, SignIn, SignUp, RegisOne,
   RegisTwo, RegisThree, ResetPass, ResetPassOne,
  Settings, Privacy, Help, Report } from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const index = () => {
  return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>    
     <Stack.Screen
         name="SplashScreen"
         component={SplashScreen}
       />
       <Stack.Screen 
         name="SignIn"
         component={SignIn}
       />
       <Stack.Screen 
        name="SignUp"
        component={SignUp}
       />
       <Stack.Screen 
        name="ResetPassOne"
        component={ResetPassOne}
       />
     <Stack.Screen 
        name="ResetPass"
        component={ResetPass}
       />
     <Stack.Screen 
        name="RegisOne"
        component={RegisOne}
       />
     <Stack.Screen 
        name="RegisTwo"
        component={RegisTwo}
       />
     <Stack.Screen 
        name="RegisThree"
        component={RegisThree}
       />
     <Stack.Screen
        name="Home"
        component={Home}
       />
       <Stack.Screen
        name="Settings"
        component={Settings}
        />
        <Stack.Screen
        name="Privacy"
        component={Privacy}
        />
        <Stack.Screen
        name="Help"
        component={Help}
        />
        <Stack.Screen
        name="Report"
        component={Report}
        />

   </Stack.Navigator>
  )
}

export default index

