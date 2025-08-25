import { Stack } from "expo-router";


interface User {
  id:string; name:string; description:string; profileImageUrl:string;
}


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
  
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}