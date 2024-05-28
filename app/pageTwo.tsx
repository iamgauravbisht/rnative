import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/images";
import { router } from "expo-router";

export default function OTPScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const onPressVerify = () => {
    const collectedOtp = otp.join("");
    Alert.alert("Collected OTP", collectedOtp);
    router.push("pageThree");
  };

  return (
    <SafeAreaView 
    className="h-full"
    >
      <ScrollView
        contentContainerStyle={{
          flex:1,
          justifyContent: "space-between",
        }}
        className="bg-white h-full p-4 flex flex-col"
      >
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={images.four} 
            className="w-5 h-5 ml-3 mb-8"
            />
          </TouchableOpacity>
          <View>
            <Image source={images.three} 
            className="w-48 h-40" />
            <View 
            className="mt-5 flex flex-col gap-2 "
            >
              <Text className="text-indigo-800 text-2xl font-bold w-60 ">
                Mobile Number has Successfully done
              </Text>
              <Text>
                We have sent the OTP to 98786543210. It will be applied
                automatically to the fields.
              </Text>
            </View>
          </View>
          <OTPInput otp={otp} setOtp={setOtp} />
          <Text className="text-slate-500 my-7">25 Sec</Text>
          <Text>
            If you didn't receive a code{" "}
            <Text className="text-indigo-800 font-bold">Resend</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onPressVerify}>
          <Text className="text-white text-lg text-center font-semibold">Verify & Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

interface OTPInputProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

const OTPInput: React.FC<OTPInputProps> = ({ otp, setOtp }) => {
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp]; // Copy the current OTP state
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 3) {
      const nextIndex = index + 1;
      const nextInput = inputs.current[nextIndex];
      nextInput?.focus(); // Focus the next input box
    }
  };

  const deletingOtp = (index: number) => {
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      const previousInput = inputs.current[previousIndex];
      previousInput?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      deletingOtp(index);
    }
  };

  const setInputRef = (ref: TextInput | null, index: number) => {
    inputs.current[index] = ref;
  };

  const inputFields = otp.map((item, index) => (
    <TextInput
      key={index}
      className="w-12 h-14 border border-indigo-800 text-center rounded-lg "
      value={item}
      maxLength={1} 
      keyboardType="numeric" 
      ref={(ref) => setInputRef(ref, index)}
      onChangeText={(text) => handleOtpChange(text, index)}
      onKeyPress={(e) => handleKeyPress(e, index)}
    />
  ));

  return <View  className="flex flex-row gap-4 mt-5 ">{inputFields}</View>;
};

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: "rgba(53, 44, 135, 1)",
    borderRadius: 999,
    paddingVertical: 14,
    marginTop: 16,
    marginBottom: 16,
  },
  
});


