import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";



const AccountScreen = ({ navigation }) => {

    const [getImage, setImage] = useState(null);

    useEffect(() => {
        const loadingImage = async () => {
            const imageUri = await AsyncStorage.getItem("Image");
            if (imageUri !== null) {
                setImage(imageUri);
            }
        };
        loadingImage();
    }, []);


    // const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });
    //     console.log(result);
    // if (!result.cancelled) { setImage(result.uri) }
    // };


    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            await AsyncStorage.setItem("Image", result.uri);
            setImage(result.uri);
        }
    };



    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={pickImage}>
                    <Image style={styles.image} source={require("../assets/bg1.jpg")}/>
                  {getImage && ( <Image source={{ uri: getImage }} style={styles.image} /> )}
                </TouchableOpacity>
            </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 35,
    },
});
