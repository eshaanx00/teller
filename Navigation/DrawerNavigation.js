import React, { Component } from 'react'
import {
    View,
    Text
}from 'react-native';
import {creatDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'
import Profile from '../Screens/Profile'


const DrawerNavigator = () => {
        return (
            <Drawer.navigator>
                <Drawer.screen name="Home" Component={TabNavigator}/>
                <Drawer.screen name="Profile" Component={Profile}/>
            
            </Drawer.navigator>
        )
        }

const Drawer = creatDrawerNavigator();
export default DrawerNavigator;