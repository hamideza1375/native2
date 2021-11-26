import React from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Course from "./Course";
import Register from "./Register";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        // <View >
        <Tab.Navigator
            initialRouteName="Course"
            backBehavior="none"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Register") {
                        iconName = focused ? "library" : "school";
                    } else if (route.name === "Course") {
                        iconName = focused
                            ? "account-circle"
                            : "account-circle-outline";
                    } 

                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
                activeBackgroundColor: "light",
                labelStyle: {
                    fontFamily: "ih",
                    fontSize: RFPercentage(1.5),
                }}}>
            <Tab.Screen
                name="Register"
                component={Register}
                options={{  tabBarLabel: "Register", tabBarBadge: 3 }}
            />
            <Tab.Screen
                name="Course"
                component={Course}
                options={{ tabBarLabel: "Course" }}
                initialParams={{ id: "3", text: "خدانگهدار" }}
            />
        </Tab.Navigator>
        //  </View>
    );
};

export default BottomTabNavigator;
