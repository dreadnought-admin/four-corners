import React, { useEffect, useState, useContext }from 'react';
import { Text, Image, View, Button, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { DataContext } from '../global/DataContext';

const CountryDetails = ({ item }) => {

    
    const [wantToGo, setWantToGo] = useState(0);
    // const [beenHere, setBeenHere] = useState(0);
    const [isLiked, setLiked] = useState(false);
    const [isSolo, setSolo] = useState()

    const handleWantClick = () => {
        setWantToGo((wantToGo) => wantToGo + 1);
      };

    // const handleBeenHereClick = () => {
    // setBeenHere((beenHere) => beenHere + 1);
    // }

    const handleLikeClick = () => {
      setLiked((!isLiked))
    };

    const solo = () => {
        if (wantToGo === 1) {
            setSolo(false)
        } else if (wantToGo > 1) {
            setSolo(true) 
        } else if (wantToGo === 0) {
          setSolo(false)
        }
      };

    useEffect(() => {
        solo(wantToGo);
    });

    return(
        <View style={styles.container}>
        <View style={styles.countryContainer}>
          <Image style={styles.img} 
          source={{uri: `${item.flags.png}`}}>
          </Image>
        </View>
        <View style={styles.infoContainer}>
        <View style={styles.commonName}>
          <Text style={styles.infoText}>
          {item.name.common.toUpperCase()}
          </Text>
        </View>
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
            <Button color="cornflowerblue" title={isSolo? `${wantToGo} want to go 🛩️` : `${wantToGo} wants to go 🛩️`} onPress={handleWantClick}></Button>
            <TouchableOpacity style={styles.like} onPress={handleLikeClick}>
              {isLiked ? <Icon name="heart" size={20} color="hotpink"></Icon> : <Icon name="heart" size={20} color="lightgrey"></Icon>}
            </TouchableOpacity>
          </View>
        </View>
        </View>
        
        )
      }

      const styles = StyleSheet.create({
    container: {
      padding: 0,
      flex: 1,
      flexDirection: 'row',
      height: 240
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
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 0,
        marginRight: 5
    },
    commonName: {
      fontWeight: "bold",
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
    height: 165
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
        marginTop: 10,
        paddingBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    like: {
      marginTop: 5,
      marginBottom: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });


      export default CountryDetails