import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import globe from '../assets/removedglobe.png'
import plane from '../assets/planegif.gif'



const About = () => {


  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}> 
        <ImageBackground
            style={styles.image}
            resizeMode="cover"
            source={plane}
        >
        <View style={styles.textContainer}>
          <Text style={styles.text}>The World is Waiting For You</Text>
          <Text style={styles.header}>Welcome to Four Corners</Text>
          <Text style={styles.subtitle}>Your One Stop Destination For Millions of Others</Text>
        <View style={styles.quoteContainer}>
            <Text style={styles.quote}>
            “Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” – Anthony Bourdain
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
              <View>
                <Text style={{width: 50, textAlign: 'center', color: 'white'}}>. . .</Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
            </View>
            <Text style={styles.paragraph}>
              In a world plagued by disconnect, there is no greater unifier than the simple act of travel.
            </Text>
            <Text style={styles.paragraph}>
              Honeysuckle LLC is proud to partner with TripAdvisor © to bring you Four Corners, an app designed
              to make planning your next journey as easy as daydreaming about it.
            </Text>
            <Text style={styles.paragraph}>
              Whether you're looking to scale white sands or black cliffsides, Four Corners can take you there—
              long before the boarding call.
            </Text>
          </View>
          <View>
          </View>
        </View>
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  quote: {
    fontFamily: 'Helvetica',
    color: "#FFF",
    fontStyle: 'italic',
    fontSize: 15,
    marginBottom: 15,
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Helvetica',
    fontSize: 15,
    color: "#FFF",
    fontWeight: 'bold',
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: "#FFF",
    fontStyle: 'italic',
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    paddingBottom: 15,
    color: "#FFF",
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  paragraph: {
    fontFamily: 'Courier',
    fontSize: 15,
    marginTop: 25,
    color: "whitesmoke",
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  }
})

export default About