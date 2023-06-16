import React from "react";
import { View,Text } from "react-native";

function Profile({route}){

    const {user} = route.params;
    return(
        <View>
            <Text>{user.userName}</Text>
            <Text>{user.password}</Text>
        </View>
    )
}

export default Profile;