import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Screen() {
  const handlePress = () => {
    router.push("pageFive");
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="h-full  flex flex-col p-4 bg-white "
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View className="flex flex-1 flex-col items-center ">
          <View className="flex items-center justify-center relative">
            <Image
              source={require("../assets/images/done.gif")}
              style={{
                transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
                width: 200,
              }}
            />
            <View className="mt-5 w-[300px] flex flex-col items-center gap-2 absolute bottom-16  ">
              <Text className="text-indigo-800 text-2xl font-bold text-center ">
                You are Successfully verified
              </Text>
              <Text className="text-center w-48">
                Your Account is Verified Let's Start
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text className="text-white text-lg text-center font-semibold">
            Create Account{" "}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(53, 44, 135, 1)",
    borderRadius: 999,
    paddingVertical: 14,
    marginTop: 16,
    marginBottom: 16,
  },
});
