import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import ResultIMC from "./ResutIMC";
import styles from "./style.js"

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight,setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc() {
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é:")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e altura")
    }
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex.: 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex.: 75.55"
                keyboardType="numeric"
                ></TextInput>
                <Button
                onPress={() => validationImc()}
                title={textButton}
                 />
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc}/>
        </View>
    )
}