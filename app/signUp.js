import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { useRouter, Link } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import PrimaryButton from "components/PrimaryButton";
import FormInput from "components/FormInput";

import styles from "@styles";
import colours from "@colours";

export default function SignUpScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colours.white,
        },
      ]}
    >
      <Pressable
        style={signUp.backButton}
        onPress={() => router.navigate("landing")}
      >
        <FontAwesome5 name="chevron-left" size={25} color={colours.darkGrey} />
      </Pressable>
      <Text style={styles.titleText}>Orbit</Text>
      <View style={signUp.interactionContainer}>
        <FormInput
          title={"Username"}
          text={username}
          onChangeText={setUsername}
        />
        <FormInput title={"Email"} text={email} onChangeText={setEmail} />
        <FormInput
          title={"Password"}
          text={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <FormInput
          title={"Confirm password"}
          text={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />

        <PrimaryButton
          text={"Sign Up"}
          onPress={() => router.navigate("home")}
        />
        <View style={signUp.textContainer}>
          <Text
            style={[
              styles.smallText,
              { color: colours.darkGrey, textAlign: "center" },
            ]}
          >
            Already have an account?
          </Text>
          <Link
            href="logIn"
            style={[
              styles.smallText,
              {
                color: colours.purple,
                textAlign: "center",
                fontWeight: "bold",
              },
            ]}
          >
            Log In
          </Link>
        </View>
      </View>
      <Image
        style={{ position: "absolute", bottom: 0, left: 0 }}
        source={require("assets/Landing2.png")}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const signUp = StyleSheet.create({
  backButton: {
    height: 50,
    width: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.grey,
    borderRadius: 25,
    position: "absolute",
    top: 64,
    left: 32,
    ...styles.dropShadow,
  },
  interactionContainer: {
    rowGap: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    columnGap: 8,
  },
});
