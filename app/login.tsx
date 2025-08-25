import { Redirect ,router} from "expo-router";
import { View, Text,Pressable,StyleSheet,Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//import * as SecureStore from "expo-secure-store"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const insets =useSafeAreaInsets();
  const isLoggedIn = false;


  const onLogin =()=>{
    console.log("Login")
    fetch("./login",{
        method:"POST",
        body:JSON.stringify({
            username:"zerocho",
            password:"1234",
        }),
    })
    .then((res) =>{ // Changed comma to .then
        console.log("res",res,res.status        )
        if(res.status >=400){
            return Alert.alert("Error","Invalid credentials")
        }
        return res.json();
    })
    .then((data)=>{
        console.log("data",data);
        AsyncStorage.setItem('user',JSON.stringify(data.user))
        router.push("/(tabs)")
    })
    .catch((error)=>
    {
        console.error(error);
    })
  }
  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}