import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FooterStack from '../routes/MainContainer';
import Banner from './Banner';
import Footer from './Footer';

const Main = ({ navigation }) => {


const pressHandler = () => {
    alert("Clicked")
}

  return (
    <View>
        <View>
            <Banner />
        </View>
    <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor eros, lacinia ut ligula non, dignissim porta tellus. Ut sit amet magna felis. Mauris scelerisque leo ligula, non luctus sem fermentum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh risus, fermentum vel ullamcorper nec, porttitor sed felis. Quisque efficitur semper orci, at vestibulum nisi sagittis et. Vestibulum ullamcorper dolor nulla, a volutpat ipsum dignissim et. Aliquam erat volutpat.

            Morbi auctor arcu sit amet cursus molestie. Aenean hendrerit gravida eros, sit amet rutrum sem auctor eu. Praesent diam quam, pharetra quis tempus nec, eleifend quis felis. Fusce viverra porttitor tortor, ac laoreet velit egestas pulvinar. Integer vitae massa erat. Ut eu semper nisi, vitae vulputate magna. Morbi non justo eu augue aliquam porttitor. Nullam commodo nisl nisl, euismod ultricies orci tempor ac. Sed ut tincidunt nulla. Praesent velit diam, porttitor a magna sed, sollicitudin pellentesque libero. Vestibulum malesuada nibh enim, id ullamcorper nunc pulvinar quis. In hac habitasse platea dictumst. Mauris et elementum est, vel auctor mauris.

            In egestas dui nec ligula molestie semper. Mauris at blandit sapien. Duis a hendrerit lectus. In semper dictum orci sit amet dignissim. Aliquam facilisis ullamcorper dui in sollicitudin. Pellentesque vitae finibus libero. Vivamus posuere, urna sed accumsan condimentum, nisi arcu gravida justo, sed viverra lacus dolor eget risus. Etiam dignissim, nunc ut porta facilisis, augue leo commodo diam, eu pulvinar justo lorem ac libero.

            Quisque scelerisque eget mauris ut iaculis. Duis mollis mi purus, sed molestie tortor aliquam in. Integer id mi rutrum, facilisis libero sed, egestas enim. Fusce metus diam, bibendum sit amet lorem ac, vestibulum rutrum lectus. Etiam quis orci sed sapien aliquam cursus. Nam vulputate porta eleifend. Donec ultrices mauris vel ex porttitor pretium. Proin luctus a tellus ut ultrices. Integer laoreet augue quis consequat viverra.
    </Text>
    <Button title="Button to the country list" onPress={pressHandler} />
    <View>
    </View>
    </View>
  )
}

export default Main