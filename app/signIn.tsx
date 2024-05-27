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
    router.push("OTP");
  };

  return (
    <SafeAreaView className="h-full  bg-white ">
      <ScrollView
        className="h-full w-full flex flex-col p-4"
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
            <Text className="">Phone Number</Text>
            <View style={styles.inputContainer}>
              <View style={styles.prefixContainer}>
                <Image source={images.two} style={styles.flagIcon} />
                <Text style={styles.prefixText}>+91</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter Mobile Number"
                onChangeText={handleMobileNumberChange}
                keyboardType="numeric"
                value={mobileNumber}
                maxLength={10}
              />
            </View>
          </View>
          <View style={styles.checkboxWrapper}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={isCheckedTermsConditions}
                onValueChange={handleCheckBoxChangeTermsConditions}
                style={styles.checkbox}
                color={isCheckedTermsConditions ? "#4630EB" : undefined}
              />
              <Text style={styles.checkboxLabel}>
                I have agreed with your{" "}
                <Text style={styles.linkText}>Terms</Text> &{" "}
                <Text style={styles.linkText}>Conditions</Text>
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={isCheckedPrivacyPolicy}
                onValueChange={handleCheckBoxChangePrivacyPolicy}
                style={styles.checkbox}
                color={isCheckedPrivacyPolicy ? "#4630EB" : undefined}
              />
              <Text style={styles.checkboxLabel}>
                I have agreed with your{" "}
                <Text style={styles.linkText}>Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   height: "100%",
  //   padding: 16,
  //   backgroundColor: "#fff",
  // },
  // images: {
  //   width: 200,
  //   height: 200,
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   color: "rgba(53, 44, 135, 1)",
  //   marginBottom: 16,
  // },
  label: {
    fontSize: 14,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderWidth: 1,
    borderColor: "rgba(53, 44, 135, 1)",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  prefixContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  flagIcon: {
    width: 18,
    height: 12,
    borderRadius: 1,
    marginRight: 4,
  },
  prefixText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  checkboxWrapper: {
    marginTop: 16,
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 12,
    width: 15,
    height: 15,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  linkText: {
    color: "rgba(53, 44, 135, 1)",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgba(53, 44, 135, 1)",
    borderRadius: 999,
    paddingVertical: 14,
    marginTop: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
});
