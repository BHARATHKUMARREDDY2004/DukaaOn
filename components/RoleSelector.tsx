import type React from "react"
import { View, Text } from "react-native"
import CustomButton from "./CustomButton"

interface RoleSelectorProps {
  onSelectRole: (role: "retailer" | "wholesaler") => void
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  return (
    <View className="w-full px-5 pt-0 pb-6">
      <Text className="text-2xl font-pbold text-gray-600 text-center mb-4">Choose your role</Text>
      <CustomButton
        title="Retailer"
        onPress={() => onSelectRole("retailer")}
        textStyle="text-white text-lg font-pbold"
        className="mb-4 bg-orange"
      />
      <CustomButton
        title="Wholesaler"
        onPress={() => onSelectRole("wholesaler")}
        textStyle="text-white text-lg font-pbold"
        className="bg-orange"
      />
    </View>
  )
}

export default RoleSelector

