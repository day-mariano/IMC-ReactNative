import { StyleSheet, View } from "react-native";
import Title from "./components/Title";
import Main from "./components/Main";

export default function Index() {

  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})