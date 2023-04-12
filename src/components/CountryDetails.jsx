import React, { useEffect, useState, useContext }from 'react';
import { Text, Image, View, ScrollView, Button, StyleSheet } from 'react-native';
import { getProduct } from '../services/ProductService';
import { DataContext } from '../global/DataContext';

export function CountryDetails({route}) {
    const { productName } = route.params;
    const [ product, setProduct ] = useState({})

    const { appData } = useContext(DataContext)

    useEffect(() => {
        setProduct(getProduct(productName));
    });

    return(
        <ScrollView>
            <Image style={StyleSheet.flag}
            source={{uri: `${product.flags.png}`}}      
            />
            <View>
                <Text>{product.name.common}</Text>
                <Text>hi</Text>
            </View>
        </ScrollView>
    )

}