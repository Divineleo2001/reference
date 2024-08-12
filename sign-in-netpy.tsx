import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "~/components/FormField";
import CustomButton from "~/components/CustomButton";
import { images } from "~/constants";

const SignInPage = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = React.useState({
    username: "",
    password: "",
    phoneNumber: "",
  });

  const submit = async () => {
    if (!form.username || !form.password || !form.phoneNumber) {
      Alert.alert("Error", "Please fill in all fields");
    }
    setSubmitting(true);

    try {

        console.log(form.username, form.password, form.phoneNumber);
    //   const response = await fetch("https://api.netpy.com/v1/products", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX01BTkFHRVIiXSwic3ViIjoiY29uYW4uZEBnbWFpbC5jb20iLCJpYXQiOjE3MjM0NDQ5NTgsImV4cCI6MTcyMzQ2Mjk1OH0.cNIDXDfON5ccOHJtKhZFKKt9EBedXAw7D7ww3iPeBpIrlgkZq-AqZ9erSjv0ZR1-3TYOPDBQLAH7--oA6_o6LQ",
    //     },
    //     body: JSON.stringify({
    //       username: form.username,
    //       password: form.password,
    //       phoneNumber: form.phoneNumber,
    //     }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    } catch (error) {}
  };

  return (
    <SafeAreaView>
      <View>
        <View>
          <Image
            source={images.logo}
            resizeMode="contain"
            
          />
        </View>
        <Text >
          Log in to continue
        </Text>

        <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: string) => setForm({ ...form, username: e })}
        
          />
            <FormField
            title="password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password : e })}
   
          />
            <FormField
            title="phoneNumber"
            value={form.username}
            handleChangeText={(e: string) => setForm({ ...form, username: e })}

          />
  <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles=""
            isLoading={isSubmitting}
            textStyles=""
          />
          

      </View>
    </SafeAreaView>
  );
};

export default SignInPage;
