import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'
import Video from 'react-native-video'




const Demo = ({navigation}) => {
    
    return (

      
      
<Video 
controls
source={{uri: 'https://suvinrj.github.io/my-website/umate.mp4'}}
       style={{flex: 1}}                
 />


        )
}

export default Demo;

