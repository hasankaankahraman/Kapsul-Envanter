import React from "react";
import { WebView } from 'react-native-webview';
function Home(){
    return(
        <WebView
        source={{ uri: 'https://kapsulteknoloji.org/' }}
        style={{ flex: 1 }}
      />
    )
}

export default Home;