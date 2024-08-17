import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>

      <Text style={{ color: "white" , fontSize: 20}}>
        After the sign in Route it to the Home Screen
      </Text>
      <Link href={"/(tabs)/"} asChild>
          <Text
            style={{
              color: "white",
            }}
          >
            Login{" "}
          </Text>
        </Link>
    </View>
  )
}

export default SignIn