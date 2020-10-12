import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { RouteComponentProps } from "react-router";

import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../stores/RootStore";

import { Fab } from "../../components/Fab";

import styles from "./styles";

interface Props extends RouteComponentProps {}

export const News: React.FC<Props> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>I'm on page: News</Text>
      <TouchableOpacity
        onPress={() => {
          history.push("/");
        }}
      >
        <Text>link_to_home</Text>
      </TouchableOpacity>

      <Text>{rootStore.num}</Text>
      <Fab
        onPress={() => {
          rootStore.num -= 1;
        }}
        char="-"
      />
    </View>
  );
});
