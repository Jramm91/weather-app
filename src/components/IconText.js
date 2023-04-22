import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyles, size } = props
    const { textTheme, container } = styles
    return (
        <View style={container}>
        <Feather name={iconName} size={size} color={iconColor} />
        <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )    
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center'
    }
})

export default IconText