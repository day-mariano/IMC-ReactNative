import { View, Text } from "react-native"
import React from "react"

export default function ResultIMC(props) {
    return(
        <View>
            <Text>{props.resultIMC}</Text>
            <Text>{props.MessageResultIMC}</Text>
        </View>
    )
}