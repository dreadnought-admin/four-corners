import React from 'react';
import 'react-native-gesture-handler';
import MainContainer from './src/routes/MainContainer'
import { DataProvider } from './src/global/DataContext';

import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

function App() {
  return (
    <DataProvider>
      <MainContainer/>
    </DataProvider>
  )
}

export default App;
