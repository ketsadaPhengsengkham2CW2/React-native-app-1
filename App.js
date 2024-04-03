import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
} from "react-native";
import React,{ useState } from "react";
//import Spinner from 'react-native-loading-spinner-overlay';
//https://aboutreact.com/image-icon-inside-the-react-native-button/

const App = () => {
  const handlerLongClick = () => {
    //handler for Long Click
    alert("Button Long Pressed");
  };

  const handlerClick = () => {
    //handler for Long Click
    alert("Button Pressed");
  };

  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    
      <View style={styles.container}>
      <View
        activeOpacity={0.6}
        style={styles.text}
        onPress={handlerClick}
        onLongPress={handlerLongClick}
        onStartShouldSetResponder={() => alert("View Click")}
      >
        
       <Text style = {styles.exam}> Example of Click on a View!!</Text>
      </View>

      <TouchableOpacity
        onLongPress={handlerLongClick}
        onPress={handlerClick}
        activeOpacity={0.6}
        style={styles.buttonStyle}
      >
        <Text style={styles.TextStyle}>LONG PRESS THE BUTTON</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Numeric Values Only"
        placeholderTextColor="#60605e"
        numeric
        keyboardType={"numeric"}
      />

      <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png",
          }}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png",
          }}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Text style={styles.name}> ທ້າວ ເກດສະດາ ເພັງແສງຄຳ ຫ້ອງ 2CW2</Text>
    </View>
   
  
    
  );
};
export default App;
const styles = StyleSheet.create({
  name: {
    color: '#fff',
    fontSize:20,
    marginTop:30,
    textAlign:"center",
  },
  TextStyle: {
    color:'yellow',
    marginBottom:30,
    textAlign:"center",
    fontSize:18,
  },
  container: {
    flex: 1,
    backgroundColor: "#0fbf18",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "gold",
    padding: 5,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  buttonStyle: {
    color: "maroom",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "100",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  buttonGPlusStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dc4e41",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    width: 220,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 10,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 2,
    height: 40,
  },
  textInputStyle: {
    width: 380,
    backgroundColor: "#dde8c9",
    padding: 16,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  exam: {
    marginBottom:35,
    color: '#fff',
    fontSize:25,
    
  },
});
