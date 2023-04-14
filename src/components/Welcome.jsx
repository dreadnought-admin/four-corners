import React, { useRef, useEffect } from 'react'
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, ImageBackground, Animated, Easing } from 'react-native';
import tripadvisor from '../assets/tripadvisor.png'
import background from '../assets/cartoonbg.jpg'

export const INPUT_RANGE_START = 0;
export const INPUT_RANGE_END = 1;
export const OUTPUT_RANGE_START = -281;
export const OUTPUT_RANGE_END = 0;
export const ANIMATION_TO_VALUE = 1;
export const ANIMATION_DURATION = 25000;


export default function Welcome({ navigation }) {

    const pressHandler = () => {
      navigation.navigate()
    }

    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;


    
    useEffect(() => {
      const translate = () => {
        translateValue.setValue(initialValue);
        Animated.timing(translateValue, {
          toValue: ANIMATION_TO_VALUE,
          duration: ANIMATION_DURATION,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => translate());
      };

      translate();
    }, [translateValue]);

    const translateAnimation = translateValue.interpolate({
      inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
      outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    });

    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
         <AnimatedImage 
            resizeMode="repeat" 
            style={[styles.background,{
                transform: [
                    {
                      translateX: translateAnimation,
                    },
                    {
                      translateY: translateAnimation,
                    },
                  ],
            }]}
            source={background} />
            <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.h1}>Where You Are? Where You've Been?</Text>
        <Text style={styles.h1}>Yesterday's Concerns.</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.tripadvisor.com/")}>
          <View>
            <Text styles={styles.h2}>The Only Question Left Is:</Text>
            <Image style={styles.img} source={tripadvisor}></Image>
            <Text style={styles.h3}>Where Are You Going Next?</Text>
          </View>
      </TouchableOpacity>  
      </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
      fontFamily: 'Helvetica',
      fontSize: 22,
      color: "#FFF",
      textShadowColor: "black",
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
    },
    h3: {
      fontSize: 15,
      color: 'green',
      fontFamily: 'Helvetica',
      fontStyle: 'italic',
      textShadowColor: "white",
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
    },
    box: {
      marginTop:19,
      height:188,
      width:188,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      marginLeft:'auto',
      marginRight:'auto',
    },
    header: {
      size: 15,
    },
    img: {
      width: 150,
      height: 150,
      marginLeft: "auto",
      marginRight: "auto",
      alignSelf: "center",
    },
    background: {
      position: 'absolute',
      width: 1200,
      height: 1200,
      top: 0,
      opacity: 0.2,
      transform: [
        {
          translateX: 0,
        },
        {
          translateY: 0,
        },
       ],
      }      
});
