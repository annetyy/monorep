import * as React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface Props {
  onPress: () => void;
  char: string;
}

export const Fab: React.FC<Props> = ({ onPress, char }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Text style={styles.text}>{char}</Text>
    </TouchableOpacity>
  );
};
