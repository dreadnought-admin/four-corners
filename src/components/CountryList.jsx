import React, { useState, useEffect, useContext } from 'react'
import Search from '../navigation/Search'
import { View, Text, Button, FlatList } from 'react-native'
import { DataContext } from '../global/DataContext';


const CountryList = ({ navigation }) => {

    const {appData, setData, loading, setLoading, 
        beenHere, setBeenHere, wantToGo, 
        setWantToGo} = useContext(DataContext);

    
    return (
      <View>
        <Text>Country List Is it working</Text>
        <Text>{appData[0].name.official}</Text>
      </View>
    );
  };
  export default CountryList;
