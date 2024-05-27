import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { images } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push("signIn");
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#352C87", "#834E9A", "#A74C7E", "#D32D30"]}
        style={styles.backgroundGradient}
      >
        <ImageBackground
          source={images.five}
          resizeMode="contain"
          style={styles.backgroundImage}
        ></ImageBackground>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
              <Image source={images.six} style={styles.logo} />
            </View>
            <View style={styles.homeWrapper}>
              <Image source={images.seven} style={styles.homepic} />
              <Text style={styles.description}>
                A Whole Grocery Story at your Fingertips
              </Text>
              <TouchableOpacity style={styles.version}>
                <Text style={styles.versionText}>1.1.2</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  backgroundGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  backgroundImage: {
    zIndex: -1,
    transform: [{ rotate: "90deg" }, { scaleX: 2 }, { scaleY: 1.6 }],
    width: "100%",
    height: "100%",
    opacity: 0.8,
    position: "absolute",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    width: "89%",
  },
  imageWrapper: {
    marginTop: 50,
    marginBottom: 50,
  },
  logo: {
    transform: [{ scale: 0.5 }],
  },
  homeWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  homepic: {
    width: 360,
    height: 250,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: 182,
    height: 48,
  },
  version: {
    backgroundColor: "rgba(253, 253, 253, 0.1)",
    paddingVertical: 14,
    width: 400,
  },
  versionText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
});
