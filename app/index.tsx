import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.eyebrow}>BALoot PRO</Text>
        <Text style={styles.title}>بلوت برو</Text>
        <Text style={styles.subtitle}>
          مساحة التطبيق جاهزة. سنبني الميزات معًا خطوة بخطوة.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FA"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  eyebrow: {
    color: "#64748B",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: 12
  },
  title: {
    color: "#14213D",
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 12
  },
  subtitle: {
    color: "#64748B",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center"
  }
});
