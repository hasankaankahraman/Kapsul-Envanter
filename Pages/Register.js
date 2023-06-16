import React from "react";
import { View,Text,Image,StyleSheet,Dimensions} from "react-native";

const { height, width } = Dimensions.get('window');


import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";

function Register({navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../Images/2.png')}/>
            <Input 
            label={"E-Postanızı Giriniz"}
            yazialani={""}
            />
            <Input 
            label={"Telefon Numaranızı Giriniz"}
            yazialani={""}
            />
            <Input 
            label={"Kullanıcı Adınızı Belirleyiniz"}
            yazialani={""}
            />
            <View>
                <Button text="Kayıt ol" onPress={() => navigation.goBack()}/>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0f0a28',  }, 
    image: {
        borderColor:'#fff',
        borderWidth:0,
        width:200,
        height:200,
        marginTop:width/5,
        marginLeft:height/8
        
    },
    card:{
      borderRadius:10,
      borderColor:'#25addc',
      borderWidth:3,
      marginHorizontal:width/10,
      padding:10,
      marginBottom:10
    },
    title:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:15,
      marginTop:20,
      
    },
  
  })