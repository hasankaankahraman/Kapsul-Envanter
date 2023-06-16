import { StyleSheet,Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    button:{
        borderRadius:10,
        padding:10,
        alignItems:'center',
        marginHorizontal:width/10,
    },
    buttontext:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:15
    },
})