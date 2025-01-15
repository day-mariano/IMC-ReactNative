import React from "react";
import { View, Text, TextInput, Button } from "react-native"
import ResultIMC from "./ResutIMC";

export default function Form() {
    return(
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                placeholder="Ex.: 1.75"
                keyboardType="numeric"
                ></TextInput>
                <Text>Peso</Text>

                <TextInput
                placeholder="Ex.: 75.55"
                keyboardType="numeric"
                ></TextInput>
                <Button title="Calcular IMC"/>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
            <View></View>
            <View></View>
        </View>
    )
}