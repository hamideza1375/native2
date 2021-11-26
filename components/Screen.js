import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

const Screen = ({ children, style }) => {
    return (
        <View style={[styles.container, { style }]}>
            {children}
        </View>
    )
}

export default Screen




const styles = StyleSheet.create({
    container: {
        default: {
            overflowx: 'hidden',
            marginTop: StatusBar.currentHeight,
            padding: 10,
        },
    },
});
