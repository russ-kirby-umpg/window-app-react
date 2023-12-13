import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ toggle, title }) => (
  <TouchableOpacity onPress={() => toggle()} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#0087d0",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginVertical: 20,
    width: 300
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
  }
});

export default AppButton;