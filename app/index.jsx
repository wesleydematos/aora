import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        Go to profile!
      </Link>
      <StatusBar style="inverted" />
    </View>
  );
}
