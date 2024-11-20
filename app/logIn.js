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

export default function LogInScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        style={logIn.backButton}
        onPress={() => router.navigate("landing")}
      >
        <FontAwesome5 name="chevron-left" size={25} color={colours.darkGrey} />
      </Pressable>
      <Text style={styles.titleText}>Orbit</Text>
      <View style={logIn.interactionContainer}>
        <FormInput
          title={"Username"}
          text={username}
          onChangeText={setUsername}
        />
        <FormInput
          title={"Password"}
          text={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {/* Invisible boxes to take up space */}
        <View style={{ flex: 0, height: 60, width: 320 }}></View>
        <View style={{ flex: 0, height: 60, width: 320 }}></View>
        <PrimaryButton text={"Log In"} />
        <View style={logIn.textContainer}>
          <Text
            style={[
              styles.smallText,
              { color: colours.darkGrey, textAlign: "center" },
            ]}
          >
            Don’t have an account?
          </Text>
          <Link
            href="signUp"
            style={[
              styles.smallText,
              {
                color: colours.purple,
                textAlign: "center",
                fontWeight: "bold",
              },
            ]}
          >
            Sign Up
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

const logIn = StyleSheet.create({
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
