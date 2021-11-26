import AsyncStorage from "@react-native-async-storage/async-storage";
import http from "./";



export const loginUser = async (user) => {
    try {
        const { data, status } = await http.post(`${http.url}/login`, JSON.stringify(user));
        await AsyncStorage.setItem("token", JSON.stringify(data.token));
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        return status;
    } catch (err) {
        console.log(err);
    }
};
