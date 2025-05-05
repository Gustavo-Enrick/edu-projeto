import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native-web";

export default function Visibilidade({ visivel, setVisivel }) {
  return (
    <View>
      <MaterialIcons
        name={visivel ? "visibility" : "visibility-off"}
        size={24}
        color="black"
        onPress={() => setVisivel(!visivel)}
      />
    </View>
  );
}
