import React, { useEffect } from "react";
import { Text, View, Button, ImageBackground, Image } from "react-native";
import { router } from "expo-router";
import { images } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("signIn");
  //   }, 3000);
  // }, []);

  return (
    <SafeAreaView className="h-full">
      <LinearGradient
        colors={["#352C87", "#834E9A", "#A74C7E", "#D32D30"]}
        className="h-full w-full flex justify-center items-center opacity-60"
      >
        <ImageBackground
          source={images.five}
          resizeMode="contain"
          style={{
            transform: [{ rotate: "90deg" }, { scaleX: 2 }, { scaleY: 1.6 }],
          }}
          className="-z-10 w-full h-full absolute opacity-80 "
        />
        <View className="flex-1 flex justify-center items-center m-0 w-full">
          <View className="mb-16 mt-24">
            <Image source={images.six} className="scale-50" />
          </View>
          <View className="flex-1 w-full items-center justify-between ">
            <View className="flex gap-6 justify-center items-center">
              <Image source={images.seven} className=" w-72 h-72 " />
              <View>
                <Text className="text-center text-white font-bold text-lg">
                  A Whole Grocery Story
                </Text>
                <Text className="text-center text-white font-bold text-lg">
                  at your Fingertips
                </Text>
              </View>
            </View>
            <Text className="w-full flex justify-center items-center py-5  bg-slate-100/10  text-white text-lg text-center font-bold">
              1.1.2
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
