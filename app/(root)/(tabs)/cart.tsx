import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  return (
    <SafeAreaView className="px-1 flex-1">
      <View>
        <Text>Cart</Text>
      </View>

      <View className="pb-[100px]"/>
    </SafeAreaView>
  );
}
