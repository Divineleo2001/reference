import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";


const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-10 ${otherStyles}`}>
      <Text >{title}</Text>

      <View>
        <TextInput
         
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
         {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}

              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
     
      </View>
    </View>
  );
};

export default FormField;
