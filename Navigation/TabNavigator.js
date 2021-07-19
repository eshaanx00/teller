import React, { Component } from 'react'
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import CreateStory from '../Screens/CreateStory';
import Feed from '../Screens/Feed';

const Tab = createMaterialBottomTabNavigator();
const bottomTabNavigator = () => {
    return(
        <Tab.Navigator labeled={false} barStyle={styles.tabStyle}
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if (route.name === 'Feed'){
                    iconName = focused?"Home":"Home-Outline"
                }else if(route.name === 'CreateStory'){
                    iconName = focused?"add-circle":"add-circle-outline"
                }
                return(
                    <Ionicons name = {iconName} size = {RFValue(25)} color={color} style={styles.IoniconStyle} ></Ionicons>
                )
            }
        })}
        activeColor={"#EE8249"}
        inactiveColor={'gray'}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreateStory" component={CreateStory} />
            
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:'#2F345D',
        height:"8%",
        borderTopLeftRadius:30,
        BorderTopRightRadius:30,
        overflow: "hidden",
        position: 'absolute',
    },IoniconsStyle:{
        width:RFValue(30),
        height:RFValue(30),
    }
})
export default bottomTabNavigator;