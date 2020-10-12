import React from "react";
import { View, Dimensions } from "react-native";
import { Routes } from "./routes";
import styles from "./styles-global";

const { width } = Dimensions.get("window");

export const App = () => {
  let platform = "mobile";
  if (width >= 400) platform = "pc";

  return (
    <View style={styles.general}>
      <View style={styles[`${platform}Container`]}>
        <View style={styles[`${platform}Wrapper`]}>
          <Routes />
        </View>
      </View>
    </View>
  );
};
