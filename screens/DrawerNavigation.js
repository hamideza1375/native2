import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Register from "./Register";
import Course from "./Course";
import TopTabNavigator from "./TopTabNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import imagePicker from "./imagePicker";



const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
            <Button onPress={() => navigation.openDrawer()} title="Open Drawer"/>
        </View>
    );
};


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerPosition="left" drawerStyle={{ backgroundColor: "blue", width: 950 }}>
                <Drawer.Screen name="HomeScreen" options={{ title: 'Overview' }} component={HomeScreen} />
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Register" component={Register} />
                <Drawer.Screen name="Course" component={Course} initialParams={{ id: "3", text: "خدانگهدار" }}/>
                <Drawer.Screen name="TopTabNavigator" component={TopTabNavigator} />
                <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
                <Drawer.Screen name="imagePicker" component={imagePicker} />
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigation;
