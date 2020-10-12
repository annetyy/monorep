import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles: any = StyleSheet.create({
  general: {
    overflow: "hidden"
  },
  mobileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height,
    minHeight: 500
  },
  mobileWrapper: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width: "100%",
    maxWidth: 425
  },
  pcContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height,
    minHeight: 500
  },
  pcWrapper: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width: "100%"
  }
});

export default styles;
