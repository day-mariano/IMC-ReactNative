import { View, Text } from "react-native"
import React from "react"
import styles from "./style.js"

export default function Title() {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculadora de IMC</Text>
        </View>
    )
}