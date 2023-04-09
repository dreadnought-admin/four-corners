import React from 'react'
import { View, Text, Image, Button, StyleSheet, Alert, Linking, TouchableOpacity, ImageBackground } from 'react-native';
import Main from './Main';
import tripadvisor from '../assets/tripadvisor.png'
import background from '../assets/planegif.gif'


export default function Welcome({ navigation }) {

    const pressHandler = () => {
      navigation.navigate()
    }

  return (
    <View styles={styles.container}>
      {/* <ImageBackground source={background} resizeMode="cover" style={styles.image}> */}
        <Text>New Experiences, New Designs</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.tripadvisor.com/")}>
          <View>
            <Text>The Only Question Left Is:</Text>
            <Image style={styles.img} source={tripadvisor}></Image>
            <Text>Where Are You Going Next?</Text>
          </View>
      </TouchableOpacity>  
      {/* </ImageBackground> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
    },
    img: {
      width: 150,
      height: 150,
    }
});
