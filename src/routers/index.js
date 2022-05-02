import React from 'react'
import { SplashScreen, SignIn, SignUp, RegisOne, RegisTwo, RegisThree, ResetPass, ResetPassOne } from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const index = () => {
  return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
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
       
   </Stack.Navigator>
  )
}

export default index

