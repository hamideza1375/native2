import React, { useState, useEffect } from "react";
import { I18nManager } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-Loading";
import DrawerNavigation from "./screens/DrawerNavigation";
import AnimatedSplash from "react-native-animated-splash-screen";



I18nManager.allowRTL(true);
I18nManager.forceRTL(true);


const getFonts = () =>
    Font.loadAsync({
        yekan: require("./assets/fonts/byekan.ttf"),
        ih: require("./assets/fonts/ih.ttf"),
    });


export default function App() {

    const [fontLoading, setFontLoading] = useState()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    if (fontLoading) {
        return (
            <AnimatedSplash
                translucent={true}
                isLoaded={loading}
                logoImage={require("./assets/logo.png")}
                backgroundColor={"#262626"}
                logoHeight={250}
                logoWidth={250}
            >

                <DrawerNavigation />

            </AnimatedSplash>
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontLoading(true)}
                onError={console.warn}
            />
        );
    }

}



