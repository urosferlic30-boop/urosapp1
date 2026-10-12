import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Ta stran ne obstaja.</Text>

        {/* @ts-ignore */}
        <Link href="/(tabs)" style={styles.link}>
          <Text style={styles.linkText}>Pojdi na domačo stran!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#d715e9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f80000',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#ff3dc5',
  },
});