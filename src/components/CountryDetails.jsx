import React, { useEffect, useState, useContext }from 'react';
import { Text, Image, View, ScrollView, Button, StyleSheet, Linking } from 'react-native';
import { DataContext } from '../global/DataContext';

const CountryDetails = ({ item }) => {

    
    const [wantToGo, setWantToGo] = useState(0);
    const [beenHere, setBeenHere] = useState(0);

    const { appData } = useContext(DataContext)

    const handleLikeClick = () => {
        setWantToGo((wantToGo) => wantToGo + 1);
      }

    const handleBeenHereClick = () => {
    setBeenHere((beenHere) => beenHere + 1);
    }

    const [isSolo, setSolo] = useState()

    const wantsToGoSolo = () => {
        if (wantToGo === 1) {
            return true
        } else {
            return false
        }
    }

    const solo = () => {
        if (wantToGo === 1) {
            setSolo(false)
        } else if (wantToGo > 1) {
            setSolo(true) 
        }}

    useEffect(() => {
        solo(wantToGo);
    })

    return(
        <View style={styles.container}>
        <View style={styles.countryContainer}>
          <Image style={styles.img} 
          source={{uri: `${item.flags.png}`}}>
          </Image>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
        {item.name.common.toUpperCase()}
          </Text>
          <Text style={{fontSize: 10}}>
          📍 {item.name.official}
          </Text>
          <Text>
            Continent: {item.continents[0]}
          </Text>
          <Text>
            Capital: {item.capital}
          </Text>
          <Text>
            Population: {item.population}
          </Text>
          <View style={styles.spacer}>
            <Button color="cornflowerblue" title={`Discover ${item.name.common} 🧭`} onPress={() => Linking.openURL(`https://www.countryreports.org/country/${item.name.common}.htm`)}></Button>
            <Button color="cornflowerblue" title={isSolo? `${wantToGo} want to go 🛩️` : `${wantToGo} wants to go 🛩️`} onPress={handleLikeClick}></Button>
          </View>
        </View>
        </View>
        
        )
      }

      const styles = StyleSheet.create({
    container: {
      padding: 0,
      flex: 1,
      flexDirection: 'row'
    },
    countryContainer: {
      flexDirection: 'row',
      width: 205,
      height: 140,
      marginLeft: 10,
      marginTop: 25
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 175,
        height: 200,
        paddingVertical: 5,
        marginBottom: 5,
        marginLeft: 0,
        marginRight: 5
    },
    browseCountries: {
      fontFamily: 'Helvetica',
      marginBottom: 15,
      alignItems: 'center',
      marginTop: 15,
    },
    content: {
      padding: 20,
      backgroundColor: '#fff',
    },
    headerText: {
      fontFamily: 'Helvetica',
      fontSize: 25,
      color: "#FFF",
      fontStyle: "italic",
      textShadowColor: "black",
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    },
    img: {
    width: 200,
    height: 150
    },
    btn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
    right: -100,
    },
    input: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: "#009688",
      backgroundColor: "lightgrey",
      marginBottom: 25,
    },
    spacer: {
        marginTop: 6,
        flexDirection: 'column',
        rowGap: 5
        
    },
    infoText: {
        textAlign: 'center'
    }
  });


      export default CountryDetails