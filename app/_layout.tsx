import "../global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}> */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="pageOne" options={{ headerShown: false }} />
        <Stack.Screen name="pageTwo" options={{ headerShown: false }} />
        <Stack.Screen name="pageThree" options={{ headerShown: false }} />
        <Stack.Screen name="pageFour" options={{ headerShown: false }} />
        <Stack.Screen name="pageFive" options={{ headerShown: false }} />
        <Stack.Screen name="pageSix" options={{ headerShown: false }} />
        <Stack.Screen name="pageSeven" options={{ headerShown: false }} />
        <Stack.Screen name="pageEight" options={{ headerShown: false }} />
        <Stack.Screen name="pageNine" options={{ headerShown: false }} />
      </Stack>
      {/* </ThemeProvider> */}
    </GestureHandlerRootView>
  );
}
