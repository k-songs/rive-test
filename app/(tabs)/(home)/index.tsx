import { Text, View, TouchableOpacity ,StyleSheet} from "react-native";
import { usePathname, useRouter } from "expo-router";
import {SafeAreaView} from 'react-native-safe-area-context'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {BlurView} from 'expo-blur'



export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
    const insets =useSafeAreaInsets();
    const isLoggedIn = false;



  console.log("pathname", pathname);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.tabContainer}>

 
        <TouchableOpacity onPress={() => router.navigate(`/`)}>
          <Text style={{ color: pathname === "/" ? "red" : "black" }}>
            For you
          </Text>
        </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.navigate(`/following`)}>
          <Text style={{ color: pathname === "/" ? "black" : "red" }}>
            Following
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@zerocho/post/1`)}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@zerocho/post/2`)}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@zerocho/post/3`)}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    tabContainer:{
        flexDirection:"row"
    },
    tab:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})