import { StyleSheet,Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');


export default StyleSheet.create({
    button:{
        backgroundColor:'#0f0a28',
        borderRadius:10,
        padding:10,
        alignItems:'center',
        borderColor:'#02b5ff',
        borderWidth:1,
        marginHorizontal:width/10,
    },
    buttontext:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:20
    },
})