import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import styles from './styles';

export default function Header(){
    return(
        <View style = {styles.viewHeader}>
            <TouchableOpacity>
                <Ionicons style = {{marginLeft:-72}} name="ios-menu" size={36} color="white" />
            </TouchableOpacity>
            <Text style = {styles.textHeader}> TEC FILMES </Text>
        </View>
    );
}