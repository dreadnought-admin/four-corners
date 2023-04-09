import React, { useState, useEffect } from "react";


const DataContext = React.createContext();

const DataProvider = ({children}) => {

    const [appData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [beenHere, setBeenHere] = useState(0);
    const [wantToGo, setWantToGo] = useState(0);

    const [search, searchQuery] = useState('');

    const url = 'https://restcountries.com/v3.1/all';

    const fetchData = () => {
        fetch(url)
        .then(r => r.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
  };

    useEffect(() => {
    fetchData();
  }, []);



    return(
        <DataContext.Provider value={{
            appData, setData, loading, setLoading, beenHere, setBeenHere, wantToGo, setWantToGo
        }}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext, DataProvider};