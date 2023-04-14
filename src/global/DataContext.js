/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";


const DataContext = React.createContext();

const DataProvider = ({children}) => {

    const [appData, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [beenHere, setBeenHere] = useState(0);
    const [wantToGo, setWantToGo] = useState(0);

    const [liked, setLiked] = useState([]);

    const [user, setUser] = useState([]);


    const url = 'https://restcountries.com/v3.1/all';

   

    const jsonurl = "https://randomuser.me/api/";

    const fetchJsonPlaceholder = () => {
        fetch(jsonurl)
        .then((r) => r.json())
        .then(json => setUser(json))
        .catch(error => console.error(error))
    }

    const fetchData = () => {
        fetch(url)
        .then((r) => r.json())
        .then((response) => {
            setFilteredData(response);
            setData(response);
        });
    };

    useEffect(() => {
    fetchData();
    fetchJsonPlaceholder();
  }, []);

//   useEffect(() => {
//     setFavorites(appData);
//   }, [favorites]);

//   useEffect(() => {
//     console.log(favorites);
//   }, [favorites]);

//   const handleFavorite = (name) => {
//     const newFavorites = favorites.map(item => {
//         return item.name.common = name ? { ... item, favorite: !item.favorite } : item; 
//     });
//     setFavorites(newFavorites)
//   }

    return(
        <DataContext.Provider value={{
            appData, setData, loading, 
            setLoading, beenHere, setBeenHere, 
            wantToGo, setWantToGo, user, setUser,
            filteredData, setFilteredData, liked, setLiked
        }}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext, DataProvider};