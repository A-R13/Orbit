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

import styles from "@styles";
import colours from "@colours";

export default function LogInScreen() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Pressable
        style={logIn.backButton}
        onPress={() => router.navigate("landing")}
      >
        <FontAwesome5 name="chevron-left" size={25} color={colours.darkGrey} />
      </Pressable>
      <Text style={[styles.titleText, { marginBottom: 64 }]}>Orbit</Text>
      <View style={logIn.interactionContainer}>
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
        style={{ width: "100%", position: "absolute", bottom: 0 }}
        source={require("assets/Landing.png")}
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
