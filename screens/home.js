import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from "react-native";



export default function Home({navigation}) {

    return (
 <ImageBackground source={require("../assets/bg4.jpg")} blurRadius={3.3} style={styles.ImageBackground}>             

            <Image style={styles.tinyLogo} source={require('../assets/logo.png')} />


            <TouchableOpacity style={[styles.button, { marginBottom: 30 }]} onPress={() => navigation.navigate("Course")}>
                <Text>صفحه ی اصلی</Text>
            </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor:'green'}]} onPress={() => navigation.navigate("Register")}>
            <Text>صفحه ی ثبت نام</Text>
        </TouchableOpacity> 

            <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => navigation.navigate("TopTabNavigator")}>
                <Text>TopTabNavigator</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => navigation.navigate("BottomTabNavigator")}>
                <Text>BottomTabNavigator</Text>
            </TouchableOpacity>
 </ImageBackground>   
        
    );
}


const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "end",
    },
        button: {
        backgroundColor: "yellow",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "90%",
        marginVertical: 5,
        marginBottom:60,
    },
    tinyLogo: {
        width: 300,
        height: 230,
        position:'absolute',
        top:100,
    },
});
