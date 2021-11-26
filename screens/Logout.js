import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
    navigation.dispatch(StackActions.replace("Welcome"));
};