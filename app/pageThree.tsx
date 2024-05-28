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
import VideoScreen from "@/components/StartVideo";

export default function Screen() {
  const handlePress = () => {
    router.push("pageFour");
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
        <View className="flex flex-col ">
          {/* <VideoScreen/> */}
          <View className="flex  items-center ">
            <View className="mt-5 w-[300px] flex flex-col gap-2  ">
              <Text className="text-indigo-800 text-2xl font-bold text-center ">
                Lorem ipsum dolor site amet
              </Text>
              <Text className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quis dictum magna. Phasellus et aliquam lorem,
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text className="text-white text-lg text-center font-semibold">
            Next
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
