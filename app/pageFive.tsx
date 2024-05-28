import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { images } from "../constants/images";

export default function Screen() {
  const handlePress = () => {
    router.push("pageSix");
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
        <View className="w-full flex flex-row items-center py-2 gap-5 mb-2 border-b border-gray-100">
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={images.four} className="w-5 h-5 " />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-gray-500">
            Create Account
          </Text>
        </View>
        <View className="flex flex-1 flex-col items-center ">
          <View className="flex items-center justify-center ">
            <Image source={images.eight} className="w-72 h-48" />
            <View className="mt-5 w-[300px] flex flex-col gap-2 ">
              <Text className="text-indigo-800 text-2xl font-bold  ">
                Create an account
              </Text>
              <Text>Please fill in the information below </Text>
            </View>
          </View>
          <CustomInput />
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

function CustomInput({
  handleChange,
  value,
}: {
  handleChange: () => {};
  value: () => {};
}) {
  return (
    <View>
      <Text className="text-md mb-3">Phone Number</Text>
      <TextInput
        className="flex-1 text-lg py-2"
        placeholder="Name"
        onChangeText={handleChange}
        keyboardType="numeric"
        value={value}
        maxLength={10}
      />
    </View>
  );
}
