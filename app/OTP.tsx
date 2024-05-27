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
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={images.four} style={styles.backImage} />
          </TouchableOpacity>
          <View>
            <Image source={images.three} style={styles.images} />
            <View style={styles.textWrap}>
              <Text style={styles.title}>
                Mobile Number has Successfully done
              </Text>
              <Text>
                We have sent the OTP to 98786543210. It will be applied
                automatically to the fields.
              </Text>
            </View>
          </View>
          <OTPInput otp={otp} setOtp={setOtp} />
          <Text style={styles.time}>25 Sec</Text>
          <Text>
            If you didn't receive a code{" "}
            <Text style={styles.linkText}>Resend</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onPressVerify}>
          <Text style={styles.buttonText}>Verify & Continue</Text>
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
      style={OTPstyles.input}
      value={item}
      maxLength={1} // Limit input to 1 character
      keyboardType="numeric" // Display numeric keyboard
      ref={(ref) => setInputRef(ref, index)}
      onChangeText={(text) => handleOtpChange(text, index)}
      onKeyPress={(e) => handleKeyPress(e, index)}
    />
  ));

  return <View style={OTPstyles.container}>{inputFields}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
    backgroundColor: "#fff",
  },
  backImage: {
    width: 9,
    height: 19,
    marginLeft: 10,
    marginBottom: 35,
  },
  images: {
    width: 185,
    height: 142,
  },
  textWrap: {
    marginTop: 20,
    flexDirection: "column",
    gap: 10,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(53, 44, 135, 1)",
  },
  time: {
    color: "#999",
    marginVertical: 30,
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

const OTPstyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20,
  },
  input: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(53, 44, 135, 1)",
    padding: 10,
    textAlign: "center",
  },
});
