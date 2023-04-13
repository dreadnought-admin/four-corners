import React, { useState, useContext } from 'react'
import { View, Text, Button, FlatList, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { DataContext } from '../global/DataContext';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import  CountryDetails  from './CountryDetails';


const CountryList = ({ navigation }) => {

  const [search, setSearch] = useState("")

    const {appData, setData, liked, setLiked, wantToGo, beenHere, setWantToGo, setBeenHere,
      filteredData, setFilteredData} = useContext(DataContext);



    const myItemSeparator = () => {
        return (
          <View
            style={{ height: 1, backgroundColor: "gray", marginHorizontal:10, marginBottom: 10, marginTop: 10}}
          />
        );
      };

    const searchFilter = (text) => {
      if (text) {
        const newData = appData.filter((item) => {
          const itemData = item.name.common ? 
          item.name.common.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData)
        setSearch(text);
      } else {
        setFilteredData(appData)
        setSearch(text);
      }
    }


      const ItemView = ({item}) => {
        return(
        <View style={styles.countryContainer}>
          <Image style={styles.img} 
          source={{uri: `${item.flags.png}`}}>
          </Image>
          <Text>
            {item.name.common.toUpperCase()}
          </Text>
          <Text>
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
          <View style={styles.btn}>
            {/* <Button color="lightgreen" title="Maps" onPress={() => {<Map item={item}/>}}></Button> */}
            <Button color="lightgreen" title={`${wantToGo} want to go`} onPress={handleWantToGo}></Button>
          </View>
          <View style={styles.btn}>
            <Button color="lightgreen" title={`${beenHere} have been!`} onPress={handleBeenHere}></Button>
          </View>
        </View>
        
        )
      }

    
    return (
      <View>
      <TextInput
        style={styles.input}
        value={search}
        placeholder="🔎 Search for a new destination"
        underlineColorAndroid="transparent"
        onChangeText={(text) => searchFilter(text)}
      />
      <View style={styles.browseCountries}>
        <Text style={styles.headerText}>Where Will You Go? 🗺️</Text>
      </View>
        <FlatList 
        data={filteredData}
        renderItem={({item}) => <CountryDetails item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={myItemSeparator}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      padding: 50,
      flex: 1,
    },
    countryContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    browseCountries: {
      fontFamily: 'Helvetica',
      marginBottom: 35,
      alignItems: 'center',
      marginTop: 1,
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
      height: 50, 
      width: 75,
    },
    btn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    input: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      fontSize: 15,
      borderColor: "cornflowerblue",
      borderRadius: 100 / 2,
      backgroundColor: "lightgrey",
      marginBottom: 25,
    }
  });

  export default CountryList;
