import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { RouteComponentProps } from "react-router";

import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../stores/RootStore";

import { Fab } from "../../components/Fab";

import styles from "./styles";

interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>I'm on page: Home</Text>
      <TouchableOpacity
        onPress={() => {
          history.push("/news");
        }}
      >
        <Text>link_to_news</Text>
      </TouchableOpacity>

      <Text>{rootStore.num}</Text>
      <Fab
        onPress={() => {
          rootStore.num += 1;
        }}
        char="+"
      />
    </View>
  );
});
