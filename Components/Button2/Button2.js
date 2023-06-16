import React from "react";
import {TouchableOpacity,Text} from "react-native";

import styles from "./Button2.style";


const Button2 = ({text,onPress}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttontext}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button2;