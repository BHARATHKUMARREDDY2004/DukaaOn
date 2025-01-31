// import { View, Text, ScrollView } from "react-native"
// import InputField from "@/components/InputField"
// import CustomButton from "@/components/CustomButton"
// import OTPModal from "@/components/OTPModal"
// import SuccessModal from "@/components/SuccessModal"
// import RoleSelector from "@/components/RoleSelector"
// import { useState } from "react"
// import { router } from "expo-router"
// import { useStore } from "@/store"

// const SignUp = () => {
//   const [phone, setPhone] = useState("")
//   const [showOtpModal, setShowOtpModal] = useState(false)
//   const [showSuccessModal, setShowSuccessModal] = useState(false)
//   const [step, setStep] = useState<"role" | "phone">("role")

//   const { setUserRole, userRole } = useStore()

//   const handleRoleSelect = (role: "retailer" | "wholesaler") => {
//     setUserRole(role)
//     setStep("phone")
//   }

//   const handleSignUp = () => {
//     setShowOtpModal(true)
//   }

//   const handleVerifyOtp = (otp: string) => {
//     console.log("Verifying OTP:", otp)
//     setShowOtpModal(false)
//     setShowSuccessModal(true)
//   }

//   const handleSuccess = () => {
//     setShowSuccessModal(false)
//     if (userRole === "retailer") {
//       router.replace("/(retailer)/(tabs)/home")
//     } else if (userRole === "wholesaler") {
//       router.replace("/(wholesaler)/(tabs)/home");
//     } else {
//       console.error("User role not set")
//       // TODO: error handing for not selecting any role.
//       setStep("role")
//     }
//   }

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-orange-200">
//       <View className="flex-1 flex-col justify-evenly">
//         {/* Logo and Tagline */}
//         <View className="items-center justify-center h-[65%]">
//           <View className="flex flex-row items-center bg-black/30 rounded-2xl p-4 mb-4">
//             <Text className="text-2xl font-pbold text-white">dukaa</Text>
//             <Text className="text-2xl font-pbold text-orange">On</Text>
//           </View>
//           <Text className="text-xl font-pmedium text-gray-200 text-center">Keeping your business going on ...</Text>
//         </View>

//         {/* Role Selection or Sign Up/Sign In */}
//         {step === "role" ? (
//           <RoleSelector onSelectRole={handleRoleSelect} />
//         ) : (
//           <View className="w-full px-5 pt-0 pb-6">
//             <View className="mb-2">
//               <Text className="text-2xl font-pbold text-gray-600 text-center">
//                 Sign In as {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)}
//               </Text>
//             </View>
//             <InputField
//               label=""
//               icon="call-outline"
//               placeholder="Enter phone number"
//               keyboardType="phone-pad"
//               value={phone}
//               onChangeText={setPhone}
//             />
//             <CustomButton title="Continue" textStyle="text-white" className="mt-5 bg-orange" onPress={handleSignUp} />
//           </View>
//         )}
//       </View>

//       <OTPModal visible={showOtpModal} onVerify={handleVerifyOtp} onClose={() => setShowOtpModal(false)} />
//       <SuccessModal visible={showSuccessModal} onClose={handleSuccess} />
//     </ScrollView>
//   )
// }

// export default SignUp

import { View, Text, ScrollView, Alert } from "react-native";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import OTPModal from "@/components/OTPModal";
import SuccessModal from "@/components/SuccessModal";
import RoleSelector from "@/components/RoleSelector";
import { useState } from "react";
import { router } from "expo-router";
import { useStore } from "@/store";
import {getUserOrCreate} from "@/lib/appwrite";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [step, setStep] = useState<"role" | "phone">("role");

  const { setUserRole, userRole } = useStore();

  const handleRoleSelect = (role: "retailer" | "wholesaler") => {
    setUserRole(role);
    setStep("phone");
  };

  const handleSignUp = () => {
    if (phone.length !== 10) {
      Alert.alert("Invalid Phone Number", "Please enter a valid 10-digit phone number.");
      return;
    }
    setShowOtpModal(true);
  };

  const handleVerifyOtp = async (otp: string) => {
    console.log("Verifying OTP:", otp);
    // Simulate OTP verification success
    setShowOtpModal(false);
    setShowSuccessModal(true);
  };

  const handleSuccess = async () => {
    setShowSuccessModal(false);
    try {
      const user = await getUserOrCreate(phone, userRole || "");
      console.log("User created or fetched:", user);

      if (userRole === "retailer") {
        router.replace("/(retailer)/(tabs)/home");
      } else if (userRole === "wholesaler") {
        router.replace("/(wholesaler)/(tabs)/home");
      } else {
        console.error("User role not set");
        setStep("role");
      }
    } catch (error) {
      console.error("Error creating or fetching user:", error);
      Alert.alert("Error", "Failed to create or fetch user. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-orange-200">
      <View className="flex-1 flex-col justify-evenly">
        {/* Logo and Tagline */}
        <View className="items-center justify-center h-[65%]">
          <View className="flex flex-row items-center bg-black/30 rounded-2xl p-4 mb-4">
            <Text className="text-2xl font-pbold text-white">dukaa</Text>
            <Text className="text-2xl font-pbold text-orange">On</Text>
          </View>
          <Text className="text-xl font-pmedium text-gray-200 text-center">
            Keeping your business going on ...
          </Text>
        </View>

        {/* Role Selection or Sign Up/Sign In */}
        {step === "role" ? (
          <RoleSelector onSelectRole={handleRoleSelect} />
        ) : (
          <View className="w-full px-5 pt-0 pb-6">
            <View className="mb-2">
              <Text className="text-2xl font-pbold text-gray-600 text-center">
                Sign In as {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)}
              </Text>
            </View>
            <InputField
              label=""
              icon="call-outline"
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ""))} // Restrict input to numbers only
            />
            <CustomButton
              title="Continue"
              textStyle="text-white"
              className="mt-5 bg-orange"
              onPress={handleSignUp}
            />
          </View>
        )}
      </View>

      <OTPModal visible={showOtpModal} onVerify={handleVerifyOtp} onClose={() => setShowOtpModal(false)} />
      <SuccessModal visible={showSuccessModal} onClose={handleSuccess} />
    </ScrollView>
  );
};

export default SignUp;
