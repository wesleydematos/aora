import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <Link href="/home" className="mt-28 text-blue-500">
        Go to home!
      </Link>
      <StatusBar style="inverted" />
    </View>
  );
}
