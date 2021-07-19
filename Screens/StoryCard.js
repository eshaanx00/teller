import AppLoading from 'expo-app-loading';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
let customFonts = {"Bubblegum-Sans":require("..assets/fonts/BubblegumSans-Regular.ttf")};
import * as Font from 'expo-font';
import { View } from 'react-native';

export default class StoryCard extends React.Component {
    constructor() {
        super();
        this.state={
            fontsLoaded:false,
        }
    }

    async _loadFonts  ()  {
        await Font.loadAsync(customFonts)
        this.setState({fontsLoaded:true});
    }

    componentDidMount() {
        this._loadFonts();
    }

    render() {
        if (!this.state.fontsLoaded){
            return(<AppLoading></AppLoading>) 
        }else{
            return (
                <View style={{flex:1,margin:RFValue(13),backgroundColor:'#2F345D',borderRadius:RFValue(20)}}>
                        <Image source={require('../assets/story_image_1.png')}></Image>
                        <View style={{paddingLeft:RFValue(20),justifyContent:'center'}}>
                            <Text style={{fontSize:RFValue(25),fontFamily:Bubblegum-Sans,color:'white',}}>{this.props.story.title}</Text>
                            <Text style={{fontSize:RFValue(18),fontFamily:Bubblegum-Sans,color:'white',}}>{this.props.story.author}</Text>
                            <Text style={{fontSize:13,fontFamily:Bubblegum-Sans,color:'white',}}>{this.props.story.description}</Text>
                        </View>
                        <View style={{width:RFValue(160),height:RFValue(40),justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'#EB3948',borderRadius:RFValue(30)}}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}></Ionicons>
                            <Text style={{fontSize:RFValue(25),fontFamily:Bubblegum-Sans,color:'white'}}>12K</Text>
                        </View>
                </View>
                );
        }
    }
}