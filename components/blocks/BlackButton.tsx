import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

export default function BlackButton({ text }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}> {text} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  buttonText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    borderRadius: 50,
  },
});
