import { SafeAreaView, Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "@styles";
import PrimaryButton from "components/PrimaryButton";
import SecondaryButton from "components/SecondaryButton";

export default function LandingScreen() {
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
      <Text style={[styles.titleText, { marginBottom: 64 }]}>Orbit</Text>
      <View style={{ rowGap: 16 }}>
        <PrimaryButton text={"Log in"} onPress={() => router.push("logIn")} />
        <SecondaryButton
          text={"Sign Up"}
          onPress={() => router.push("signUp")}
        />
      </View>
      <Image
        style={{ width: "100%", position: "absolute", bottom: 0 }}
        source={require("assets/Landing.png")}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
