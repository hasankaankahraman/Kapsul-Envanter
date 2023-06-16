import React from "react";
import { View,Text,Image,StyleSheet} from "react-native";


function Splash ({navigation}){
  setTimeout(() => {navigation.replace('Login')},2000); // Componenti alıyor login.
  return(
    <View style={styles.container}>
            <View style={styles.logo}>
            <Image style={styles.image} source={require('../Images/2.png')} />
            </View>
    </View>
  )
}
export default Splash;

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#0f0a28'
  },
  logo:{
      justifyContent:'center',
      alignItems:'center',
  },
  image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },

})