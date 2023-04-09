import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Linking} from 'react-native';
import MainContainer from './src/routes/MainContainer'
import { DataProvider } from './src/global/DataContext';



function App() {
  return (
    <DataProvider>
      <MainContainer/>
    </DataProvider>
  )
}

export default App;
