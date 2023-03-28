import React from 'react'
import { TextInput, View, TouchableOpacity } from "react-native";
import style from "./style"

export default function Search(){
    return(
        <View style = {style.containerSeach}>
            <TextInput
            placeholder="Digite o filme desejado"
            style = {style.inputSearch}
            >
            </TextInput>
        </View>
    );
}