import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState} from 'react'
import {Button, Gap } from '../../components'
import { CheckBox, Input } from "react-native-elements";
import { IconBack, User, Line, Plus} from '../../assets/icons'

const Filter = ({navigation, onBack}) => {

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const genderMale = () =>{
      setMale(true);
      setFemale(false);
  }
  const genderFemale = () =>{
      setMale(false);
      setFemale(true);
  }


  return ( 
    <ScrollView style={styles.container}>
      {onBack && (
      <TouchableOpacity  onPress={onBack} activeOpacity={0.7}>
        
      </TouchableOpacity>
     )}
      <View style={styles.headerWrapper}>
      <Gap width={20} />
      <TouchableOpacity activeOpacity={0.7}>
        <IconBack 
        onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Filter</Text>
      </View>
      <Gap height={27} />
      <View style={{backgroundColor: "#FBF8FD"}}>
        <View style={styles.border1} />
        <Text style={styles.textAge}>Age</Text>
        <View style={styles.age}>
          <Gap width={38}/>
          <TextInput 
          style={styles.textInput1}
          placeholder="       . ."
          ></TextInput>
          <View style={styles.smallLine}>
          <Line />
          </View>
          <Gap width={7}/>
          <TextInput 
          style={styles.textInput1}
          placeholder="       . ."
          ></TextInput>
        </View>
        <View style={styles.border1} />
      </View>
      <Gap height={16} />
      <View style={{backgroundColor: "#FBF8FD"}}>
        <View style={styles.border1} />
        <Text style={styles.textAge}>Faculty</Text>
        <Gap height={13} />
        <TextInput
        style={styles.textInput2}
        placeholder="      .  .  .  .  .">
        </TextInput>
        <View style={styles.border1} />
      </View>
      <Gap height={16} />
      <View style={{backgroundColor: "#FBF8FD"}}>
        <View style={styles.border1} />
        <Text style={styles.textAge}>Gender</Text>
      <View style={styles.container}>
      <View style={styles.checkbox}>
          <CheckBox 
          title="Male"
          checked={male}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={genderMale}
          />
      </View>
      <View style={styles.checkbox}>
          <CheckBox 
          title="Female"
          checked={female}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={genderFemale}
          />
      </View>
      </View>

  </View>
      <Gap height={16} />
      <View style={{backgroundColor: "#FBF8FD"}}>
        <View style={styles.border1} />
        <Text style={styles.textAge}>Interest</Text>
        <View style={styles.smallPlus}>
          <Plus />
          </View>
          
        <Gap height={30} />
        <View style={styles.border1} />


      </View>
      <Gap height={16} />
      <View style={{backgroundColor: "#FBF8FD"}}>

        <Button mL={120} mR={120} mB={20} style={styles.button1} title={'Save'} onPress={() => navigation.navigate('SignIn')}>Next</Button>
      </View>

        

      </ScrollView>
  )
}

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
headerWrapper: {
    backgroundColor: '#FBF8FD',
    paddingTop: 40,
    paddingBottom: 33,
    flexDirection: 'row',
    alignItems: 'center',

},
text: {
  fontSize: 35, 
  fontFamily: 'Roboto-Bold',
  color: 'black',
  marginLeft: 3
},
border1: {
  width: 500,
  borderBottomWidth: 3,
  borderColor: '#766090',
  borderRadius: 10,
  
}, 
age: {
  flexDirection: 'row',

},
textInput1: {
  borderWidth: 1,
  borderRadius: 3,
  height: 28,
  width: 67,
  marginTop: 13,
  fontSize: 16,
  fontFamily: 'Roboto-Medium',
  padding: 0,
  marginBottom: 20,
},
textInput2:{
  marginLeft: 33,
  borderWidth: 1,
  borderRadius: 3,
  width: 260,
  height: 28,
  fontSize: 16,
  fontFamily: 'Roboto-Medium',
  padding: 0,
  marginBottom: 20,
},
textAge: {
  fontFamily:"Roboto-Medium", 
  fontSize: 18,
  marginTop: 19,
  marginLeft: 38,
  color: 'black'
},
smallLine: {
  marginTop: 25,
  marginLeft: 6
}, 

smallPlus: {
  marginTop: 25,
  marginLeft: 6
}

})