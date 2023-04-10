import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Banner from './Banner';


const Main = ({ navigation }) => {


const pressHandler = () => {
    alert("Clicked")
}

  return (
    <View>
      <Banner />
      <View>
        <Text>

        </Text>
      </View>
    </View>
  )
}

export default Main