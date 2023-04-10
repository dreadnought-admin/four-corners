
import * as React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Main from "../components/Main";
import About from "../components/About";
import CountryList from '../components/CountryList';
import Welcome from '../components/Welcome';

// screen names 
const welcomeName = "Welcome"
const mainName = "Main";
const aboutName = "About";
const countryName = "CountryList"

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={welcomeName}
            screenOptions={({route}) => ({
                tabBarIcon:({focused, color, size}) => {
                    let iconName;
                    let rn = route.name

                    if (rn === welcomeName) {
                        iconName = focused ? 'cloud' : 'cloudo';
                    } else if (rn === mainName) {
                        iconName = focused ? 'lock1' : 'unlock';
                    } else if (rn === aboutName) {
                        iconName = focused ? 'play' : 'playcircleo';
                    } else if (rn === countryName) {
                        iconName = focused ? 'environment' : 'enviromento';
                    }

                    return <Icon name={iconName} size={size} color={color}/>
                }
            })}>

            <Tab.Screen name={welcomeName} component={Welcome}/>
            <Tab.Screen name={mainName} component={Main}/>
            <Tab.Screen name={aboutName} component={About}/>
            <Tab.Screen name={countryName} component={CountryList}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}