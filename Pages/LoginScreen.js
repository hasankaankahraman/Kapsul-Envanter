import React, { useState } from "react";
import { ImageBackground,View,Image,StyleSheet,Text,Dimensions,Alert} from "react-native";

const { height, width } = Dimensions.get('window');

import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import Button2 from "../Components/Button2/Button2";


function Login({navigation}){

    const[userName,setUserName]= useState('');
    const[password,setPassword]=useState('');


    function handleSubmit(){
        if(!userName){
            Alert.alert('KAPSÜL','Kullanıcı Adı boş bırakılamaz!');
        }
        else if(!password){
            Alert.alert('KAPSÜL','Şifre boş bırakılamaz!');
        }
        else{
            const user ={
                userName,
                password
            }
            navigation.navigate('Info',{screen:'Profil',params:{user}})
        }
    }

    return(
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={require('../Images/2.png')}/>
            </View>
            <View>
                <Text style={styles.title}>KAPSÜL ENVANTER KONTROL SİSTEMİ</Text>
            </View>
            <View style={styles.card}>
            <Input 
            label={"Kullanıcı Adı"}
            yazialani={""}
            onChangeText={setUserName}
            />
            <Input 
            label={"Kullanıcı Şifresi"}
            yazialani={""}
            onChangeText={setPassword}
            />
            </View>
            <View>
                <Button text="Giriş" onPress={handleSubmit}/>
            </View>
            <View>
                <Button2 text="Şifrenizi mi unuttunuz ?" onPress={() => navigation.navigate('Forgot')}/>
            </View>
            <View>
                <Button2 text="Yeni Hesap Oluştur" onPress={() => navigation.navigate('Register')}/>
            </View>
        </View>
    )
}
export default Login;

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
    fontSize:20,
    paddingBottom:50
  },

})