import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native-web";
import React from "react";

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function LoginScreen() {
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center'}}>
            <View style={{paddingHorizontal:25}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <Text>Possible Logo here?</Text>
                </View>
                
                <Text style={{
                    fontSize:28,
                    fontWeight:'500',
                    color:'#333',
                    marginBottom:30,}}>
                    Login
                </Text>

                

                <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                    <MaterialIcons
                        name="alternate-email"
                        size={20}
                        color="#666"
                        style={{marginRight:5}}/>
                    
                    <TextInput 
                    placeholder='Email ID' 
                    style={{flex:1,paddingVertical:0}} 
                    keyboardType="email-address" 
                    />
                </View>

                <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                    <Ionicons
                        name="ios-lock-closed-outline"
                        size={20}
                        color="#666"
                        style={{marginRight:5}}/>
                    
                    <TextInput 
                    placeholder='Password' 
                    style={{flex:1,paddingVertical:0}} 
                    secureTextEntry={true} 
                    />

                <TouchableOpacity style={{color:'#AD40AF',fontWeight:'700'}}>
                    <Text>Forgot?</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity 
                style={{backgroundColor:'#AD40AF',
                padding:20,
                borderRadius:10,
                marginBottom:30}}>
                    <Text 
                    style={{textAlign:'center',
                    fontWeight:'700',
                    fontSize:16,
                    color:'#fff'}}>
                    Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{backgroundColor:'#AD40AF',
                padding:20,
                borderRadius:10,
                marginBottom:30}}>
                    <Text 
                    style={{textAlign:'center',
                    fontWeight:'700',
                    fontSize:16,
                    color:'#fff'}}>
                    Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}