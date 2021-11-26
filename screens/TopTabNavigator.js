import React from "react";
import { View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Course from "./Course";
import Register from "./Register";

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <View>
            <TopTab.Navigator
                initialRouteName="Course"
                backBehavior="none"
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                    labelStyle: {
                        fontFamily: "ih",
                        fontSize: RFPercentage(1.5),
                    },
                    style: { backgroundColor: "#f8f4f4" },
                }}
            >
                <TopTab.Screen
                    name="Course"
                    component={Course}
                    options={{ tabBarLabel: "Course" }}
                    initialParams={{ id: "3", text: "خدانگهدار" }}
                />
                <TopTab.Screen
                    name="Register"
                    component={Register}
                    options={{ tabBarLabel: "Register" }}
                />
            </TopTab.Navigator>
        </View>
    );
};

export default TopTabNavigator;
