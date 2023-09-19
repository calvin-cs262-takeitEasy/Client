import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native-web";
import React from "react";

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function LoginScreen() {

    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor: '#2a2d36'}}>
            <View style={styles.container}>
                <View style={{paddingHorizontal:25}}>
                    
            {/* placeholder for future app logo */}
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={{
                        color:'#d5d6db'}}>
                        Possible Logo here?
                        </Text>
                    </View>

            {/* login title text */}
                    <Text style={{
                        fontSize:28,
                        fontWeight:'500',
                        color:'#d5d6db',
                        marginBottom:30,}}>
                        Login
                    </Text>


            {/* line to accept email */}
                    <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{marginRight:5}}/>
                        
                        <TextInput 
                        placeholder='Email ID' 
                        style={{flex:1,
                            paddingVertical:0,
                            color:'#d5d6db'}} 
                        keyboardType="email-address" 
                        />
                    </View>


            {/* line to accept password */}
                    <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{marginRight:5}}/>
                        
                        <TextInput 
                        placeholder='Password' 
                        style={{flex:1,
                            paddingVertical:0,
                            color:'#d5d6db'}} 
                        secureTextEntry={true} 
                    />


            {/* forgot password button */}
                    <TouchableOpacity style={{color:'#6224ad',fontWeight:'700'}}>
                    <Text style={{
                        color:'#d5d6db'}}>
                        Forgot?
                        </Text>
                    </TouchableOpacity>
                    </View>


            {/* login button */}               
                    <TouchableOpacity 
                    style={{backgroundColor:'#6224ad',
                    padding:20,
                    borderRadius:10,
                    marginBottom:30}}>
                        <Text 
                        style={{textAlign:'center',
                        fontWeight:'700',
                        fontSize:16,
                        color:'#d5d6db'}}>
                        Login</Text>
                    </TouchableOpacity>


            {/* register button */}
                    <TouchableOpacity 
                    style={{backgroundColor:'#6224ad',
                    padding:20,
                    borderRadius:10,
                    marginBottom:30}}>
                        <Text 
                        style={{textAlign:'center',
                        fontWeight:'700',
                        fontSize:16,
                        color:'#d5d6db'}}>
                        Register</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
    );
}

{/* background color */}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2a2d36',
    },
});