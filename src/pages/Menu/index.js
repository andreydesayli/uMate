import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RectPurple } from '../../assets'
import { Gap, Header, Button } from '../../components'
import MapView, { Callout, Circle, Marker }  from 'react-native-maps';
import {Linking} from 'react-native'
import GetLocation from 'react-native-get-location'




const Menu = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={22} />
      <Header title="Hello Parent" textColor='#868FEF'/>
      <RectPurple/>
      <Gap height={19} />
      <View style={styles.Button1}>
     <Button title="View Demo" textColor='white' color='#868FEF' onPress={()=>navigation.navigate('Demo')}/>   
     </View>
      <Gap height={19} />
      <View style={styles.Button2}>
      <Button title="Call Student" textColor='white' color='#3DAB2B' onPress={()=>{Linking.openURL('tel:082394900558');} }/>
      </View>


      <Gap height={19} />
      <View style={styles.Button3}>
      <Button title="Notifications" textColor='white' color='#EEC536' onPress={()=>navigation.navigate('Notification')}/>
      </View>     
      <Gap height={19} />

      <View style={styles.Button4}>
                <Button title="WA Student" textColor='white' color='#3DAB2B' onPress={() => {
                  Linking.openURL(`whatsapp://send?phone=${+6282394900558}`)
                }} />
      </View>
          

          
      <MapView
       showsUserLocation={true}
       followsUserLocation={true}
       zoomEnabled={true}
       mapType='satellite'
       style={styles.map}
       region={{
         latitude: 1.417495, 
         longitude: 124.983943,
         latitudeDelta: 0.002,
         longitudeDelta: 0.0005,
       }}
       
  
     >
      <Marker
      coordinate={{latitude: 1.417495, 
        longitude: 124.983943}}
        title="UNKLAB"
        description="Main building"
      >
        <Callout>
          <Text>This is the main building</Text>
        </Callout>

      </Marker>
      <Circle 
        center={{latitude: 1.416913, longitude: 124.985666}}
        radius={20}/>
     </MapView>

  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 389,
    width: 360,
    marginTop: 259,
    marginLeft: 20,
    
  },
Button1: {
  marginLeft: 10,
  marginRight: 220,
    },
Button2: {
      marginLeft: 220,
      marginRight: 10,
      marginTop: -64,
        },
Button3: {
  marginLeft: 10,
  marginRight: 220,
            },
Button4: {
              marginLeft: 220,
              marginRight: 10,
              marginTop: -64,
                },
    

  
 });

export default Menu

