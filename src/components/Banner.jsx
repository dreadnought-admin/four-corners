import React, { useContext } from 'react'
import { StyleSheet, View, Text, Button, Image, Dimensions } from 'react-native'
import { DataContext } from '../global/DataContext'

const Banner = () => {

  const {user, setUser} = useContext(DataContext);


  return (
    <View style={styles.container}>
        <View style={styles.welcomeback}>
          <Text>Welcome back, traveler!</Text>
        </View>
        <Image style={styles.img} source={{uri: "https://randomuser.me/api/portraits/men/1.jpg"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: .5,
    paddingBottom: 10,
  },
  welcomeback: {
    marginTop: 15,
    marginRight: 20,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    marginRight: 5,
  }
})

export default Banner