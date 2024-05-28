import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/images";
import { Checkbox } from "expo-checkbox";
import { router } from "expo-router";

export default function OTPScreen() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isCheckedTermsConditions, setIsCheckedTermsConditions] =
    useState(false);
  const [isCheckedPrivacyPolicy, setIsCheckedPrivacyPolicy] = useState(false);

  const handleCheckBoxChangePrivacyPolicy = () => {
    setIsCheckedPrivacyPolicy(!isCheckedPrivacyPolicy);
  };
  const handleCheckBoxChangeTermsConditions = () => {
    setIsCheckedTermsConditions(!isCheckedTermsConditions);
  };
  const handleMobileNumberChange = (text: string) => {
    // Ensure the mobile number contains only digits
    if (/^\d{0,10}$/.test(text)) {
      setMobileNumber(text);
    }
  };

  const handlePress = () => {
    router.push("pageTwo");
  };

  return (
    <SafeAreaView className="h-full  bg-white ">
      <ScrollView
        className="h-full w-full flex flex-col p-4 bg-white "
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View>
            <Image source={images.one} className="w-56 h-56" />
            <Text className="text-2xl font-bold text-indigo-800 mb-4">
              Continue With your Mobile Number
            </Text>
          </View>
          <View>
            <Text className="text-md mb-3">Phone Number</Text>
            <View className="flex flex-row items-center h-12 border border-indigo-800 rounded-lg px-2">
              <View  className="flex flex-row items-center mr-2">
                <Image source={images.two}  className="w-5 h-3 rounded-sm mr-1" />
                <Text  className="text-lg py-2 ">+91</Text>
                <Text className="border-r-[1px] border-gray-500 ml-2 "></Text>
              </View>
              <TextInput
                className="flex-1 text-lg py-2"
                placeholder="Enter Mobile Number"
                onChangeText={handleMobileNumberChange}
                keyboardType="numeric"
                value={mobileNumber}
                maxLength={10}
              />
            </View>
          </View>
          <View className="mt-4 flex flex-col justify-center gap-2">
            <View 
            className="flex flex-row items-center "
            >
              <Checkbox
                value={isCheckedTermsConditions}
                onValueChange={handleCheckBoxChangeTermsConditions}
                style={styles.checkbox}
                color={isCheckedTermsConditions ? "#4630EB" : undefined}
              />
              <Text  className="text-md">
                I have agreed with your{" "}
                <Text 
                className="text-indigo-800 font-bold">Terms</Text> &{" "}
                <Text   className="text-indigo-800 font-bold">Conditions</Text>
              </Text>
            </View>
            <View  className="flex flex-row items-center "
            >
              <Checkbox
                value={isCheckedPrivacyPolicy}
                onValueChange={handleCheckBoxChangePrivacyPolicy}
                style={styles.checkbox}
                color={isCheckedPrivacyPolicy ? "#4630EB" : undefined}
              />
              <Text className="text-md">
                I have agreed with your{" "}
                <Text  className="text-indigo-800 font-bold">Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text className="text-white text-lg text-center font-semibold">Send OTP</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    marginRight: 12,
    width: 15,
    height: 15,
  },
  button: {
    backgroundColor: "rgba(53, 44, 135, 1)",
    borderRadius: 999,
    paddingVertical: 14,
    marginTop: 16,
    marginBottom: 16,
  }
});
