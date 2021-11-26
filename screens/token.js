import jwt from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigationState } from "@react-navigation/native";


// useEffect(() => {

    const myFunc = (async () => {
        const token = await AsyncStorage.getItem("token");
        console.log(jwt(token));
    })()

    

if (token !== null) {
    const decodedToken = jwt(token);
    console.log(decodedToken);
}

    // }, []);



useEffect(() => {
    const checkForNet = async () => {
        // await AsyncStorage.removeItem("token");
        // await AsyncStorage.removeItem("userId");
        const state = await NetInfo.fetch();
        if (!state.isConnected) confirmationAlert();
        else {
            const token = await AsyncStorage.getItem("token");
            const userId = JSON.parse(await AsyncStorage.getItem("userId"));

            if (token !== null && userId !== null) {
                const decodedToken = decodeToken(token);
                console.log(decodedToken);
                console.log(userId);

                if (decodedToken.user.userId === userId)
                    // navigation.navigate("Home");
                    navigation.dispatch(StackActions.replace("Home"));
                else {
                    await AsyncStorage.removeItem("token");
                    await AsyncStorage.removeItem("userId");
                    navigation.navigate("Login");
                }
            }
        }
    };
    checkForNet();
}, []);






const screenIndex = useNavigationState((state) => state.index);
useEffect(() => {
    let currentCount = 0;
    console.log(screenIndex);

    if (screenIndex <= 0) {
        BackHandler.addEventListener("hardwareBackPress", () => {
            if (currentCount === 1) {
                BackHandler.exitApp();
                return true;
            }

            currentCount += 1;
            customToast("برای خروج دوباره دکمه برگشت را لمس بنمایید");

            setTimeout(() => {
                currentCount = 0;
            }, 1000);

            return true;
        });
    }
}, []);