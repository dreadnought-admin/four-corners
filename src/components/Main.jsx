import React, { useContext } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { DataContext } from '../global/DataContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Banner from './Banner';
import profile from '../assets/profilepic.gif'


const Main = ({ navigation }) => {

  const { appData } = useContext(DataContext);

const pressHandler = () => {
    alert("Clicked")
}


  return (
    <ScrollView>
      <View>
      <Banner />
      <View style={styles.container}>
        <Image source={profile}></Image>
      </View>
      <View>
        <Text style={styles.quote}>
          "No matter where you go, there you are." — Unknown
        </Text>
      </View>
  
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Where You're Going</Text>
        <Icon style={styles.headerText} name="plane" size={20} color="whitesmoke"></Icon>
      </View>
    
      <View style={styles.countryContainer}>
        <Image style={styles.img} source={{uri: `${appData[3].flags.png}`}}></Image>


        <Image style={styles.img} source={{uri: `${appData[30].flags.png}`}}></Image>
    

        <Image style={styles.img} source={{uri: `${appData[10].flags.png}`}}></Image>
  

        <Image style={styles.img} source={{uri: `${appData[7].flags.png}`}}></Image>
  

        <Image style={styles.img} source={{uri: `${appData[50].flags.png}`}}></Image>


        <Image style={styles.img} source={{uri: `${appData[70].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[100].flags.png}`}}></Image>


        <Image style={styles.img} source={{uri: `${appData[110].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[8].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[34].flags.png}`}}></Image>

      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Where You've Been</Text>
        <Icon style={styles.headerText} name="flag" size={20} color="whitesmoke"></Icon>
      </View>

      <View style={styles.countryContainer}>
      <Image style={styles.img} source={{uri: `${appData[28].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[32].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[33].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[103].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[104].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[177].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[191].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[192].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[222].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[6].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[189].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[181].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[165].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[153].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[133].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[207].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[39].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[43].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[25].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[223].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[42].flags.png}`}}></Image>

        <Image style={styles.img} source={{uri: `${appData[27].flags.png}`}}></Image>
      </View>
    
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  quote: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  headerContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "cornflowerblue",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    color: "white",
    fontStyle: "italic",
    fontWeight: 'bold',
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 1,
    fontSize: 30,
    flexDirection: 'row',
    marginRight: 25
  },
  img: {
    height: 35,
    width: 50,
    alignSelf: 'center',
    marginBottom: 10,
    marginRight: 15,
  },
  countryContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default Main